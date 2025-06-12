/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Terminal, Smartphone } from "lucide-react";
import { useCommandHandler } from "@/hooks/use-command-handler";
import { CERTIFICATIONS } from "@/data/certifications";
import type { PortfolioProps } from "@/types/portfolio";

export function MobileCommandInterface(props: PortfolioProps) {
  const {
    mode,
    setMode,
    setShowMobileTerminal,
    setTerminalHistory,
    setCurrentCommand,
    setCurrentView,
    setShowMobileTerminal: setShowMobileTerminalProp,
  } = props;

  const { handleCommand } = useCommandHandler({
    setTerminalHistory,
    setCurrentCommand,
    setCurrentView,
    setMode,
    setShowMobileTerminal: setShowMobileTerminalProp,
    mode,
  });

  return (
    <>
      <div className="border-b-2 border-cyan-400 bg-black/90 p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg text-cyan-400">◉ COMMAND_MODE</div>
            <div className="text-xs text-gray-400">
              Tap terminal icon to access
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setShowMobileTerminal(true)}
              className="bg-transparent text-yellow-400 hover:bg-yellow-400/20 p-2"
            >
              <Terminal size={20} />
            </Button>
            <div className="flex items-center space-x-1">
              <Terminal size={14} className="text-yellow-400" />
              <Switch
                checked={mode === "normal"}
                onCheckedChange={(checked) =>
                  setMode(checked ? "normal" : "command")
                }
                className="data-[state=checked]:bg-cyan-400 scale-75"
              />
              <Smartphone size={14} className="text-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-center space-y-4">
          <div className="text-xl text-cyan-400 mb-6">◉ SYSTEM_OVERVIEW ◉</div>
          <div className="grid grid-cols-2 gap-3">
            <div
              className="bg-gray-900/50 border-2 border-green-400 p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300"
              onClick={() => handleCommand("about")}
            >
              <div className="text-green-400 text-sm mb-2">EXPERIENCE</div>
              <div className="text-2xl text-white">3.5+ YRS</div>
              <div className="text-xs text-gray-400 mt-1">
                Tap or type 'about'
              </div>
            </div>
            <div
              className="bg-gray-900/50 border-2 border-cyan-400 p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
              onClick={() => handleCommand("projects")}
            >
              <div className="text-cyan-400 text-sm mb-2">PROJECTS</div>
              <div className="text-2xl text-white">15+</div>
              <div className="text-xs text-gray-400 mt-1">
                Tap or type 'projects'
              </div>
            </div>
            <div
              className="bg-gray-900/50 border-2 border-pink-400 p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300"
              onClick={() => handleCommand("skills")}
            >
              <div className="text-pink-400 text-sm mb-2">SKILLS</div>
              <div className="text-2xl text-white">99.7%</div>
              <div className="text-xs text-gray-400 mt-1">
                Tap or type 'skills'
              </div>
            </div>
            <div
              className="bg-gray-900/50 border-2 border-purple-400 p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300"
              onClick={() => handleCommand("certifications")}
            >
              <div className="text-purple-400 text-sm mb-2">CERTS</div>
              <div className="text-2xl text-white">{CERTIFICATIONS.length}</div>
              <div className="text-xs text-gray-400 mt-1">
                Tap or type 'certifications'
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
