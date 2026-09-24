export default function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="border-t border-line pt-6">
      <span className="text-sm text-muted">{number} /</span>
      <h3 className="mb-3 mt-7 text-xl font-medium">{title}</h3>
      <p className="text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}
