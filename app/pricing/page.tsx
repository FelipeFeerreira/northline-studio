import { Pricing, ContactCTA } from "@/components/Sections";
export const metadata = { title: "Pricing" };
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Pricing</h1>
      <Pricing />
      <ContactCTA />
    </>
  );
}
