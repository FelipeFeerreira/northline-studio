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
    <article className="service-item">
      <div className="service-number">
        <span>{number} /</span>
        <span aria-hidden="true">
          {["◫", "✳", "⌁", "▥", "⇄", "⌘"][Number(number) - 1]}
        </span>
      </div>
      <h3>
        <Link href="/contact">
          {title}
          <span aria-hidden="true">↗</span>
        </Link>
      </h3>
      <p>{description}</p>
      <div className="service-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
