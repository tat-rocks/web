export default function Hero() {
  const words = ["business", "brand", "product", "idea", "vision"];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d1021 0%, #171b2d 50%, #1a1f35 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(https://tat.rocks/wp-content/uploads/2020/12/littleplanet-02-1-scaled-e1608134636534.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Balloon decoration */}
      <div className="absolute right-0 top-20 w-64 md:w-96 opacity-30 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tat.rocks/wp-content/uploads/2020/12/ballonvintage.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center md:text-left">
        <p className="text-[#00c9e3] text-sm font-bold tracking-[0.3em] uppercase mb-6 animate-fade-up">
          TAT Rocks
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-up delay-100">
          WE MAKE YOUR{" "}
          <span className="word-slider">
            <span className="word-slider-inner">
              {[...words, words[0]].map((w, i) => (
                <span key={i} className="block leading-tight">
                  {w}
                </span>
              ))}
            </span>
          </span>
          <br />
          <span style={{ color: "#00c9e3" }}>ROCK</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-xl mb-4 animate-fade-up delay-200">
          TAT offers a service of quality and time delivery beyond expectations.
        </p>
        <p className="text-base text-white/50 max-w-lg mb-10 animate-fade-up delay-200">
          A team of professional developers ready to build what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
          <a href="#what" className="btn-accent inline-block text-sm">
            WHAT WE DO
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-[#00c9e3] text-[#00c9e3] text-sm font-bold tracking-widest uppercase hover:bg-[#00c9e3] hover:text-[#171b2d] transition-colors"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #171b2d)" }}
      />
    </section>
  );
}
