"use client";
import { useState, useEffect } from "react";
import Stars from "./Stars";

export default function NewsSection() {
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
      id="why"
      style={{
        position: "relative",
        background: "transparent",
        overflow: "hidden",
        paddingTop: "60px",
        paddingBottom: "100px",
        minHeight: "700px",
      }}
    >
      <Stars count={55} />

      {/* Steampunk aircraft */}
      <div
        style={{
          position: "absolute",
          top: "3%",
          left: "50%",
          zIndex: 3,
          transform: `translate(calc(-50% + ${mx * 15}px), ${my * 10}px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tat.rocks/wp-content/uploads/2021/01/earlyflyingmachine.png"
          alt=""
          aria-hidden="true"
          className="animate-float"
          style={{
            width: "clamp(130px, 14vw, 210px)",
            height: "auto",
            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
            display: "block",
          }}
        />
      </div>

      {/* Central content */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          textAlign: "center",
          maxWidth: "660px",
          margin: "0 auto",
          padding: "170px 2rem 40px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "1rem",
          }}
        >
          WE HAVE{" "}
          <span style={{ color: "#00bcd4" }}>FANTASTIC NEWS!</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", fontStyle: "italic", marginBottom: "3.5rem" }}>
          We can integrate your business to the world
        </p>

        {/* Fire & Forget */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.2rem",
            marginBottom: "2.5rem",
            transform: `translate(${mx * 8}px, ${my * 5}px)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tat.rocks/wp-content/uploads/2021/01/icaro.png"
            alt=""
            aria-hidden="true"
            style={{ width: "80px", height: "auto", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
          />
          <h3
            className="font-script"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "#d4a84b",
              margin: 0,
            }}
          >
            Fire &amp; Forget!
          </h3>
        </div>

        {/* Stats text */}
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.9rem",
            lineHeight: 2.2,
            letterSpacing: "0.04em",
            marginBottom: "2.5rem",
          }}
        >
          Years of experience in a world of different projects
          <br />
          Strategy, efficiency, speed &amp; inteligence
          <br />
          We are ready!
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(2rem, 6vw, 5rem)",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { num: "10+", label: "Years" },
            { num: "50+", label: "Projects" },
            { num: "4",   label: "Countries" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ color: "#00bcd4", fontSize: "2rem", fontWeight: 900, marginBottom: "0.2rem" }}>
                {s.num}
              </p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.25em" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Upwork */}
        <a
          href="https://www.upwork.com/freelancers/~01ae2e7a1fde0f535b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "58px",
            height: "58px",
            background: "#6FDA44",
            borderRadius: "10px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tat.rocks/wp-content/uploads/2021/01/iconfinder_79-upwork_1929180.svg"
            alt="Upwork"
            style={{ width: "36px", height: "36px", filter: "brightness(0) invert(1)" }}
          />
        </a>
      </div>
    </section>
  );
}
