import React, { useState, useEffect, useRef } from "react";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import About from "./components/About";
import MobileApp from "./mobileView/MobileApp"; // added import

export default function App() {
  const [isMobile, setIsMobile] = useState(false); // new: mobile detection
  const [showScroll, setShowScroll] = useState(false);
  const scrollRef = useRef(null);

  // detect mobile viewport and update on resize / media change
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 640px)");
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(media.matches);
    if (media.addEventListener) media.addEventListener("change", handler);
    else media.addListener(handler);
    return () => {
      if (media.removeEventListener) media.removeEventListener("change", handler);
      else media.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setShowScroll(scrollRef.current.scrollTop > 200);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // If on a small/mobile viewport, render the full-page MobileApp (no frame)
  if (isMobile) {
    return <MobileApp />;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-outside">
      {/* Mobile frame */}
      <div className="relative w-[360px] h-[740px] bg-inside rounded-[2.5rem] shadow-2xl border-4 border-gray-300 overflow-hidden">
        {/* Top notch - keep visually above navbar and non-interactive */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-60 pointer-events-none"></div>

        {/* Portfolio content (scrollable area)
            add scrollPaddingTop so in-container anchor jumps account for sticky header (h-16 -> 4rem) */}
        <div
          ref={scrollRef}
          style={{ scrollPaddingTop: "4rem" }}
          className="p-0 overflow-y-auto h-full scrollbar-hide scroll-smooth relative"
        >
          <div className="mt-6 space-y-4">
            <div className="min-h-screen flex flex-col">
              {/* Sticky Navbar inside the scrollable container.
                  Use top-0 so navbar sticks at the top of the scroll area; z-50 keeps it below the notch. */}
              <div className="sticky top-0 z-50 bg-inside h-16 flex items-center">
                <div className="w-full max-w-lg mx-auto">
                  <Navbar />
                </div>
              </div>

              {/* add pt-16 to main so content doesn't sit under the sticky navbar */}
              <main className="flex-1 w-full max-w-lg mx-auto p-4 pt-5">
                <div id="hero" className="scroll-mt-5">
                  <Hero />
                </div>

                <section id="projects" className="scroll-mt-5">
                  <Projects />
                </section>

                <section id="experience" className="scroll-mt-5">
                  <Experience />
                </section>

                <section id="education" className="scroll-mt-5">
                  <Education />
                </section>

                <section id="about" className="scroll-mt-5">
                  <About />
                </section>
              </main>
              <Footer />
            </div>
          </div>

          {/* 🔝 Scroll-to-top button inside the frame */}
          {showScroll && (
            <div className="sticky bottom-8 flex justify-end pr-6">
              <button
                onClick={scrollToTop}
                className="group relative p-3 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500
                 text-white shadow-lg hover:shadow-xl transition"
              >
                <FiArrowUp size={20} />

                {/* Tooltip */}
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
      </div>
    </div>
  );
}
