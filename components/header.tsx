"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, Terminal, Smartphone } from "lucide-react";
import { useContext } from "react";
import { RootContext } from "@/app/_hooks/RootProvider";

export function Header() {
  const { mode, setMode, setShowMobileTerminal, setMobileMenuOpen } =
    useContext(RootContext)!;

  return (
    <div
      className={`border-b-2 border-cyan-400 bg-black/90 p-4
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 inline-block">
            {">"}zenny_dev
          </div>
          <div className="text-xs md:text-lg text-green-400 mt-1">
            fullstack_developer
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button
            onClick={() => setShowMobileTerminal(true)}
            className="bg-transparent text-yellow-400 hover:bg-yellow-400/20 p-2"
          >
            <Terminal size={20} />
          </Button>
          <Button
            onClick={() => setMobileMenuOpen(true)}
            className="bg-transparent text-cyan-400 hover:bg-cyan-400/20 p-2"
          >
            <Menu size={20} />
          </Button>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-right">
            <div className="text-green-400">STATUS: OPEN_TO_WORK</div>
          </div>
          <div className="flex items-center space-x-2">
            <Terminal size={16} className="text-yellow-400" />
            <Switch
              checked={mode === "normal"}
              onCheckedChange={(checked) =>
                setMode(checked ? "normal" : "command")
              }
              className="data-[state=checked]:bg-cyan-400"
            />
            <Smartphone size={16} className="text-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
