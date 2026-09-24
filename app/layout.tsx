import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Northline — Websites & Intelligent Automation",
    template: "%s | Northline",
  },
  description:
    "An independent team building thoughtful websites, e-commerce stores, and practical AI automations for growing businesses in the US and Europe.",
  openGraph: {
    title: "Northline — Better websites. Smarter systems.",
    description:
      "Web development and practical automation for your next stage of growth.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-accent focus:p-4"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
