import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import About from "./About";
import Footer from "./Footer";
import { FiArrowUp } from "react-icons/fi";

export default function MobileLayout() {
  const [showScroll, setShowScroll] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(scrollRef.current.scrollTop > 200);
    };
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={scrollRef}
      className="w-full h-full overflow-y-auto scrollbar-hide scroll-smooth relative"
    >
      <Navbar />
      <main className="flex-1 w-full max-w-lg mx-auto p-4">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <About />
      </main>
      <Footer />

      {showScroll && (
        <div className="sticky bottom-8 flex justify-end pr-6">
          <button
            onClick={scrollToTop}
            className="group relative p-3 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500
             text-white shadow-lg hover:shadow-xl transition"
          >
            <FiArrowUp size={20} />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                             px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 
                             group-hover:opacity-100 transition whitespace-nowrap">
              Scroll to Top
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
