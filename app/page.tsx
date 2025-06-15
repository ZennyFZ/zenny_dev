"use client";
import { CommandMode } from "@/components/command-mode";
import { NormalMode } from "@/components/normal-mode";
import { usePortfolioState } from "@/hooks/use-portfolio-state";
import { useMatrixEffect } from "@/hooks/use-matrix-effect";
import { Footer } from "@/components/footer";
import { RootContext } from "./_hooks/RootProvider";

export default function App() {
  const {
    currentView,
    setCurrentView,
    mode,
    setMode,
    terminalHistory,
    setTerminalHistory,
    currentCommand,
    setCurrentCommand,
    showMobileTerminal,
    setShowMobileTerminal,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = usePortfolioState();

  const canvasRef = useMatrixEffect();

  const commonProps = {
    currentView,
    setCurrentView,
    mode,
    setMode,
    terminalHistory,
    setTerminalHistory,
    currentCommand,
    setCurrentCommand,
    showMobileTerminal,
    setShowMobileTerminal,
    mobileMenuOpen,
    setMobileMenuOpen,
    canvasRef,
  };

  return (
    <RootContext.Provider value={commonProps}>
      {mode === "command" ? <CommandMode /> : <NormalMode />}
      <Footer />
    </RootContext.Provider>
  );
}
