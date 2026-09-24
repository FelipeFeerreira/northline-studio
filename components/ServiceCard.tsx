import Link from "next/link";
export default function ServiceCard({
  number,
  title,
  description,
  tags,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-7 md:p-9">
      <div className="mb-10 flex justify-between">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper text-xl"
          aria-hidden="true"
        >
          {number === "01" ? "⌘" : "✳"}
        </span>
        <span className="text-xs text-muted">/ {number}</span>
      </div>
      <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
      <p className="mt-4 max-w-md leading-7 text-muted">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line px-3 py-1 text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
      <Link
        href="/contact"
        className="mt-8 flex items-center justify-between border-t border-line pt-5 text-sm font-semibold"
      >
        Let’s talk about your project <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
