"use client";
import { useMutation } from "@tanstack/react-query";
import { useId, useState } from "react";
import Link from "next/link";
import { validateContact } from "@/lib/validation";
import { budgets, projectTypes, timelines, submitInquiry } from "@/lib/inquiry";
export default function ContactForm({
  source = "inquiry",
  details,
}: {
  source?: "inquiry" | "chatbot";
  details?: { projectType: string; budget: string; timeline: string };
}) {
  const [validationError, setValidationError] = useState("");
  const id = useId();
  const mutation = useMutation({ mutationFn: submitInquiry });
  return (
    <form
      className="inquiry-form"
      aria-label="Contact us"
      onChange={() => {
        if (mutation.isSuccess) mutation.reset();
        setValidationError("");
      }}
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
          /* Preserve inputs for retry. */
        }
      }}
    >
      <p className="eyebrow mb-3">
        {source === "chatbot"
          ? "YOUR PROJECT BRIEF"
          : "LET’S DEFINE WHAT’S NEXT"}
      </p>
      <h2 className="text-2xl tracking-tight mb-7">
        Tell us what you have in mind.
      </h2>
      <fieldset disabled={mutation.isPending} className="min-w-0">
        <legend className="sr-only">Project inquiry details</legend>
        <input type="hidden" name="source" value={source} />
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="form-label" htmlFor={`${id}-name`}>
            Name *
            <input
              className="field"
              id={`${id}-name`}
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              placeholder="Your name"
            />
          </label>
          <label className="form-label" htmlFor={`${id}-email`}>
            Work email *
            <input
              className="field"
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@company.com"
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 mt-5">
          <label className="form-label" htmlFor={`${id}-company`}>
            Company <span>(optional)</span>
            <input
              className="field"
              id={`${id}-company`}
              name="company"
              autoComplete="organization"
              maxLength={160}
              placeholder="Company or product"
            />
          </label>
          <label className="form-label" htmlFor={`${id}-phone`}>
            Phone <span>(optional)</span>
            <input
              className="field"
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              placeholder="Include country code"
            />
          </label>
        </div>
        {details ? (
          <div className="brief-summary">
            {Object.entries(details).map(([key, value]) => (
              <div key={key}>
                <span>
                  {key === "projectType"
                    ? "Project"
                    : key === "budget"
                      ? "Budget"
                      : "Timeline"}
                </span>
                <strong>{value}</strong>
                <input name={key} value={value} type="hidden" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-5 mt-5">
            {[
              {
                key: "projectType",
                label: "Project type",
                options: projectTypes,
              },
              {
                key: "budget",
                label: "Estimated budget (USD)",
                options: budgets,
              },
              { key: "timeline", label: "Ideal timeline", options: timelines },
            ].map(({ key, label, options }) => (
              <label className="form-label" key={key} htmlFor={`${id}-${key}`}>
                {label}
                <select
                  className="field"
                  id={`${id}-${key}`}
                  name={key}
                  defaultValue=""
                >
                  <option value="">Let’s discuss</option>
                  {options.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        )}
        <label className="form-label block mt-5" htmlFor={`${id}-message`}>
          About your project *
          <textarea
            className="field min-h-32 resize-y"
            id={`${id}-message`}
            name="message"
            required
            minLength={10}
            maxLength={5000}
            placeholder="What should your system do? What’s getting in the way today?"
          />
        </label>
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${id}-website`}>Leave this empty</label>
          <input
            id={`${id}-website`}
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <p className="mt-4 text-xs leading-5 text-muted">
          Submitting saves your brief so we can respond. No CRM or messaging
          automation is triggered.{" "}
          <Link className="underline" href="/privacy">
            Privacy notice.
          </Link>
        </p>
        <button
          className="button mt-6 w-full"
          type="submit"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Saving your inquiry…" : "Send your inquiry"}
          <span aria-hidden="true">↗</span>
        </button>
      </fieldset>
      {(validationError || mutation.isError) && (
        <p role="alert" className="form-error">
          {validationError || mutation.error?.message}
        </p>
      )}
      <div role="status" aria-live="polite">
        {mutation.isSuccess && !validationError && (
          <p className="form-success">
            Thanks — your message has been saved. We’ll be in touch.
          </p>
        )}
      </div>
    </form>
  );
}
