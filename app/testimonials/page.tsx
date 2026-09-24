import { Testimonials, ContactCTA } from "@/components/Sections";
export const metadata = { title: "Testimonials" };
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Testimonials</h1>
      <Testimonials />
      <ContactCTA />
    </>
  );
}
