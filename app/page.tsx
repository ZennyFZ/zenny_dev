"use client";
import { BootScreen } from "@/components/boot-screen";
import { CommandMode } from "@/components/command-mode";
import { NormalMode } from "@/components/normal-mode";
import { usePortfolioState } from "@/hooks/use-portfolio-state";
import { useMatrixEffect } from "@/hooks/use-matrix-effect";
import { Footer } from "@/components/footer";
import { RootContext } from "./_hooks/RootProvider";

export default function App() {
  let isBooted = true;

  if (typeof window !== "undefined") {
    isBooted = localStorage.getItem("isBooted") === "true";
  }

  const {
    currentView,
    setCurrentView,
    mode,
    setMode,
    isBooting,
    setIsBooting,
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

  if (isBooting && !isBooted) {
    return (
      <BootScreen
        {...commonProps}
        setIsBooting={setIsBooting}
        setCurrentView={setCurrentView}
      />
    );
  }

  return (
    <RootContext.Provider value={commonProps}>
      {mode === "command" ? <CommandMode /> : <NormalMode />}
      <Footer />
    </RootContext.Provider>
  );
}
