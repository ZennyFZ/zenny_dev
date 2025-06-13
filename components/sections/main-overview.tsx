"use client";

import { RootContext } from "@/app/_hooks/RootProvider";
import { CERTIFICATIONS } from "@/data/certifications";
import { PROJECTS } from "@/data/projects";
import { SKILLS } from "@/data/skills";
import { useContext } from "react";
import { Timeline } from "../timeline";
import { WORK_EXPERIENCE } from "@/data/experience";

export function MainOverview() {
  const { setCurrentView } = useContext(RootContext)!;

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="space-y-4">
        <div className="text-xl md:text-2xl text-cyan-400 mb-6">
          ◉ OVERVIEW ◉
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div
            className="bg-gray-900/50 border-2 border-green-400 p-3 md:p-6 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300"
            onClick={() => setCurrentView("about")}
          >
            <div className="text-green-400 text-sm md:text-xl mb-2">
              EXPERIENCE LEVEL
            </div>
            <div className="text-2xl md:text-4xl text-white">Fresher</div>
          </div>
          <div
            className="bg-gray-900/50 border-2 border-cyan-400 p-3 md:p-6 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
            onClick={() => setCurrentView("projects")}
          >
            <div className="text-cyan-400 text-sm md:text-xl mb-2">
              PROJECTS
            </div>
            <div className="text-2xl md:text-4xl text-white">
              {PROJECTS.length}
            </div>
          </div>
          <div
            className="bg-gray-900/50 border-2 border-pink-400 p-3 md:p-6 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300"
            onClick={() => setCurrentView("skills")}
          >
            <div className="text-pink-400 text-sm md:text-xl mb-2">SKILLS</div>
            <div className="text-2xl md:text-4xl text-white">
              {SKILLS.length}
            </div>
          </div>
          <div
            className="bg-gray-900/50 border-2 border-purple-400 p-3 md:p-6 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300"
            onClick={() => setCurrentView("certifications")}
          >
            <div className="text-purple-400 text-sm md:text-xl mb-2">CERTS</div>
            <div className="text-2xl md:text-4xl text-white">
              {CERTIFICATIONS.length}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-xl md:text-2xl text-pink-400 mb-4">
          ◉ CAREER_TIMELINE ◉
        </div>
        <Timeline experiences={WORK_EXPERIENCE} />
      </div>
    </div>
  );
}
