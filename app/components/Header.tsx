"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "WHAT",       href: "#what"    },
  { label: "WHO",        href: "#who"     },
  { label: "WHY",        href: "#why"     },
  { label: "WHERE",      href: "#where"   },
  { label: "CONTACT US", href: "#contact" },
  { label: "ENGLISH",    href: "#"        },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("what");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["what", "who", "why", "where", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0.8rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {/* Logo centered */}
        <a href="#" style={{ display: "block" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://the.tat.rocks/wp-content/uploads/thegem-logos/logo_0ae960564318c84f1e8774cc5eac14fd_1x.png"
            alt="TAT Rocks"
            style={{ height: "46px", width: "auto" }}
          />
        </a>

        {/* Desktop nav centered */}
        <nav
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "0.3rem" }}
        >
          {navLinks.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = active === id || (l.label === "CONTACT US" && active === "contact") || (l.label === "WHERE" && active === "where");
            return (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.3rem 0.7rem",
                  border: isActive ? "1px solid rgba(255,255,255,0.7)" : "1px solid transparent",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "#00bcd4";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                }}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden absolute right-5 top-4 flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span style={{ display: "block", width: "24px", height: "2px", background: "white" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "white" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "white" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(13,16,33,0.97)", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
