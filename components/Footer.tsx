import Link from "next/link";
import { site } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="container-shell pb-8 pt-12">
      <div className="flex flex-wrap justify-between gap-8 border-b border-line pb-10">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ↗ northline.
          </Link>
          <p className="mt-3 text-sm text-muted">
            Thoughtful websites. Smarter work.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <Link href="/contact">Let’s talk ↗</Link>
            <a href={`mailto:${site.email}`} className="text-muted">
              {site.email}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/testimonials">Client feedback</Link>
            {site.linkedin ? (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            ) : (
              <span className="text-xs text-muted">LinkedIn · coming soon</span>
            )}
            {site.github ? (
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            ) : (
              <span className="text-xs text-muted">GitHub · coming soon</span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-3 text-xs text-muted">
        <span>© {new Date().getFullYear()} Northline Studio.</span>
        <span>Independent team. Working across time zones.</span>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
