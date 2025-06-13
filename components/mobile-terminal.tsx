"use client";

import { useContext, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useCommandHandler } from "@/hooks/use-command-handler";
import { RootContext } from "@/app/_hooks/RootProvider";

export function MobileTerminal() {
  const {
    showMobileTerminal,
    setShowMobileTerminal,
    terminalHistory,
    currentCommand,
    setCurrentCommand,
    setTerminalHistory,
    setCurrentView,
    mode,
    setMode,
  } = useContext(RootContext)!;

  const terminalRef = useRef<HTMLDivElement>(null);
  const { handleCommand } = useCommandHandler({
    setTerminalHistory,
    setCurrentCommand,
    setCurrentView,
    setMode,
    setShowMobileTerminal,
    mode,
  });

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  return (
    <div
      className={`fixed inset-0 bg-black/95 z-50 transition-transform duration-300 ${
        showMobileTerminal ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="border-b-2 border-cyan-400 p-4 flex justify-between items-center">
          <div className="text-cyan-400 text-lg">◉ MOBILE_TERMINAL</div>
          <Button
            onClick={() => setShowMobileTerminal(false)}
            className="bg-transparent text-red-400 hover:bg-red-400/20 p-2"
          >
            <X size={20} />
          </Button>
        </div>

        <div ref={terminalRef} className="flex-1 p-4 overflow-y-auto text-sm">
          {terminalHistory.map((line, index) => (
            <div key={index} className="mb-1">
              {line.startsWith("$") ? (
                <span className="text-yellow-400">{line}</span>
              ) : line.startsWith(">") ? (
                <span className="text-cyan-400">{line}</span>
              ) : (
                <span className="text-green-400">{line}</span>
              )}
            </div>
          ))}
        </div>

        <div className="border-t-2 border-cyan-400 p-4">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-2">$</span>
            <Input
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCommand(currentCommand);
                }
              }}
              className="bg-transparent border-none text-green-400 focus:ring-0 focus:border-none text-lg"
              placeholder="Enter command..."
              autoFocus
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              "help",
              "profile",
              "skills",
              "projects",
              "certifications",
              "clear",
            ].map((cmd) => (
              <Button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-sm py-2"
              >
                {cmd}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
