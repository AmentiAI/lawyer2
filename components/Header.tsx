"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FIRM, NAV, PHONE, PHONE_TEL } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="topbar">
        <div className="container">
          <span className="pin">Serving Hartford &amp; the Greater Hartford area · Secure video consultations</span>
          <span className="hide-sm">Se habla español · Falamos português · <a href={`tel:${PHONE_TEL}`}>{PHONE}</a></span>
        </div>
      </div>
      <header className="site-header">
        <div className="container">
          <Link className="brand" href="/">
            <span className="brand-mark">JG</span>
            <span className="brand-text"><strong>{FIRM}</strong><span>Hartford, CT Immigration Law</span></span>
          </Link>
          <nav className={`nav${open ? " open" : ""}`} id="site-nav" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}>{n.label}</Link>
            ))}
          </nav>
          <div className="header-cta">
            <a className="header-phone" href={`tel:${PHONE_TEL}`}>{PHONE}</a>
            <Link className="btn btn-gold btn-sm" href="/consultation">Book Now</Link>
            <button className="menu-toggle" aria-controls="site-nav" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
              ☰ Menu
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
