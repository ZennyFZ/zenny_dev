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
  setShowMobileTerminal,
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
            setShowMobileTerminal(false);
            break;
          case "profile":
            setCurrentView("about");
            setShowMobileTerminal(false);
            break;
          case "skills":
            setCurrentView("skills");
            setShowMobileTerminal(false);
            break;
          case "projects":
            setCurrentView("projects");
            setShowMobileTerminal(false);
            break;
          case "certifications":
            setCurrentView("certifications");
            setShowMobileTerminal(false);
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
    },
    [
      setTerminalHistory,
      setCurrentCommand,
      setCurrentView,
      setShowMobileTerminal,
    ]
  );

  return { handleCommand };
}
