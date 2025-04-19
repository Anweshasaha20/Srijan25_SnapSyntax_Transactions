import * as React from "react";
import { ProjectTimeline } from "../components/ProjectTimeline";
import { projects } from "../Data/projects-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center py-8">My Projects</h1>
      <ProjectTimeline projects={projects} />
    </div>
  );
}
