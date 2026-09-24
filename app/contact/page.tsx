import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Let’s talk" };
export default function Contact() {
  return (
    <section className="container-shell grid gap-12 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="eyebrow mb-5">Start a conversation</p>
        <h1 className="section-title">
          Something on
          <br />
          your mind?
          <br />
          <span className="text-[#718069]">Let’s build on it.</span>
        </h1>
        <p className="mt-7 max-w-md leading-7 text-muted">
          A new website, a better store, or one less manual task. Tell us what
          you need and we’ll explore the next step together.
        </p>
        <div className="mt-9 border-t border-line pt-7">
          <h2 className="text-lg font-medium">Prefer to talk it through?</h2>
          {site.calendly ? (
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="button mt-5"
            >
              Schedule a call <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <a
              className="button mt-5"
              href={`mailto:${site.email}?subject=Schedule%20an%20introductory%20call`}
            >
              Arrange a call by email ↗
            </a>
          )}
          <p className="mt-5 text-sm text-muted">
            Or email{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
        <p className="mt-10 text-xs leading-6 text-muted">
          Your direct line to our three-person team.
          <br />
          Working with businesses across the US and Europe.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
