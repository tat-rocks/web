import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatSection from "./components/WhatSection";
import WhoSection from "./components/WhoSection";
import WhySection from "./components/WhySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatSection />
        <WhoSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
