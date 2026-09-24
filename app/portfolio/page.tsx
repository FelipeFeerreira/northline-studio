import { Portfolio, ContactCTA } from "@/components/Sections";
export const metadata = { title: "Portfolio" };
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Portfolio</h1>
      <Portfolio />
      <ContactCTA />
    </>
  );
}
