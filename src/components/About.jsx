import React from "react";
import { motion as Motion } from "framer-motion";
import { summary } from "../data/summary";

export default function About() {
  return (
    <section id="about" className="mt-6">
      {/* Heading outside card */}
      <h2 className="mb-4 text-xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="rounded-2xl p-[1px] bg-gradient-to-tr from-purple-400 to-indigo-400 shadow-md">
        {/* Inner white card */}
        <div className="rounded-2xl bg-white p-5 h-full">
          <ul className="space-y-3 text-sm text-gray-700 text-justify">
            {summary.map((point, index) => (
              <Motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                // viewport={{ once: true }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-start gap-2"
              >
                <span className="text-indigo-500 mt-1">•</span>
                <span>{point}</span>
              </Motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
