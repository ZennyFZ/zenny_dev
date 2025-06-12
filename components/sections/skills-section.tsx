"use client";

import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/data/skills";

export function SkillsSection() {
  return (
    <div className="space-y-6">
      <div className="text-2xl md:text-3xl text-purple-400 mb-6 uppercase">
        ◉ Technical_Skills
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-900/50 border-2 border-purple-400 p-4 rounded-lg hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-bold text-sm md:text-base">
                {skill.name}
              </span>
              <Badge className="bg-purple-600 text-white text-xs">
                {skill.category}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
