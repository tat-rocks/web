export default function Footer() {
  return (
    <footer
      style={{
        background: "#0d1021",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "2rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          © {new Date().getFullYear()} TAT Rocks. All rights reserved.
        </p>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem" }}>
          We do geek things.{" "}
          <span style={{ color: "#00bcd4" }}>♥</span>
        </p>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {["WHAT", "WHO", "WHY", "WHERE"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="footer-link">
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
