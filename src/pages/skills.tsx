import { Progress } from "@/components/ui/progress";

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

export default function Skills() {
  // Split the skills array into two columns
  const mid = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, mid);
  const rightSkills = skills.slice(mid);

  return (
    <div className="bg-gradient-to-r from-black to-purple-900 text-white min-h-screen">
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-6xl font-extrabold mb-12 text-center">
          Technical Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {leftSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-xl text-purple-300">{skill.name}</span>
                  <span className="text-lg text-purple-200">
                    {skill.level}%
                  </span>
                </div>
                <Progress
                  value={skill.level}
                  className="bg-purple-900/50 h-3 [&>[role=progressbar]]:bg-black"
                />
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            {rightSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-xl text-purple-300">{skill.name}</span>
                  <span className="text-lg text-purple-200">
                    {skill.level}%
                  </span>
                </div>
                <Progress
                  value={skill.level}
                  className="bg-purple-900/50 h-3 [&>[role=progressbar]]:bg-black"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
