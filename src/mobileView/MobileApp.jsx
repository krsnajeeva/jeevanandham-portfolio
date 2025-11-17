import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import MobileNavbar from "./MobileNavbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Footer from "../components/Footer";
import About from "../components/About";

export default function MobileApp() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-outside text-slate-900">
      <div className="max-w-lg mx-auto p-0">
        {/* Fixed header: make opaque and add separation so content doesn't show through */}
        <div className="sticky top-0 z-50 bg-inside rounded-[0.5rem] shadow-2xl border-1 border-gray-300  h-20 flex items-center shadow-sm">
          <div className="w-full px-4">
            <MobileNavbar />
          </div>
        </div>

        {/* main is padded by header height (pt-20) so content starts below the sticky header */}
        <main className="w-full max-w-lg mx-auto p-4 pt-10 space-y-6">
          {/* Hero stays at top */}
          <div id="hero" className="scroll-mt-20">
            <Hero />
          </div>

          {/* Ensure each section has an id and scroll margin so scrollIntoView lands below the sticky header */}
          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>

          <section id="experience" className="scroll-mt-20">
            <Experience />
          </section>

          <section id="education" className="scroll-mt-20">
            <Education />
          </section>

          <section id="about" className="scroll-mt-20">
            <About />
          </section>
        </main>

        <Footer />
      </div>

      {showScroll && (
        <div className="fixed right-6 bottom-6 z-50">
          <button
            onClick={scrollToTop}
            className="group relative p-3 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg hover:shadow-xl transition"
          >
            <FiArrowUp size={20} />
            <span
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                   px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 
                   group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
            >
              Scroll to Top
            </span>
          </button>
        </div>
      )}
    </div>
  );
}