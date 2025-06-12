"use client";

import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { ContentArea } from "@/components/content-area";
import { MobileTerminal } from "@/components/mobile-terminal";
import { MobileMenu } from "@/components/mobile-menu";
import type { PortfolioProps } from "@/types/portfolio";

export function NormalMode(props: PortfolioProps) {
  const { canvasRef } = props;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-10 md:opacity-20"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10">
        <Header {...props} />
        <Navigation {...props} />
        <ContentArea {...props} />
        <MobileTerminal {...props} />
        <MobileMenu {...props} />
      </div>
    </div>
  );
}
