import { Pricing, ContactCTA } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata({
  title: "Engagements",
  description:
    "Engagement models for discovery, product builds, and system evolution. Every engagement is scoped as a tailored proposal.",
  path: "/pricing",
});
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Pricing</h1>
      <Pricing />
      <ContactCTA />
    </>
  );
}
