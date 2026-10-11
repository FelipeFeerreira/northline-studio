import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
const siteDescription =
  "Independent digital product studio building custom web apps, AI assistants and automation, dashboards, and internal tools.";
const socialProfiles = [site.linkedin, site.github].filter(Boolean);
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Northline Studio — Digital Products, Systems & AI",
    template: "%s | Northline Studio",
  },
  description: siteDescription,
  applicationName: "Northline Studio",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Northline — We build the systems behind your business.",
    description: siteDescription,
    url: "/",
    siteName: "Northline Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northline — We build the systems behind your business.",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#101312" },
    { media: "(prefers-color-scheme: light)", color: "#f5f6f1" },
  ],
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Northline Studio",
  url: site.url,
  description: siteDescription,
  ...(site.email && site.email !== "hello@example.com"
    ? { email: site.email }
    : {}),
  ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("northline-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-accent focus:text-[var(--accent-ink)] focus:p-4"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
