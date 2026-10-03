import Link from "next/link";
import { site } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="site-footer container-shell">
      <div className="footer-top">
        <div>
          <Link href="/" className="footer-logo">
            <span className="brand-mark">↗</span> northline
            <span className="text-muted">.</span>
          </Link>
          <p>
            Thoughtful interfaces.
            <br />
            Powerful systems. One studio.
          </p>
        </div>
        <nav aria-label="Footer capabilities">
          <h2>EXPLORE</h2>
          <Link href="/services">Capabilities</Link>
          <Link href="/portfolio">Selected work</Link>
          <Link href="/process">Our process</Link>
          <Link href="/pricing">Engagements</Link>
        </nav>
        <nav aria-label="Footer contact">
          <h2>START SOMETHING</h2>
          <Link href="/contact">Tell us about your project ↗</Link>
          {site.email !== "hello@example.com" && (
            <a href={`mailto:${site.email}`}>{site.email}</a>
          )}
          {site.github && (
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          )}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Northline Studio</span>
        <span>DESIGNED WITH PURPOSE. BUILT WITH CARE.</span>
        <Link href="/privacy">Privacy notice</Link>
      </div>
    </footer>
  );
}
