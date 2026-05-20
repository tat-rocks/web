import Stars from "./Stars";

const services = [
  "Customer Services",
  "API Integration",
  "Ecommerce",
  "Software Development",
  "Digital Marketing",
];

export default function AgencySection() {
  return (
    <section
      id="who"
      style={{
        position: "relative",
        background: "#171b2d",
        overflow: "hidden",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <Stars count={40} />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
        }}
      >
        {/* Script heading — matching the cursive "A CREATIVE + DIGITAL" from original */}
        <h2
          className="font-script"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#00c9e3",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          A Creative &amp; Digital,
          <br />
          Agency on IT Solutions
        </h2>

        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 3rem" }}>
          We help brands stand out from the crowd and succeed with our
          innovative ideas and top-notch services.
        </p>

        {/* "Cuz We Rock The Web" label */}
        <p
          className="font-script"
          style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.4rem", marginBottom: "2.5rem" }}
        >
          Cuz We Rock The Web
        </p>

        {/* Services scattered layout */}
        <div
          id="what"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "220px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem 3rem",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s}
              style={{
                textAlign: "center",
                transform: `translateY(${[0, -20, 10, -15, 5][i] ?? 0}px)`,
              }}
            >
              <p className="service-item">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
