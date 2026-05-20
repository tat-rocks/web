"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "WHAT",   href: "#what"    },
  { label: "WHO",    href: "#who"     },
  { label: "WHY",    href: "#why"     },
  { label: "WHERE",  href: "#where"   },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(23,27,45,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,201,227,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://the.tat.rocks/wp-content/uploads/thegem-logos/logo_0ae960564318c84f1e8774cc5eac14fd_1x.png"
            alt="TAT Rocks"
            style={{ height: "42px", width: "auto" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold tracking-widest hover:text-[#00c9e3] transition-colors"
              style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.2em" }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-accent" style={{ fontSize: "0.65rem", padding: "0.55rem 1.4rem" }}>
            CONTACT US
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(23,27,45,0.98)" }}>
          <div className="px-6 py-4 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-bold tracking-widest text-white/80 hover:text-[#00c9e3]"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-accent text-center" style={{ fontSize: "0.65rem" }} onClick={() => setMenuOpen(false)}>
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
