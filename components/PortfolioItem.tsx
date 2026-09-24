import Image from "next/image";
export default function PortfolioItem({
  title,
  category,
  image,
  description,
}: {
  title: string;
  category: string;
  image: string;
  description: string;
}) {
  return (
    <article>
      <div className="relative overflow-hidden rounded-2xl bg-[#e9eee3]">
        <Image
          src={image}
          alt={`${title}: illustrative concept, not client work`}
          width={720}
          height={480}
          className="h-auto w-full"
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider">
          Concept project
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="text-xl font-medium">{title}</h3>
        <span className="pt-1 text-xs text-muted">{category}</span>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}
