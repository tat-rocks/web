export default function Footer() {
  return (
    <footer style={{ background: "#0d1021", borderTop: "1px solid rgba(255,255,255,0.05)" }} className="py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs tracking-widest uppercase" style={{ color: "#99a9b5" }}>
          © {new Date().getFullYear()} TAT Rocks. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "#99a9b5" }}>
          We do geek things.{" "}
          <span style={{ color: "#00c9e3" }}>♥</span>
        </p>
        <nav className="flex gap-6">
          {["WHAT", "WHO", "WHY", "WHERE"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs tracking-widest uppercase hover:text-[#00c9e3] transition-colors"
              style={{ color: "#99a9b5" }}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
