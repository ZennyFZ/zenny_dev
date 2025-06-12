"use client";

import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import type { PortfolioProps } from "@/types/portfolio";

export function Navigation({ currentView, setCurrentView }: PortfolioProps) {
  return (
    <div className="hidden md:block bg-gray-900/90 border-b border-cyan-400 p-4">
      <div className="flex flex-wrap justify-center gap-2">
        {NAVIGATION_ITEMS.map((item) => (
          <Button
            key={item.key}
            onClick={() => {
              if (item.key === "download resume/cv") {
                window.open("/NhanDinhDo_CV.pdf", "_blank");
              } else {
                setCurrentView(item.key);
              }
            }}
            className={`text-sm md:text-base font-mono font-semibold px-4 py-2 rounded-lg transition-colors
              ${
                currentView === item.key
                  ? `bg-${item.color}-500 text-white`
                  : `bg-gray-800 text-${item.color}-400 hover:bg-${item.color}-600`
              }
            `}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
