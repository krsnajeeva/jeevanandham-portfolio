import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mt-4">
      <h2 className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
        Projects
      </h2>

      {/* <p className="text-sm text-slate-400 mt-1">
        Tap or swipe cards to explore — built for mobile.
      </p> */}

      <div className="overflow-x-auto scroll-snap-x flex gap-4 pt-4 pb-4 scrollbar-hide">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
