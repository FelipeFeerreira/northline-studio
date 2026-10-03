import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Northline Studio — Digital Products, Systems & AI",
    template: "%s | Northline",
  },
  description:
    "Independent digital product studio building web applications, custom systems, dashboards, and intelligent automation.",
  openGraph: {
    title: "Northline — We build the systems behind your business.",
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("northline-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}})()`,
          }}
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
