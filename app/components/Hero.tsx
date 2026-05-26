"use client";
import { useState, useEffect } from "react";
import Stars from "./Stars";

const techIcons = [
  { name: "Ruby",    src: "https://tat.rocks/wp-content/uploads/2021/01/Ruby.png"    },
  { name: "Java",    src: "https://tat.rocks/wp-content/uploads/2021/01/JAVA.png"    },
  { name: "Python",  src: "https://tat.rocks/wp-content/uploads/2021/01/Python.png"  },
  { name: "React",   src: "https://tat.rocks/wp-content/uploads/2021/01/React.png"   },
  { name: "Node.js", src: "https://tat.rocks/wp-content/uploads/2021/01/Node-JS.png" },
  { name: "PHP",     src: "https://tat.rocks/wp-content/uploads/2021/01/PHP.png"     },
  { name: "GraphQL", src: "https://tat.rocks/wp-content/uploads/2021/01/GraphQL.png" },
  { name: "Zendesk", src: "https://tat.rocks/wp-content/uploads/2021/01/zendesk.png" },
  { name: "Shopify", src: "https://tat.rocks/wp-content/uploads/2021/01/shopify.png" },
];

export default function Hero() {
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
      id="what"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Stars layer with parallax */}
      <Stars count={90} />

      {/* Globe — transparent PNG, centered in hero */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -42%) translate(${mx * 8}px, ${my * 5}px)`,
          transition: "transform 0.15s ease-out",
          zIndex: 2,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/globe.png"
          alt=""
          aria-hidden="true"
          style={{
            width: "clamp(700px, 90vw, 1200px)",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Hot air balloon */}
      <div
        style={{
          position: "absolute",
          right: "10%",
          top: "12%",
          zIndex: 4,
          transform: `translate(${mx * 18}px, ${my * 12}px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tat.rocks/wp-content/uploads/2020/12/ballonvintage.png"
          alt=""
          aria-hidden="true"
          className="animate-float-balloon"
          style={{
            width: "clamp(140px, 16vw, 260px)",
            height: "auto",
            filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.45))",
            display: "block",
          }}
        />
      </div>

      {/* Flying man */}
      <div
        style={{
          position: "absolute",
          right: "8%",
          top: "60%",
          zIndex: 4,
          transform: `translate(${mx * 12}px, ${my * 8}px)`,
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
            width: "clamp(110px, 13vw, 210px)",
            height: "auto",
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
            display: "block",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px clamp(1.5rem, 5vw, 5rem) 60px",
        }}
      >
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 200,
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            lineHeight: 1.05,
            color: "white",
            marginBottom: "0",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          WE MAKE YOUR{" "}
          <strong style={{ fontWeight: 900, color: "white" }}>IT DREAMS</strong>
        </h1>
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 200,
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            lineHeight: 1.05,
            color: "white",
            marginBottom: "1.4rem",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          COME TRUE
        </h1>

        <p
          className="animate-fade-up delay-100"
          style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", fontStyle: "italic", marginBottom: "1rem" }}
        >
          Unify your business
        </p>
        <p
          className="animate-fade-up delay-200"
          style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.9, maxWidth: "540px", marginBottom: "0" }}
        >
          TAT offers a service of quality and time delivery beyond expectations.<br />
          A team of professional developers ready to build what you need.<br />
          IT Solutions is here to facilitate your job and integrate your system.
        </p>

        {/* Tech icons */}
        <div
          className="animate-fade-up delay-300"
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", margin: "2rem 0 0" }}
        >
          {techIcons.map((t) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={t.name}
              src={t.src}
              alt={t.name}
              className="tech-logo"
              style={{ height: "30px", width: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
