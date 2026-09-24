"use client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";
import { validateContact, type ContactData } from "@/lib/validation";
export default function ContactForm() {
  const [validationError, setValidationError] = useState("");
  const mutation = useMutation({
    mutationFn: async (data: ContactData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success)
        throw new Error(
          result?.error || "Unable to send your message. Please try again.",
        );
      return result;
    },
  });
  return (
    <form
      className="rounded-2xl border border-line bg-white p-6 md:p-9"
      onSubmit={async (e) => {
        e.preventDefault();
        if (mutation.isPending) return;
        const form = e.currentTarget;
        const result = validateContact(Object.fromEntries(new FormData(form)));
        setValidationError(result.error || "");
        if (!result.data) return;
        try {
          await mutation.mutateAsync(result.data);
          form.reset();
        } catch {
          /* Mutation renders the error; preserve input for retry. */
        }
      }}
      aria-label="Contact us"
    >
      <h2 className="mb-7 text-2xl font-medium tracking-tight">
        Tell us what you have in mind.
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium" htmlFor="name">
          Name <span aria-hidden="true">*</span>
          <input
            className="field"
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium" htmlFor="email">
          Work email <span aria-hidden="true">*</span>
          <input
            className="field"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium" htmlFor="phone">
        Phone <span className="font-normal text-muted">(optional)</span>
        <input
          className="field"
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={40}
          placeholder="Include your country code"
        />
      </label>
      <label className="mt-5 block text-sm font-medium" htmlFor="message">
        About your project <span aria-hidden="true">*</span>
        <textarea
          className="field min-h-36 resize-y"
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          placeholder="What are you building or looking to improve?"
        />
      </label>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="mt-4 text-xs leading-5 text-muted">
        We use these details to respond to your inquiry.{" "}
        <Link className="underline" href="/privacy">
          Read our privacy notice.
        </Link>
      </p>
      {(validationError || mutation.isError) && (
        <p
          role="alert"
          className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-800"
        >
          {validationError || mutation.error?.message}
        </p>
      )}
      <div role="status" aria-live="polite">
        {mutation.isSuccess && !validationError && (
          <p className="mt-5 rounded-lg bg-[#edf4df] p-4 text-sm">
            Thanks — your message has been saved. We’ll be in touch.
          </p>
        )}
      </div>
      <button
        className="button mt-6 w-full"
        type="submit"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Sending…" : "Send your inquiry"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
