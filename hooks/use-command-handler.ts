"use client";

import type React from "react";

import { useCallback } from "react";
import { COMMANDS } from "@/constants/commands";

interface UseCommandHandlerProps {
  setTerminalHistory: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentCommand: React.Dispatch<React.SetStateAction<string>>;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
  setMode: React.Dispatch<React.SetStateAction<"command" | "normal">>;
  setShowMobileTerminal: React.Dispatch<React.SetStateAction<boolean>>;
  mode: "command" | "normal";
}

export function useCommandHandler({
  setTerminalHistory,
  setCurrentCommand,
  setCurrentView,
  setMode,
  setShowMobileTerminal,
  mode,
}: UseCommandHandlerProps) {
  const handleCommand = useCallback(
    (cmd: string) => {
      const command = cmd.toLowerCase().trim();
      setTerminalHistory((prev) => [...prev, `$ ${cmd}`]);

      if (command === "clear" || command === "cls") {
        setTerminalHistory([]);
      }

      if (COMMANDS[command as keyof typeof COMMANDS]) {
        setTerminalHistory((prev) => [
          ...prev,
          COMMANDS[command as keyof typeof COMMANDS],
        ]);

        // Navigate based on command
        switch (command) {
          case "overview":
            setCurrentView("main");
            break;
          case "profile":
            setCurrentView("about");
            break;
          case "skills":
            setCurrentView("skills");
            break;
          case "projects":
            setCurrentView("projects");
            break;
          case "certifications":
            setCurrentView("certifications");
            break;
          case "cv_resume":
            window.open("/NhanDinhDo_CV.pdf", "_blank");
            break;
        }
      }

      if (!COMMANDS[command as keyof typeof COMMANDS]) {
        setTerminalHistory((prev) => [
          ...prev,
          `Command not found: ${cmd}. Type 'help' for available commands.`,
        ]);
      }

      setCurrentCommand("");
      setShowMobileTerminal(false);
    },
    [
      setTerminalHistory,
      setCurrentCommand,
      setCurrentView,
      setMode,
      setShowMobileTerminal,
      mode,
    ]
  );

  return { handleCommand };
}
