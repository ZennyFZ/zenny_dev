"use client";

import { Badge } from "@/components/ui/badge";
import type { WorkExperience } from "@/types/work-experience";

interface TimelineProps {
  experiences: WorkExperience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:ml-0.5 md:before:ml-0 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-cyan-400 before:via-pink-400 before:to-purple-400">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="absolute left-4 md:left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 z-10"></div>

          <div
            className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? "md:pr-8" : "md:pl-8"
            }`}
          >
            <div className="bg-gray-900/50 border-2 border-cyan-400 hover:border-pink-400 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/30">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-lg md:text-xl text-white font-bold">
                    {exp.company}
                  </div>
                  <div className="text-green-400 text-sm">{exp.position}</div>
                </div>
                <div className="text-right">
                  <Badge className="bg-purple-600 text-white text-xs">
                    {exp.period}
                  </Badge>
                </div>
              </div>

              <div className="text-gray-300 text-sm mt-3">
                {exp.description}
              </div>

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-3">
                  <div className="text-xs text-gray-400 mb-1">TECH_STACK:</div>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies?.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-yellow-400 text-yellow-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
