"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { useContext } from "react";
import { RootContext } from "@/app/_hooks/RootProvider";

export function MobileMenu() {
  const { currentView, setCurrentView, mobileMenuOpen, setMobileMenuOpen } =
    useContext(RootContext)!;

  return (
    <div
      className={`fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="border-b-2 border-cyan-400 p-4 flex justify-between items-center">
          <div className="text-cyan-400 text-lg">◉ NAVIGATION_MENU</div>
          <Button
            onClick={() => setMobileMenuOpen(false)}
            className="bg-transparent text-red-400 hover:bg-red-400/20 p-2"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="flex-1 p-4 space-y-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Button
              key={item.key}
              onClick={() => {
                if (item.key === "download resume/cv") {
                  window.open("/NhanDinhDo_CV.pdf", "_blank");
                } else {
                  setCurrentView(item.key);
                  setMobileMenuOpen(false);
                }
              }}
              className={`
                w-full font-mono text-lg py-4 border-2 transition-all duration-300
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
    </div>
  );
}
