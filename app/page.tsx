import Hero from "@/components/Hero";
import DashboardDemo from "@/components/DashboardDemo";
import {
  Services,
  Portfolio,
  Process,
  TechStack,
  ContactCTA,
} from "@/components/Sections";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="capability-strip">
        <div className="container-shell">
          <span>THINK BEYOND THE WEBSITE.</span>
          <span>Digital products</span>
          <i>✳</i>
          <span>Connected systems</span>
          <i>✳</i>
          <span>Intelligent workflows</span>
        </div>
      </div>
      <Services />
      <DashboardDemo />
      <Portfolio />
      <Process />
      <TechStack />
      <ContactCTA />
    </>
  );
}
