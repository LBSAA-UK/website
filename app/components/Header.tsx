"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: "home", label: "Home", href: "/" },
    { key: "about", label: "About", href: "/about" },
    { key: "membership", label: "Membership", href: "/membership" },
    { key: "events", label: "Events", href: "/events" },
    { key: "news", label: "News", href: "/news" },
    { key: "contact", label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="utility-bar">
        <div className="inner">
          <div className="utility-meta">
            <span>
              <span className="dot"></span> A regional chapter of the Lagos Business School Alumni Association
            </span>
          </div>
          <div className="utility-links">
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
            <a href="#" aria-label="Member portal (coming soon)">
              Member Portal &rarr;
            </a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="inner">
          <Link href="/" className="wordmark" aria-label="LBSAA UK Chapter home">
            <img src="/assets/lbsaa-icon.png" alt="" className="wordmark-icon" />
            <div className="text">
              <div className="top">LBSAA</div>
              <div className="sub">United Kingdom Chapter</div>
            </div>
          </Link>
          <nav className="primary-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/membership#apply" className="nav-cta">
              Become a Member
            </Link>
          </nav>
          <button
            className={`nav-toggle ${mobileMenuOpen ? "open" : ""}`}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileNav"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav
          className="mobile-nav"
          id="mobileNav"
          aria-label="Mobile"
          hidden={!mobileMenuOpen}
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/membership#apply"
            className="mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Become a Member &rarr;
          </Link>
        </nav>
      </header>
    </>
  );
}
