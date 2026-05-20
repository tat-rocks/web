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
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#171b2d",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Stars layer */}
      <Stars count={90} />

      {/* Stars SVG overlay — the original STARTS-01-1.svg pattern */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://tat.rocks/wp-content/uploads/2020/12/STARTS-01-1.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.25,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Globe — centerpiece */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://tat.rocks/wp-content/uploads/2020/12/littleplanet-02-1-scaled-e1608134636534.jpg"
        alt="Globe"
        className="animate-float"
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(380px, 60vw, 900px)",
          height: "auto",
          objectFit: "cover",
          borderRadius: "50%",
          opacity: 0.85,
          zIndex: 2,
          animationDelay: "0s",
        }}
      />

      {/* Hot air balloon — upper right */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://tat.rocks/wp-content/uploads/2020/12/ballonvintage.png"
        alt=""
        aria-hidden="true"
        className="animate-float-balloon"
        style={{
          position: "absolute",
          right: "5%",
          top: "2%",
          width: "clamp(160px, 18vw, 280px)",
          height: "auto",
          zIndex: 4,
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
        }}
      />

      {/* Flying man */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://tat.rocks/wp-content/uploads/2021/01/flyingman.png"
        alt=""
        aria-hidden="true"
        className="animate-float"
        style={{
          position: "absolute",
          right: "15%",
          bottom: "8%",
          width: "clamp(120px, 14vw, 220px)",
          height: "auto",
          zIndex: 4,
          animationDelay: "1s",
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: "700px",
          padding: "0 2rem 0 clamp(1.5rem, 6vw, 6rem)",
          paddingTop: "100px",
          paddingBottom: "60px",
        }}
      >
        {/* TAT Rocks label */}
        <p
          className="animate-fade-up"
          style={{
            color: "#00c9e3",
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          TAT ROCKS
        </p>

        {/* Main headline */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            lineHeight: 1.05,
            color: "white",
            marginBottom: "0.3rem",
            textTransform: "uppercase",
          }}
        >
          WE MAKE YOUR{" "}
          <span style={{ color: "#00c9e3" }}>IT DREAMS</span>
        </h1>
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            lineHeight: 1.05,
            color: "white",
            marginBottom: "1.2rem",
            textTransform: "uppercase",
          }}
        >
          COME TRUE
        </h1>

        <p
          className="animate-fade-up delay-200"
          style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}
        >
          Unify your business
        </p>
        <p
          className="animate-fade-up delay-200"
          style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "440px", marginBottom: "0.4rem" }}
        >
          TAT offers a service of quality and time delivery beyond expectations.
        </p>
        <p
          className="animate-fade-up delay-200"
          style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "2rem" }}
        >
          A team of professional developers ready to build what you need.
        </p>

        {/* Tech icons */}
        <div
          className="animate-fade-up delay-300"
          style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", alignItems: "center", marginBottom: "2.2rem" }}
        >
          {techIcons.map((t) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={t.name}
              src={t.src}
              alt={t.name}
              className="tech-logo"
              style={{ height: "28px", width: "auto" }}
            />
          ))}
        </div>

        {/* CTAs */}
        <div className="animate-fade-up delay-400" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#what" className="btn-accent">WHAT WE DO</a>
          <a href="#contact" className="btn-outline">GET IN TOUCH</a>
        </div>

        {/* Bottom tagline */}
        <div style={{ marginTop: "3rem" }} className="animate-fade-up delay-400">
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            WE ARE THE TAT
          </p>
          <p style={{ color: "white", fontSize: "1.4rem", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            AND WE <span style={{ color: "#00c9e3" }}>ROCK</span>
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #171b2d)",
          zIndex: 6,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
