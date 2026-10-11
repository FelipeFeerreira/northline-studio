import { Testimonials, ContactCTA } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata({
  title: "Testimonials",
  description:
    "Northline does not publish invented endorsements. Explore the interactive demonstrations and concept work to see the thinking behind the studio.",
  path: "/testimonials",
});
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Testimonials</h1>
      <Testimonials />
      <ContactCTA />
    </>
  );
}
