import Stars from "./Stars";

export default function NewsSection() {
  return (
    <section
      id="why"
      style={{
        position: "relative",
        background: "#171b2d",
        overflow: "hidden",
        paddingTop: "40px",
        paddingBottom: "100px",
        minHeight: "700px",
      }}
    >
      <Stars count={50} />

      {/* Early flying machine — steampunk aircraft */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://tat.rocks/wp-content/uploads/2021/01/earlyflyingmachine.png"
        alt=""
        aria-hidden="true"
        className="animate-float"
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(140px, 16vw, 220px)",
          height: "auto",
          zIndex: 3,
          filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
        }}
      />

      {/* Central content */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          textAlign: "center",
          maxWidth: "680px",
          margin: "0 auto",
          padding: "160px 2rem 40px",
        }}
      >
        {/* Cloud-like background card */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "120px",
            padding: "3rem 2.5rem",
            marginBottom: "3rem",
            backdropFilter: "blur(8px)",
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
            <span style={{ color: "#00c9e3" }}>FANTASTIC NEWS!</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", fontStyle: "italic" }}>
            We can integrate your business to the world
          </p>
        </div>

        {/* Fire & Forget */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tat.rocks/wp-content/uploads/2021/01/icaro.png"
            alt=""
            aria-hidden="true"
            style={{ width: "90px", height: "auto", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
          />
          <h3
            className="font-script"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#00c9e3",
              margin: 0,
            }}
          >
            Fire &amp; Forget!
          </h3>
        </div>

        {/* Stats text */}
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 2, letterSpacing: "0.05em" }}>
            Years of experience in a world of different projects
            <br />
            Strategy, efficiency, speed &amp; intelligence
            <br />
            We are ready!
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(2rem, 5vw, 4rem)", marginBottom: "2.5rem" }}>
          {[
            { num: "10+", label: "Years" },
            { num: "50+", label: "Projects" },
            { num: "4",   label: "Countries" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ color: "#00c9e3", fontSize: "2rem", fontWeight: 900, marginBottom: "0.25rem" }}>{s.num}</p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Upwork */}
        <a
          href="https://www.upwork.com/freelancers/~01ae2e7a1fde0f535b"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "56px",
            background: "#6FDA44",
            borderRadius: "8px",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          className="hover-scale"
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
