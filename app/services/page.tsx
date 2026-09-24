import { Services, ContactCTA } from "@/components/Sections";
export const metadata = { title: "Services" };
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Services</h1>
      <Services />
      <ContactCTA />
    </>
  );
}
