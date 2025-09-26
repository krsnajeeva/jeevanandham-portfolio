import React from "react";
import { motion as Motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Motion.article
      whileHover={{ scale: 1.01, y: -3, x: 3 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="min-w-full sm:min-w-[90%] md:min-w-[80%] 
                 rounded-2xl p-[1px] bg-gradient-to-tr from-purple-400 to-indigo-400 
                 shadow-lg hover:shadow-xl hover:shadow-purple-400/40 
                 scroll-snap-child relative"
      style={{ scrollSnapAlign: "center" }}
    >
      {/* Inner white card */}
      <div className="rounded-2xl bg-white p-5 h-full">
        {/* Project Image */}
        {/* <div className="h-36 rounded-lg overflow-hidden mb-3 bg-gray-100 flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-sm text-gray-500">No Preview</div>
          )}
        </div> */}

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900">{project.title}</h3>

        {/* Description */}
        <p className="text-xs text-gray-700 mt-2 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Motion.article>
  );
}
