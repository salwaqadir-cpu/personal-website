"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  contactActive?: boolean;
};

export default function SiteHeader({ contactActive = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <div className="shell header-inner">
        <Link aria-label="Salwa Qadir home" className="wordmark" href="/" onClick={closeMenu}>
          <span>SALWA</span>
          <span>QADIR</span>
        </Link>
        <button
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className={`menu-button${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          aria-label="Primary navigation"
          className={`site-nav${menuOpen ? " open" : ""}`}
          id="site-nav"
        >
          <Link href="/#about" onClick={closeMenu}>About</Link>
          <Link href="/#approach" onClick={closeMenu}>Approach</Link>
          <Link href="/#work" onClick={closeMenu}>Work with me</Link>
          <Link href="/#wbc" onClick={closeMenu}>WBC</Link>
          <Link className={`nav-cta${contactActive ? " active" : ""}`} href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
