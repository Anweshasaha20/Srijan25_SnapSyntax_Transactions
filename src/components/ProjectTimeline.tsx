import * as React from "react";
import { Project } from "../types/types";
import { ProjectCard } from "../components/ProjectsCard";

export function ProjectTimeline({ projects }: { projects: Project[] }) {
  return (
    <div className="relative flex flex-col items-center py-12 min-h-screen">
      {/* Vertical Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-blue-500 z-0"></div>
      <div className="flex flex-col gap-16 w-full max-w-4xl z-10">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`flex w-full items-center relative ${
              idx % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Dot connecting to the vertical line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ top: "50%" }}
            >
              <div className="w-5 h-5 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>
            </div>
            {/* Card */}
            <div
              className={`w-[90%] sm:w-1/2 ${idx % 2 === 0 ? "ml-8" : "mr-8"}`}
            >
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
