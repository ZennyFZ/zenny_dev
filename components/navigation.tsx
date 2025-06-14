"use client";

import { RootContext } from "@/app/_hooks/RootProvider";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { useContext } from "react";

export function Navigation() {
  const { currentView, setCurrentView } = useContext(RootContext)!;
  const bgColorVariants = {
    cyan: "bg-cyan-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500",
    pink: "bg-pink-500",
    orange: "bg-orange-500",
  };

  const textColorVariants = {
    cyan: "text-cyan-400",
    green: "text-green-400",
    purple: "text-purple-400",
    yellow: "text-yellow-400",
    pink: "text-pink-400",
    orange: "text-orange-400",
  };

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
                  ? `${
                      bgColorVariants[
                        item.color as keyof typeof bgColorVariants
                      ]
                    } text-white hover:${
                      bgColorVariants[
                        item.color as keyof typeof bgColorVariants
                      ]
                    }`
                  : `bg-gray-800 ${
                      textColorVariants[
                        item.color as keyof typeof textColorVariants
                      ]
                    }`
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
