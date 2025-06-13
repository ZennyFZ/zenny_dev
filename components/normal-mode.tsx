"use client";

import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { ContentArea } from "@/components/content-area";
import { MobileTerminal } from "@/components/mobile-terminal";
import { MobileMenu } from "@/components/mobile-menu";
import { useContext } from "react";
import { RootContext } from "@/app/page";

export function NormalMode() {
  const { canvasRef } = useContext(RootContext)!;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-10 md:opacity-20"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10">
        <Header />
        <Navigation />
        <ContentArea />
        <MobileTerminal />
        <MobileMenu />
      </div>
    </div>
  );
}
