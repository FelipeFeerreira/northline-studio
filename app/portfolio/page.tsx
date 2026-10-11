import { Portfolio, ContactCTA } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Selected concept explorations and interactive demos showing how Northline approaches digital commerce and connected operations. No invented client results.",
  path: "/portfolio",
});
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Portfolio</h1>
      <Portfolio />
      <ContactCTA />
    </>
  );
}
