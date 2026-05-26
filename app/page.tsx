import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoSection from "./components/WhoSection";
import AgencySection from "./components/AgencySection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Globe-background wrapper: contains all sections except contact */}
        <div
          style={{
            backgroundColor: "#2f6776",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Hero />
          <WhoSection />
          <AgencySection />
          <NewsSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
