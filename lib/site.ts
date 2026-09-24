export const site = {
  name: "Northline",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
};
export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
];
