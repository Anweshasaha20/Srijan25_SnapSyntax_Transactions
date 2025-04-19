import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 px-8">
      <h1 className="text-8xl font-extrabold text-secondary-foreground text-center">
        About Me
      </h1>
      <p className="text-lg max-w-2xl text-secondary-foreground text-center">
        Hi there! I'm a passionate software developer with expertise in modern
        web technologies. I specialize in building responsive, accessible, and
        performant web applications using React, TypeScript, and Next.js. With a
        strong foundation in frontend development and an eye for clean,
        maintainable code, I enjoy tackling complex problems and creating
        elegant solutions. When I'm not coding, you can find me exploring new
        technologies, contributing to open-source projects, and sharing
        knowledge with the developer community. I'm always looking for new
        challenges and opportunities to grow as a developer.
      </p>
      <Button className="mt-6 bg-primary hover:bg-primary/80 text-primary-foreground text-lg px-8 py-3">
        <Link to="/projects">
          View My Projects
        </Link>
      </Button>
    </div>
  );
}

export default About;
