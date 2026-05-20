export default function WhoSection() {
  return (
    <section id="who" style={{ background: "#1e2235" }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="accent-line" />
          <p className="text-[#00c9e3] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            A CREATIVE &amp; DIGITAL AGENCY ON IT SOLUTIONS
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#99a9b5" }}>
            We help brands stand out from the crowd and succeed with our innovative
            ideas and top-notch services.
          </p>
          <p className="text-base leading-relaxed mb-10" style={{ color: "#99a9b5" }}>
            Years of experience in a world of different projects — strategy,
            efficiency, speed &amp; intelligence. We are ready to integrate your
            business with the world.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "50+", label: "Projects Delivered" },
              { num: "4",   label: "Countries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black" style={{ color: "#00c9e3" }}>
                  {stat.num}
                </p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "#99a9b5" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-sm p-8 text-center"
            style={{ background: "#2c2e3d", border: "1px solid rgba(0,201,227,0.15)" }}
          >
            <p className="text-2xl font-black text-white mb-2">CUZ WE</p>
            <p className="text-5xl font-black" style={{ color: "#00c9e3" }}>
              ROCK
            </p>
            <p className="text-2xl font-black text-white">THE WEB</p>
          </div>
          <div
            className="rounded-sm p-6"
            style={{ background: "#2c2e3d", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#99a9b5" }}>
              "We are ready! We can integrate your business to the world with
              top-notch IT solutions, creative strategies, and a team that truly
              delivers."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
