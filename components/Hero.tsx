import Link from "next/link";
import SystemMap from "./SystemMap";
export default function Hero() {
  return (
    <section className="hero container-shell">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">
          <span className="status-dot" /> INDEPENDENT DIGITAL PRODUCT STUDIO
        </p>
        <h1>
          We build the <br />
          systems behind <br />
          <span>your business.</span>
        </h1>
        <p className="hero-description">
          Custom web apps, AI assistants and automation, dashboards, and
          internal tools — designed, built, and connected around your business.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="button">
            Let’s build something <span aria-hidden="true">↗</span>
          </Link>
          <a className="text-link" href="#playground">
            Explore the live demo <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-note">
          <span aria-hidden="true">⌘</span> From the first interface to the last
          API call.
        </div>
      </div>
      <SystemMap />
      <div className="hero-bottom">
        <span>DESIGN MEETS ENGINEERING</span>
        <span>WEB / SYSTEMS / AI / AUTOMATION</span>
        <a href="#services" aria-label="Discover our capabilities">
          SCROLL TO EXPLORE ↓
        </a>
      </div>
    </section>
  );
}
