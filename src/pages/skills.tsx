import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

type Skill = {
  name: string;
  level: number;
};

const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "CSS", level: 80 },
  { name: "Tailwind CSS", level: 70 },
  { name: "Next.js", level: 65 },
  { name: "Git", level: 75 },
];

// Skill item component for better reusability
const SkillItem = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowProgress(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div key={skill.name} className="transition-opacity duration-500" 
         style={{ opacity: showProgress ? 1 : 0 }}>
      <div className="flex justify-between mb-2">
        <span className="text-xl font-medium text-white">{skill.name}</span>
        <span className="text-lg text-purple-100">
          {skill.level}%
        </span>
      </div>
      <Progress
        value={showProgress ? skill.level : 0}
        className="bg-purple-900/50 h-3 [&>[role=progressbar]]:bg-purple-300 transition-all duration-1000"
      />
    </div>
  );
};

export default function Skills() {
  const mid = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, mid);
  const rightSkills = skills.slice(mid);

  return (
    <div className="py-16 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-6xl font-extrabold mb-12 text-center text-white">
          Technical Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {leftSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} delay={index * 200} />
            ))}
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            {rightSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} delay={(index + mid) * 200} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
