import Link from "next/link";
import ServiceCard from "./ServiceCard";
import PortfolioItem from "./PortfolioItem";
import ProcessStep from "./ProcessStep";
import PricingCard from "./PricingCard";
import TestimonialCard from "./TestimonialCard";
export function Services() {
  return (
    <section id="services" className="container-shell py-20">
      <div className="mb-10 grid gap-5 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">01 / What we do</p>
          <h2 className="section-title">
            Build your presence.
            <br />
            Multiply your potential.
          </h2>
        </div>
        <p className="max-w-md self-end leading-7 text-muted md:justify-self-end">
          A sharper website. A smoother operation. Two ways we help ambitious
          small businesses take their next step.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <ServiceCard
          number="01"
          title="Websites that mean business."
          description="Fast, thoughtful websites and e-commerce experiences that turn a first impression into a next step."
          tags={["Website development", "E-commerce", "Responsive design"]}
        />
        <ServiceCard
          number="02"
          title="Make busywork a thing of the past."
          description="Practical AI and connected workflows that handle repetitive tasks, so your team can focus on the work that matters."
          tags={["AI chatbots", "System integrations", "n8n & Zapier"]}
        />
      </div>
    </section>
  );
}
export function Portfolio() {
  return (
    <section id="work" className="container-shell py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4">02 / Possibilities in practice</p>
          <h2 className="section-title">Good ideas. Built well.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted">
          A look at what we can create. These illustrative concepts will be
          replaced with real client case studies.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <PortfolioItem
          title="Forma — a considered storefront"
          category="E-commerce"
          image="/images/forma.svg"
          description="Concept: a calm, product-first shopping experience for an independent homeware brand."
        />
        <PortfolioItem
          title="Flowdesk — from lead to follow-up"
          category="Automation"
          image="/images/flowdesk.svg"
          description="Concept: one connected inquiry workflow for a growing professional services team."
        />
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section className="container-shell py-20">
      <p className="eyebrow mb-4">03 / How we work</p>
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 className="section-title">
          A clear path.
          <br />
          No black boxes.
        </h2>
        <p className="max-w-sm text-sm leading-6 text-muted">
          You work directly with the people building your project. Clear scope,
          regular updates, and a shared finish line.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Discover",
            description:
              "We listen first. Your goals, your customers, and the friction getting in the way.",
          },
          {
            title: "Make a plan",
            description:
              "A focused proposal with scope, deliverables, timeline, and a transparent quote.",
          },
          {
            title: "Design & build",
            description:
              "We bring it to life in focused milestones, with your feedback along the way.",
          },
          {
            title: "Launch & support",
            description:
              "We test, launch, and hand over. Ongoing support is scoped around your needs.",
          },
        ].map((s, i) => (
          <ProcessStep key={s.title} number={`0${i + 1}`} {...s} />
        ))}
      </div>
    </section>
  );
}
export function Testimonials() {
  return (
    <section className="container-shell grid items-center gap-10 py-20 md:grid-cols-2">
      <div>
        <p className="eyebrow mb-4">04 / Built on relationships</p>
        <h2 className="section-title">
          Small team.
          <br />
          Personally invested.
        </h2>
        <p className="mt-6 max-w-md leading-7 text-muted">
          Two developers and one dedicated sales and project contact. A
          close-knit team for consultancies, gyms, agencies, stores, and service
          businesses across the US and Europe.
        </p>
      </div>
      <TestimonialCard />
    </section>
  );
}
export function Pricing() {
  return (
    <section className="container-shell py-20">
      <p className="eyebrow mb-4">05 / A fit for your next step</p>
      <h2 className="section-title">Right-sized for your business.</h2>
      <p className="mb-10 mt-5 max-w-xl leading-7 text-muted">
        Every project starts with a conversation. We agree on the scope and
        price before the work begins.
      </p>
      <div className="grid gap-5 lg:grid-cols-3">
        <PricingCard
          name="Basic"
          description="A confident first impression for your business."
          features={[
            "Focused business website",
            "Mobile-friendly design",
            "Contact form & essential SEO",
            "Launch & handover",
          ]}
        />
        <PricingCard
          name="Professional"
          featured
          description="A stronger presence and a more connected operation."
          features={[
            "Multi-page site or online store",
            "Custom design & user journeys",
            "One scoped workflow integration",
            "Team training & launch support",
          ]}
        />
        <PricingCard
          name="Premium"
          description="A tailored system for your next stage of growth."
          features={[
            "Custom website or e-commerce",
            "AI & multi-system automation",
            "Discovery & technical planning",
            "A tailored ongoing support plan",
          ]}
        />
      </div>
    </section>
  );
}
export function ContactCTA() {
  return (
    <section className="container-shell py-16">
      <div className="rounded-3xl bg-ink px-7 py-14 text-white md:flex md:items-center md:justify-between md:px-12">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[.18em] text-accent">
            Your next chapter
          </p>
          <h2 className="section-title">Let’s make room for growth.</h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
            Tell us where you want to go. We’ll help you figure out what to
            build.
          </p>
        </div>
        <Link href="/contact" className="button-light mt-8 md:ml-8 md:mt-0">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
