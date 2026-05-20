const services = [
  {
    icon: "🎧",
    title: "Customer Services",
    desc: "Ticketing systems nurture your customer relationships with personalized and responsive support across any channel.",
  },
  {
    icon: "💻",
    title: "Software Development",
    desc: "Designing, developing, and maintaining software for your custom needs.",
  },
  {
    icon: "🔗",
    title: "API Integration",
    desc: "Connect your applications by power processes that keep data in sync and enhance productivity.",
  },
  {
    icon: "📣",
    title: "Digital Marketing",
    desc: "Promote your products and services through digital technologies. Reach a new level of communication with the power of Google Ads and social marketing.",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    desc: "Rise up your store with engineering, make your web professional. Use the proper apps and build them as you need.",
  },
  {
    icon: "🎨",
    title: "Web Design",
    desc: "Beautiful, responsive, and performant web experiences crafted to represent your brand and convert visitors.",
  },
];

export default function WhatSection() {
  return (
    <section id="what" className="py-24 px-6" style={{ background: "#171b2d" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="accent-line" />
          <p className="text-[#00c9e3] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            OUR SERVICES
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card p-8 rounded-sm">
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#99a9b5" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
