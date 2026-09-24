import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-shell py-24">
      <p className="eyebrow">404 / A small detour</p>
      <h1 className="section-title mt-5">This page isn’t here.</h1>
      <Link className="button mt-8" href="/">
        Back to home ↗
      </Link>
    </section>
  );
}
