import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateContact } from "@/lib/validation";
export const runtime = "nodejs";
const MAX_BYTES = 24000;
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return NextResponse.json(
      { error: "This request is not allowed." },
      { status: 403 },
    );
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  )
    return NextResponse.json({ error: "Please send JSON." }, { status: 415 });
  let raw: unknown;
  try {
    if (Number(request.headers.get("content-length")) > MAX_BYTES)
      return NextResponse.json(
        { error: "Message is too large." },
        { status: 413 },
      );
    const reader = request.body?.getReader();
    if (!reader)
      return NextResponse.json(
        { error: "Request body is required." },
        { status: 400 },
      );
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) {
        await reader.cancel();
        return NextResponse.json(
          { error: "Message is too large." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    raw = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON request." },
      { status: 400 },
    );
  }
  const { data, error } = validateContact(raw);
  if (!data) return NextResponse.json({ error }, { status: 400 });
  if (data.website)
    return NextResponse.json({ success: true }, { status: 201 });
  try {
    await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
      },
    });
    return NextResponse.json(
      { success: true },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    console.error("Contact submission persistence failed.");
    return NextResponse.json(
      {
        error:
          "We couldn’t save your message. Please try again or email us directly.",
      },
      { status: 503 },
    );
  }
}
