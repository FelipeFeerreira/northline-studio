export const site = {
  name: "Northline",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
};
export const navigation = [
  { label: "Capabilities", href: "/services" },
  { label: "Our work", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Engagements", href: "/pricing" },
];
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const socialTitle = `${title} | Northline Studio`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "Northline Studio",
      type: "website" as const,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Northline Studio — we build the systems behind your business",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: socialTitle,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}
