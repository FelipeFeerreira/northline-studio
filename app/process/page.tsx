import { Process, ContactCTA } from "@/components/Sections";
export const metadata = { title: "Process" };
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Process</h1>
      <Process />
      <ContactCTA />
    </>
  );
}
