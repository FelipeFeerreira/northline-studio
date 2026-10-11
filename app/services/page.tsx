import { Services, ContactCTA } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata({
  title: "Services",
  description:
    "Custom web apps, AI assistants, workflow automation, dashboards, internal tools, and API or CRM integrations built around your business.",
  path: "/services",
});
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Services</h1>
      <Services />
      <ContactCTA />
    </>
  );
}
