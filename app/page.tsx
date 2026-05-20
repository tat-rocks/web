import Header from "./components/Header";
import Hero from "./components/Hero";
import AgencySection from "./components/AgencySection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AgencySection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
