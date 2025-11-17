import React from "react";
import { motion as Motion } from "framer-motion";
import { contact } from "../data/contact";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <section className="mt-1">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <Motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-base font-extrabold leading-snug truncate max-w-full"
            style={{ fontSize: "clamp(0.9rem, 4vw, 1rem)" }}
          >
            👋 Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
              {contact.name}
            </span>
          </Motion.h1>

          <Motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-xs text-center font-semibold text-gray-700"
          >
            {contact.role}
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0"
          >
            {contact.shortSummary}
            <a
              href="#about"
              className="ml-2 text-indigo-600 font-medium hover:underline"
            >
              Read More →
            </a>
          </Motion.p>

          {/* Buttons
          <Motion.div
            whileTap={{ scale: 0.97 }}
            className="mt-6 flex items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              Contact
            </a>
          </Motion.div> */}
        </div>

        {/* Right: Lottie Animation */}
        {/* <div className="w-40 h-40 md:w-52 md:h-52 flex items-center justify-center bg-gradient-to-tr from-purple-100 to-indigo-100 rounded-full shadow-inner">
          <DotLottieReact
            src="https://lottie.host/f86c6224-62a7-4cae-883c-5cb69457bcd3/30jIeMd4p8.lottie"
            loop
            autoplay
            className="w-28 h-28 md:w-36 md:h-36"
          />
        </div> */}
      </div>
    </section>
  );
}
