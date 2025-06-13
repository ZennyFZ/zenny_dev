"use client";

import { useContext, useEffect, useRef } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useCommandHandler } from "@/hooks/use-command-handler";
import { RootContext } from "@/app/page";

export function Terminal() {
  const {
    terminalHistory,
    currentCommand,
    setCurrentCommand,
    mode,
    setMode,
    setTerminalHistory,
    setCurrentView,
    setShowMobileTerminal,
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

  console.log("Terminal rendered with mode:", mode);

  return (
    <div className="w-1/3 border-r-2 border-cyan-400 bg-black/90 flex flex-col">
      <div className="border-b-2 border-cyan-400 p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-cyan-400 text-xl">◉ COMMAND_TERMINAL</div>
            <div className="text-sm text-gray-400">
              Type commands to navigate
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-sm">CMD</span>
            <Switch
              checked={mode === "normal"}
              onCheckedChange={(checked) =>
                setMode(checked ? "normal" : "command")
              }
              className="data-[state=checked]:bg-cyan-400"
            />
            <span className="text-cyan-400 text-sm">GUI</span>
          </div>
        </div>
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
            className="bg-transparent border-none text-green-400 focus:ring-0 focus:border-none"
            placeholder="Enter command..."
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
