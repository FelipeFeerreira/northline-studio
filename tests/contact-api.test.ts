// @vitest-environment node
import { beforeEach, expect, it, vi } from "vitest";
const { create } = vi.hoisted(() => ({ create: vi.fn() }));
vi.mock("@/lib/prisma", () => ({ prisma: { contactSubmission: { create } } }));
import { POST } from "@/app/api/contact/route";
const data = {
  name: "Alex Example",
  email: "alex@example.com",
  message: "Build a new website for our business.",
};
const request = (body: unknown, origin = "https://agency.example") =>
  new Request("https://agency.example/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify(body),
  });
beforeEach(() => {
  create.mockReset();
});
it("persists validated contact data", async () => {
  create.mockResolvedValue({ id: "contact1" });
  const response = await POST(request(data));
  expect(response.status).toBe(201);
  expect(create).toHaveBeenCalledWith({ data: { ...data, phone: null } });
});
it("rejects invalid input before writing", async () => {
  expect((await POST(request({ ...data, email: "invalid" }))).status).toBe(400);
  expect(create).not.toHaveBeenCalled();
});
it("rejects cross-origin submissions", async () => {
  expect((await POST(request(data, "https://other.example"))).status).toBe(403);
  expect(create).not.toHaveBeenCalled();
});
it("does not store honeypot submissions", async () => {
  expect((await POST(request({ ...data, website: "spam" }))).status).toBe(201);
  expect(create).not.toHaveBeenCalled();
});
it("returns a safe error when the database is unavailable", async () => {
  create.mockRejectedValue(new Error("private database credentials"));
  const response = await POST(request(data));
  expect(response.status).toBe(503);
  expect(await response.text()).not.toContain("credentials");
});
it("rejects oversized payloads", async () => {
  expect(
    (await POST(request({ ...data, message: "x".repeat(25000) }))).status,
  ).toBe(413);
  expect(create).not.toHaveBeenCalled();
});
