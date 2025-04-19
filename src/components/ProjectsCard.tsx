import { Project } from "../types/types";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Project
      </a>
      where is the zip file How to Create the ZIP File 1. Copy the Code Into
      Files
    </div>
  );
}
