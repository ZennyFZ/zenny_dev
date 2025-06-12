"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/data/projects";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      <div className="text-2xl md:text-3xl text-yellow-400 mb-6">
        ◉ MY_PROJECT
      </div>
      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <Link
            key={index}
            href={project.link || "#"}
            target="_blank"
            className="block"
          >
            <Card
              key={index}
              className="cursor-pointer bg-gray-900/50 border-2 border-yellow-400 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="text-lg md:text-2xl text-white font-bold leading-tight">
                      {project.name}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">
                      {project.length} | {project.type} | {project.teamsize}{" "}
                      {project.teamsize ?? 0 > 1 ? "members" : "1 member"}
                    </div>
                  </div>
                </div>
                <div className="text-gray-300 mb-4 text-sm md:text-base">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-purple-600 text-white text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
