"use client";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setSent(true); form.reset(); }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      style={{ background: "#171b2d", paddingTop: "0" }}
    >
      <div
        id="where"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "500px",
        }}
        className="contact-grid"
      >
        {/* Left — form */}
        <div
          style={{
            background: "#12151f",
            padding: "clamp(2rem, 6vw, 5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <p style={{ color: "#00c9e3", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Message sent!
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
                We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
              <div>
                <label>Name *</label>
                <input type="text" name="name" placeholder="" required />
              </div>
              <div>
                <label>Email *</label>
                <input type="email" name="email" placeholder="" required />
              </div>
              <div>
                <label>Message</label>
                <textarea name="message" rows={5} placeholder="" />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn-accent"
                  style={{ opacity: loading ? 0.7 : 1 }}
                  disabled={loading}
                >
                  {loading ? "SENDING..." : "SUBMIT DETAILS"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right — contact info */}
        <div
          style={{
            background: "#1a1e30",
            padding: "clamp(2rem, 6vw, 5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "#00c9e3",
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            CONTACT US
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "0.2rem",
            }}
          >
            GET IN{" "}
            <span style={{ color: "#00c9e3" }}>TOUCH</span>
          </h2>

          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <p style={{ color: "#00c9e3", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                Email
              </p>
              <a href="mailto:hello@the.tat.rocks" className="contact-link">
                hello@the.tat.rocks
              </a>
            </div>
            <div>
              <p style={{ color: "#00c9e3", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                Upwork
              </p>
              <a
                href="https://www.upwork.com/freelancers/~01ae2e7a1fde0f535b"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View Profile on Upwork
              </a>
            </div>
            <div>
              <p style={{ color: "#00c9e3", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                Follow Us
              </p>
              <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                {["LinkedIn", "GitHub", "Twitter", "Instagram"].map((s) => (
                  <a key={s} href="#" className="social-link">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
