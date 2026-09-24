import Hero from "@/components/Hero";
import {
  Services,
  Portfolio,
  Process,
  Testimonials,
  Pricing,
  ContactCTA,
} from "@/components/Sections";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-y border-line">
        <div className="container-shell flex flex-wrap items-center justify-between gap-5 py-7 text-xs text-muted">
          <span className="uppercase tracking-widest">
            Built for your kind of business
          </span>
          {[
            "Consultancies",
            "Fitness & wellness",
            "Agencies",
            "E-commerce",
            "Service providers",
          ].map((x) => (
            <span className="font-semibold" key={x}>
              {x}
            </span>
          ))}
        </div>
      </div>
      <Services />
      <div className="border-y border-line bg-[#eef1e9]">
        <Portfolio />
      </div>
      <Process />
      <div className="border-y border-line">
        <Testimonials />
      </div>
      <Pricing />
      <ContactCTA />
    </>
  );
}
