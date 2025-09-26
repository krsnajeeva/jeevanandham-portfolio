import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-outside">
      {/* Desktop & tablet: show mobile frame */}
      <div className="hidden md:block relative w-[360px] h-[740px] bg-inside rounded-[2.5rem] shadow-2xl border-4 border-gray-300 overflow-hidden">
        {/* Top notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl"></div>

        {/* Portfolio content */}
        <div className="p-1 overflow-y-auto h-full scrollbar-hide">
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
        </div>
      </div>

      {/* Mobile: render directly without frame */}
      <div className="block md:hidden w-full h-full overflow-y-auto scrollbar-hide">
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
  );
}
