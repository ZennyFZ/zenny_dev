"use client";

import { useState } from "react";

export function usePortfolioState() {
  const [currentView, setCurrentView] = useState("main");
  const [mode, setMode] = useState<"command" | "normal">("normal");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [showMobileTerminal, setShowMobileTerminal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return {
    currentView,
    setCurrentView,
    mode,
    setMode,
    terminalHistory,
    setTerminalHistory,
    currentCommand,
    setCurrentCommand,
    isBooting,
    setIsBooting,
    showMobileTerminal,
    setShowMobileTerminal,
    mobileMenuOpen,
    setMobileMenuOpen,
  };
}
