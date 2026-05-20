"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "WHAT", href: "#what" },
  { label: "WHO",  href: "#who"  },
  { label: "WHY",  href: "#why"  },
  { label: "WHERE",href: "#where"},
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "#171b2d" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="https://the.tat.rocks/wp-content/uploads/thegem-logos/logo_0ae960564318c84f1e8774cc5eac14fd_1x.png"
            alt="TAT Rocks"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-widest text-white/80 hover:text-[#00c9e3] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-accent text-xs px-5 py-2"
          >
            CONTACT US
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden" style={{ background: "#171b2d" }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold tracking-widest text-white/80 hover:text-[#00c9e3]"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-accent text-xs text-center py-2" onClick={() => setMenuOpen(false)}>
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
