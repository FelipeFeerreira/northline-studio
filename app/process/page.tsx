import { Process, ContactCTA } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata({
  title: "Process",
  description:
    "A clear four-stage process for custom software: discover and define, design the system, build and validate, then launch and evolve.",
  path: "/process",
});
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Process</h1>
      <Process />
      <ContactCTA />
    </>
  );
}
