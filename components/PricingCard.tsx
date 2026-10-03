import Link from "next/link";
export default function PricingCard({
  name,
  description,
  features,
  featured = false,
}: {
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl border p-7 ${featured ? "border-accent bg-surface text-ink" : "border-line bg-surface"}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">{name}</h3>
        {featured && (
          <span className="rounded-full bg-accent px-2 py-1 text-[10px] font-semibold text-[var(--accent-ink)]">
            ROOM TO GROW
          </span>
        )}
      </div>
      <p className="mt-3 min-h-12 text-sm leading-6 text-muted">
        {description}
      </p>
      <p className="mb-1 mt-7 text-3xl tracking-tight">Let’s scope it.</p>
      <p className="text-xs text-muted">
        A clear, tailored quote. No surprises.
      </p>
      <ul className="my-8 space-y-4 text-sm">
        {features.map((f) => (
          <li key={f} className="flex gap-3">
            <span aria-hidden="true">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={"/contact"}
        className={`${featured ? "button-light" : "button"} mt-auto`}
      >
        Discuss {name.toLowerCase()} <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
