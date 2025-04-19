import { Project } from "../types/types";
import { Button } from "./ui/button";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-primary-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-52 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/30"></div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-secondary-800">
          {project.title}
        </h3>
        <p className="text-secondary-500 mb-5 flex-grow">
          {project.description}
        </p>
        <Button>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-secondary-600 text-white rounded-md font-medium text-center hover:bg-secondary-700 transition-colors inline-block"
          >
            View Project
          </a>
        </Button>
      </div>
    </div>
  );
}
