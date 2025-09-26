import React, { useState, useEffect, useRef } from "react";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  const [showScroll, setShowScroll] = useState(false);
  const scrollRef = useRef(null);

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

  return (
    <div className="h-screen flex items-center justify-center bg-outside">
      {/* Mobile frame */}
      <div className="relative w-[360px] h-[740px] bg-inside rounded-[2.5rem] shadow-2xl border-4 border-gray-300 overflow-hidden">
        {/* Top notch */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl"></div>

        {/* Portfolio content (scrollable area) */}
        <div
          ref={scrollRef}
          className="p-1 overflow-y-auto h-full scrollbar-hide scroll-smooth relative"
        >
          <div className="mt-6 space-y-4">
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 w-full max-w-lg mx-auto p-4">
                <Hero />
                <Projects />
                <Experience />
                <Education />
                <About />
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
