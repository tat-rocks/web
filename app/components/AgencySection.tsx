"use client";
import { useEffect, useState } from "react";
import Stars from "./Stars";

const services = [
  {
    title: "Customer Services",
    desc: "Ticketing systems nurture your customer relationships with personalized and responsive support across any channel.",
    pos: { top: "12%", left: "4%" },
    parallax: { x: 10, y: 7 },
  },
  {
    title: "API Integration",
    desc: "Connect your applications by powering processes that keep data in sync and enhance productivity.",
    pos: { top: "8%", left: "36%" },
    parallax: { x: -8, y: 12 },
  },
  {
    title: "Ecommerce",
    desc: "Rise up your store with engineering, make your web professional. Use the proper apps and build them as you need.",
    pos: { top: "18%", left: "68%" },
    parallax: { x: 14, y: -6 },
  },
  {
    title: "Software development",
    desc: "Designing, developing, and maintaining software for your custom needs.",
    pos: { top: "55%", left: "6%" },
    parallax: { x: -12, y: 8 },
  },
  {
    title: "Digital Marketing",
    desc: "Promote your products and services through digital technologies. Reach a new level of communication with the power of Google Ads and social marketing.",
    pos: { top: "60%", left: "60%" },
    parallax: { x: 10, y: -10 },
  },
];

export default function AgencySection() {
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMx((e.clientX / window.innerWidth - 0.5) * 2);
      setMy((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#2f6776",
        overflow: "hidden",
        paddingTop: "40px",
        paddingBottom: "60px",
      }}
    >
      <Stars count={45} />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          paddingTop: "2rem",
          paddingBottom: "1rem",
        }}
      >
        {/* Cuz We Rock The Web */}
        <h2
          className="font-pacifico"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            color: "#00bcd4",
            marginBottom: "1rem",
            letterSpacing: "0.02em",
          }}
        >
          Cuz We Rock The Web
        </h2>
      </div>

      {/* Services scattered layout */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
      <div
        id="what"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "clamp(480px, 60vh, 700px)",
          zIndex: 3,
        }}
      >
        {/* Steampunk aircraft — center */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            zIndex: 4,
            transform: `translate(calc(-50% + ${mx * 12}px), ${my * 8}px)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tat.rocks/wp-content/uploads/2021/01/earlyflyingmachine.png"
            alt=""
            aria-hidden="true"
            className="animate-float"
            style={{ width: "clamp(120px, 13vw, 200px)", height: "auto", filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))", display: "block" }}
          />
        </div>

        {services.map((s) => (
          <div
            key={s.title}
            style={{
              position: "absolute",
              ...s.pos,
              transform: `translate(${mx * s.parallax.x}px, ${my * s.parallax.y}px)`,
              transition: "transform 0.12s ease-out",
              textAlign: "center",
              maxWidth: "220px",
              zIndex: 3,
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                fontWeight: 600,
                letterSpacing: "0.04em",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
              }}
            >
              {s.title}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.75rem",
                fontStyle: "italic",
                lineHeight: 1.6,
                maxWidth: "200px",
                margin: "0 auto",
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
