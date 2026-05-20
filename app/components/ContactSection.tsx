"use client";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Replace YOUR_FORM_ID with your Formspree form ID
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSent(true);
      form.reset();
    }
  }

  return (
    <section id="contact" style={{ background: "#1e2235" }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* WHERE info */}
        <div id="where">
          <span className="accent-line" />
          <p className="text-[#00c9e3] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Where To Find Us
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            GET IN TOUCH
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#00c9e3" }}>
                Email
              </p>
              <a
                href="mailto:hello@the.tat.rocks"
                className="text-white/80 hover:text-[#00c9e3] transition-colors"
              >
                hello@the.tat.rocks
              </a>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#00c9e3" }}>
                Upwork
              </p>
              <a
                href="https://www.upwork.com/freelancers/~01ae2e7a1fde0f535b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#00c9e3] transition-colors"
              >
                View Profile on Upwork
              </a>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#00c9e3" }}>
                Follow Us
              </p>
              <div className="flex gap-4">
                {[
                  { label: "LinkedIn",  href: "#" },
                  { label: "GitHub",    href: "#" },
                  { label: "Twitter",   href: "#" },
                  { label: "Instagram", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-xs font-bold tracking-widest text-white/50 hover:text-[#00c9e3] transition-colors uppercase"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <span className="accent-line" />
          <p className="text-[#00c9e3] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            SEND US A MESSAGE
          </h2>

          {sent ? (
            <div
              className="p-8 text-center"
              style={{ background: "#2c2e3d", border: "1px solid #00c9e3" }}
            >
              <p className="text-[#00c9e3] font-bold text-lg mb-2">Message Sent!</p>
              <p style={{ color: "#99a9b5" }}>We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
              />
              <button type="submit" className="btn-accent">
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
