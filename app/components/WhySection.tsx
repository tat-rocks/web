const techLogos = [
  { name: "Ruby",     src: "https://tat.rocks/wp-content/uploads/2021/01/Ruby.png"     },
  { name: "Java",     src: "https://tat.rocks/wp-content/uploads/2021/01/JAVA.png"     },
  { name: "Python",   src: "https://tat.rocks/wp-content/uploads/2021/01/Python.png"   },
  { name: "React",    src: "https://tat.rocks/wp-content/uploads/2021/01/React.png"    },
  { name: "Node.js",  src: "https://tat.rocks/wp-content/uploads/2021/01/Node-JS.png"  },
  { name: "PHP",      src: "https://tat.rocks/wp-content/uploads/2021/01/PHP.png"      },
  { name: "GraphQL",  src: "https://tat.rocks/wp-content/uploads/2021/01/GraphQL.png"  },
  { name: "Zendesk",  src: "https://tat.rocks/wp-content/uploads/2021/01/zendesk.png"  },
  { name: "Shopify",  src: "https://tat.rocks/wp-content/uploads/2021/01/shopify.png"  },
];

const reasons = [
  {
    icon: "⚡",
    title: "Speed & Efficiency",
    desc: "We deliver fast without sacrificing quality. Time is your most valuable asset.",
  },
  {
    icon: "🧠",
    title: "Strategy First",
    desc: "Every solution starts with a clear understanding of your business goals.",
  },
  {
    icon: "🌐",
    title: "Global Reach",
    desc: "We work with clients across 4 continents, bringing a global perspective to every project.",
  },
  {
    icon: "🔒",
    title: "Reliable & Secure",
    desc: "Robust, scalable, and secure solutions you can count on long-term.",
  },
];

export default function WhySection() {
  return (
    <section id="why" style={{ background: "#171b2d" }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="accent-line mx-auto" />
          <p className="text-[#00c9e3] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            WHY TAT ROCKS
          </h2>
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {reasons.map((r) => (
            <div key={r.title} className="text-center p-6">
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-base font-bold text-white mb-2 tracking-wide">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#99a9b5" }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-center text-xs font-bold tracking-[0.3em] uppercase mb-10" style={{ color: "#99a9b5" }}>
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {techLogos.map((t) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={t.name}
                src={t.src}
                alt={t.name}
                className="tech-logo h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
