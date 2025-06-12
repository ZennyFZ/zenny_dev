"use client";

import { Terminal } from "@/components/terminal";
import { ContentArea } from "@/components/content-area";
import { MobileCommandInterface } from "@/components/mobile-command-interface";
import { MobileTerminal } from "@/components/mobile-terminal";
import type { PortfolioProps } from "@/types/portfolio";

export function CommandMode(props: PortfolioProps) {
  const { canvasRef } = props;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10">
        {/* Mobile Command Mode */}
        <div className="md:hidden">
          <MobileCommandInterface {...props} />
          <MobileTerminal {...props} />
        </div>

        {/* Desktop Command Mode */}
        <div className="hidden md:flex h-screen">
          <Terminal {...props} />
          <div className="flex-1 bg-black/80 overflow-y-auto">
            <div className="border-b-2 border-cyan-400 p-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-4xl text-cyan-400">{">"}zenny_dev</div>
                  <div className="text-lg text-green-400 mt-2">
                    fullstack_developer | command_mode_active
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400">STATUS: OPEN_TO_WORK</div>
                </div>
              </div>
            </div>
            <ContentArea {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}
