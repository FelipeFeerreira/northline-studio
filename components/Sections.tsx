import Link from "next/link";
import ServiceCard from "./ServiceCard";
import PortfolioItem from "./PortfolioItem";
import ProcessStep from "./ProcessStep";
import PricingCard from "./PricingCard";
export function Services() {
  const services = [
    {
      title: "Web experiences & applications",
      description:
        "From a distinctive website to a full SaaS product. Interfaces that feel considered, with the engineering to back them up.",
      tags: ["Web apps", "SaaS", "E-commerce"],
    },
    {
      title: "AI assistants & chatbots",
      description:
        "Useful conversational experiences that collect context, answer questions, and hand off to people when it matters.",
      tags: ["Guided assistants", "Knowledge tools", "Human handoff"],
    },
    {
      title: "Workflow automation",
      description:
        "Replace repetitive steps with deliberate workflows. Clear triggers, reliable execution, and visibility when something needs attention.",
      tags: ["Process mapping", "Event-driven workflows"],
    },
    {
      title: "Dashboards & internal tools",
      description:
        "Give your team a focused workspace for the data, decisions, and everyday operations that move your business forward.",
      tags: ["Operations", "Reporting", "Admin tools"],
    },
    {
      title: "API & CRM integrations",
      description:
        "Design connections between your website, customer records, and operational tools. Scope each integration around the APIs you use.",
      tags: ["APIs", "Webhooks", "Data synchronization"],
    },
    {
      title: "Custom business systems",
      description:
        "When an off-the-shelf tool doesn’t fit, build around your actual process. A maintainable foundation you can keep evolving.",
      tags: ["Architecture", "Databases", "Custom software"],
    },
  ];
  return (
    <section id="services" className="container-shell section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / WHAT WE BUILD</p>
          <h2 className="section-title">
            Your ambition.
            <br />
            <span className="text-muted">Our building blocks.</span>
          </h2>
        </div>
        <p>
          One thoughtful system beats a collection of disconnected tools. We
          design and build the pieces, and the connections between them.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, i) => (
          <ServiceCard number={`0${i + 1}`} key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
export function Portfolio() {
  return (
    <section id="work" className="container-shell section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / SELECTED EXPLORATIONS</p>
          <h2 className="section-title">
            Ideas you can see.
            <br />
            <span className="text-muted">Systems you can imagine.</span>
          </h2>
        </div>
        <p>
          Independent design concepts, not client engagements. An exploration of
          commerce and connected operations, without invented results.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <PortfolioItem
          title="Forma / Digital commerce"
          category="01 — Storefront concept"
          image="/images/forma.svg"
          description="Exploring a product-first storefront: considered navigation, a clear visual hierarchy, and a responsive shopping experience."
        />
        <PortfolioItem
          title="Flowdesk / Connected operations"
          category="02 — System concept"
          image="/images/flowdesk.svg"
          description="Exploring the path from inquiry to organized pipeline. Try the interactive dashboard to experience the idea."
        />
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section id="process" className="container-shell section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / FROM IDEA TO INFRASTRUCTURE</p>
          <h2 className="section-title">
            Complex work.
            <br />
            <span className="text-muted">A clear process.</span>
          </h2>
        </div>
        <p>
          Shared decisions, visible progress, and software you understand. You
          stay close to what’s being built.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Discover & define",
            description:
              "Understand the business, map the current process, and agree on the problem worth solving.",
          },
          {
            title: "Design the system",
            description:
              "Shape the experience, data model, and architecture. Define scope and milestones before development.",
          },
          {
            title: "Build & validate",
            description:
              "Deliver working increments. Review interfaces, test important flows, and refine with your feedback.",
          },
          {
            title: "Launch & evolve",
            description:
              "Verify deployment, document the system, and hand over ownership. Scope support around what comes next.",
          },
        ].map((item, i) => (
          <ProcessStep number={`0${i + 1}`} key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
export function TechStack() {
  return (
    <section className="stack-section container-shell">
      <div>
        <p className="eyebrow">ENGINEERING, WITH INTENTION</p>
        <h2>Built on solid foundations.</h2>
        <p>The technologies behind this very experience.</p>
      </div>
      <div className="stack-list">
        {[
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Prisma",
        ].map((name, i) => (
          <span key={name}>
            <i aria-hidden="true">{["N", "◎", "TS", "≈", "▱", "△"][i]}</i>
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
export function Testimonials() {
  return (
    <section className="container-shell section-space">
      <p className="eyebrow">A PORTFOLIO IN PROGRESS</p>
      <h2 className="section-title mt-5">Proof through the product.</h2>
      <p className="max-w-xl text-muted mt-6 leading-7">
        We don’t publish invented endorsements. Explore our interactive
        demonstrations and concept work to see the thinking behind Northline.
      </p>
      <Link href="/#playground" className="button mt-8">
        Explore the demonstration ↗
      </Link>
    </section>
  );
}
export function Pricing() {
  return (
    <section className="container-shell section-space">
      <p className="eyebrow mb-4">ENGAGEMENTS</p>
      <h2 className="section-title">
        The right scope. A clear starting point.
      </h2>
      <p className="mb-10 mt-5 max-w-xl leading-7 text-muted">
        Pricing follows the problem, the scope, and the technical requirements.
        Every engagement starts with a tailored proposal.
      </p>
      <div className="grid gap-5 lg:grid-cols-3">
        <PricingCard
          name="Discovery"
          description="Turn a business challenge into a buildable plan."
          features={[
            "Workflow and requirements mapping",
            "Experience and architecture direction",
            "Defined scope and milestones",
            "Tailored implementation proposal",
          ]}
        />
        <PricingCard
          name="Product build"
          featured
          description="A focused digital product, from design to delivery."
          features={[
            "Custom interfaces and business logic",
            "Database and API implementation",
            "Testing and deployment preparation",
            "Documentation and handover",
          ]}
        />
        <PricingCard
          name="System evolution"
          description="Extend what works. Resolve what holds you back."
          features={[
            "Existing system assessment",
            "Scoped integrations and automations",
            "Performance and UX improvements",
            "A tailored maintenance agreement",
          ]}
        />
      </div>
    </section>
  );
}
export function ContactCTA() {
  return (
    <section className="container-shell section-space">
      <div className="contact-cta">
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER, ENGINEERED.</p>
          <h2>
            What could your
            <br />
            business become?
          </h2>
          <p>
            Let’s connect the dots between your idea and a system that works.
          </p>
        </div>
        <Link href="/contact" className="button">
          Start your project <span aria-hidden="true">↗</span>
        </Link>
        <span className="cta-decoration" aria-hidden="true">
          ↗
        </span>
      </div>
    </section>
  );
}
