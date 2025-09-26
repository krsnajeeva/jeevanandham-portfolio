import React from "react";
import { motion as Motion } from "framer-motion";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="mt-6">
      {/* <h2 className="text-xl font-semibold mb-4">Education</h2> */}
      <h2 className="mb-4 text-xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
        Education
      </h2>
      <ul className="flex flex-col gap-4">
        {education.map((edu, index) => (
          <Motion.li
            key={index}
            whileHover={{ scale: 1.02, y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            // viewport={{ once: true }}
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-2xl p-[1px] bg-gradient-to-tr from-purple-400 to-indigo-400 shadow-md"
          >
            {/* Inner white card */}
            <div className="rounded-2xl bg-white p-4 h-full">
              <div className="text-sm font-semibold text-gray-900">{edu.degree}</div>
              <div className="text-xs text-gray-600">{edu.school}</div>
              <div className="text-xs text-gray-500">{edu.year}</div>
            </div>
          </Motion.li>
        ))}
      </ul>
    </section>
  );
}
