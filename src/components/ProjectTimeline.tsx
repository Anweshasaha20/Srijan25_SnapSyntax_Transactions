import { Project } from "../types/types";
import { ProjectCard } from "../components/ProjectsCard";

export function ProjectTimeline({ projects }: { projects: Project[] }) {
  return (
    <div className="relative flex flex-col items-center py-10">
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-primary z-0"></div>
      <div className="flex flex-col gap-16 md:gap-24 w-full max-w-5xl z-10">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`flex w-full items-center relative ${
              idx % 2 === 0 ? "justify-start" : "justify-end"
            } hover:scale-[1.02] transition-transform duration-300`}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ top: "50%" }}
            >
              <div className="w-6 h-6 bg-secondary border-4 border-primary rounded-full shadow-xl transition-all duration-300"></div>
            </div>
            {/* Card */}
            <div
              className={`w-[90%] sm:w-5/12 ${
                idx % 2 === 0 ? "sm:mr-auto sm:ml-8" : "sm:ml-auto sm:mr-8"
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
