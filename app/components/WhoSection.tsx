"use client";
import { useState, useEffect } from "react";
import Stars from "./Stars";

export default function WhoSection() {
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
      id="who"
      style={{
        position: "relative",
        minHeight: "70vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stars count={50} />

      {/* Flying machine — upper right */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "38%",
          zIndex: 4,
          transform: `translate(${mx * 20}px, ${my * 14}px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tat.rocks/wp-content/uploads/2021/01/flyingman.png"
          alt=""
          aria-hidden="true"
          className="animate-float"
          style={{
            width: "clamp(180px, 22vw, 380px)",
            height: "auto",
            filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.4))",
            display: "block",
          }}
        />
      </div>

      {/* Text content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)",
            color: "rgba(255,255,255,0.75)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            marginBottom: "0.2rem",
          }}
        >
          WE ARE THE TAT
        </p>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 6vw, 5rem)",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            lineHeight: 1,
            marginBottom: "2rem",
          }}
        >
          AND WE <span style={{ color: "#00bcd4" }}>ROCK</span>
        </p>

        <h2
          className="font-script"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 3rem)",
            color: "#00bcd4",
            lineHeight: 1.25,
            marginBottom: "1.2rem",
          }}
        >
          A Creative &amp; Digital,
          <br />
          Agency on IT Solutions
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            maxWidth: "500px",
          }}
        >
          We help brands stand out from the crowd and succeed with our
          innovative ideas and top-notch services.
        </p>
      </div>
    </section>
  );
}
