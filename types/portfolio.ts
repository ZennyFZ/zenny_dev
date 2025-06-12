import type React from "react";
export interface PortfolioProps {
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
  mode: "command" | "normal";
  setMode: React.Dispatch<React.SetStateAction<"command" | "normal">>;
  terminalHistory: string[];
  setTerminalHistory: React.Dispatch<React.SetStateAction<string[]>>;
  currentCommand: string;
  setCurrentCommand: React.Dispatch<React.SetStateAction<string>>;
  showMobileTerminal: boolean;
  setShowMobileTerminal: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}
