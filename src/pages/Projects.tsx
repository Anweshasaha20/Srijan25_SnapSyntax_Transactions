import { ProjectTimeline } from "../components/ProjectTimeline";
import { projects } from "../Data/projects-data";

export default function ProjectsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">My Projects</h1>
      <ProjectTimeline projects={projects} />
    </div>
  );
}
