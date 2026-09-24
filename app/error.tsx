"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="container-shell py-24">
      <h1 className="section-title">Something went wrong.</h1>
      <p className="mt-5 text-muted">Please try loading this page again.</p>
      <button className="button mt-8" onClick={reset}>
        Try again
      </button>
    </section>
  );
}
