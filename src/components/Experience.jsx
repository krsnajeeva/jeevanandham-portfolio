import React from "react";
import { motion as Motion } from "framer-motion";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mt-4">
      {/* <h2 className="text-xl font-semibold mb-4">Work Experience</h2> */}
      <h2 className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
        Work Experience
      </h2>

      <div className="flex flex-col gap-4 mt-4">
        {experiences.map((exp, index) => (
          <Motion.div
            key={index}
            whileHover={{ scale: 1.02, y: -2 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // viewport={{ once: true }}
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-2xl p-[1px] bg-gradient-to-tr from-purple-400 to-indigo-400 shadow-md"
          >
            {/* Inner white card */}
            <div className="rounded-2xl bg-white p-4 h-full">
              <h3 className="text-sm font-semibold text-gray-900">
                {exp.role} — {exp.company}
              </h3>
              <p className="text-xs text-gray-700">{exp.duration}</p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {exp.summary}
              </p>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
