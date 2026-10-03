"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useUIStore } from "@/lib/store";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "@/lib/site";
export default function Header() {
  const { menuOpen, toggleMenu, closeMenu } = useUIStore();
  const path = usePathname();
  useEffect(() => {
    closeMenu();
  }, [path, closeMenu]);
  return (
    <header className="site-header sticky top-0 z-30 border-b border-line bg-paper">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Northline home"
          onClick={closeMenu}
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <span aria-hidden="true" className="brand-mark">
            ↗
          </span>{" "}
          northline<span className="text-muted">.</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:gap-9 md:flex"
        >
          {navigation.map((n) => (
            <Link
              aria-current={path === n.href ? "page" : undefined}
              className="text-sm text-muted hover:text-ink aria-[current=page]:text-ink"
              key={n.href}
              href={n.href}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="button hidden md:inline-flex">
            Start a project <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="min-h-11 rounded-md border border-line px-3 py-2 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={toggleMenu}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeMenu();
            }}
          >
            {menuOpen ? "Close ×" : "Menu ☰"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="container-shell flex flex-col gap-1 pb-6 md:hidden"
          onKeyDown={(e) => {
            if (e.key === "Escape") closeMenu();
          }}
        >
          {[...navigation, { label: "Let’s talk", href: "/contact" }].map(
            (n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 hover:bg-surface"
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
