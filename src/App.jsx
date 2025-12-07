import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Propostas from "./components/Propostas";
import Integrantes from "./components/Integrantes";
import ContactAndFAQ from "./components/ContactAndFAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
    }}>
      <div className="w-full relative ">
        <Navbar />

        {/* BACKGROUND + CONTENT */}

        {/* CONTENT */}
        <div className="relative z-10">
          <section id="home">
            <HeroSection />
          </section>
          <section id="propostas">
            <Propostas />
          </section>
          <section id="integrantes">
            <Integrantes />
          </section>
          <section id="contato">
            <ContactAndFAQ />
          </section>
          <section id="rodape">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
