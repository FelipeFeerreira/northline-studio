import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Start your project" };
export default function Contact() {
  return (
    <section className="container-shell contact-page">
      <div>
        <p className="eyebrow mb-5">FROM POSSIBILITY TO PRODUCT</p>
        <h1 className="section-title">
          Your next system
          <br />
          starts with
          <br />
          <span className="text-muted">a conversation.</span>
        </h1>
        <p className="mt-7 max-w-md leading-7 text-muted">
          A product to launch, a workflow to simplify, or a system to connect.
          Tell us where you are and where you want to go.
        </p>
        <ol className="contact-steps">
          <li>
            <span>01</span>Share the context and the challenge.
          </li>
          <li>
            <span>02</span>Explore the technical direction together.
          </li>
          <li>
            <span>03</span>Define a focused scope and proposal.
          </li>
        </ol>
        {site.calendly && (
          <a
            className="text-link"
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a conversation ↗
          </a>
        )}
        {site.email !== "hello@example.com" && (
          <p className="mt-6 text-sm text-muted">
            Prefer email?{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        )}
        <p className="contact-note">
          Early-stage idea? That’s a valid starting point.
          <br />
          Use “Let’s discuss” for anything still taking shape.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
