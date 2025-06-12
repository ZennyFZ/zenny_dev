"use client";

import { MainOverview } from "@/components/sections/main-overview";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import type { PortfolioProps } from "@/types/portfolio";

export function ContentArea({ currentView, ...props }: PortfolioProps) {
  return (
    <div className="p-4 md:p-6">
      {currentView === "main" && (
        <MainOverview currentView={currentView} {...props} />
      )}
      {currentView === "about" && <AboutSection />}
      {currentView === "skills" && <SkillsSection />}
      {currentView === "projects" && <ProjectsSection />}
      {currentView === "certifications" && <CertificationsSection />}
    </div>
  );
}
