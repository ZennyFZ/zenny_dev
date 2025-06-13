"use client";

import { Terminal } from "@/components/terminal";
import { ContentArea } from "@/components/content-area";
import { MobileTerminal } from "@/components/mobile-terminal";
import { useContext } from "react";
import { RootContext } from "@/app/page";

export function CommandMode() {
  const props = useContext(RootContext)!;
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
          <MobileTerminal />
        </div>

        {/* Desktop Command Mode */}
        <div className="hidden md:flex h-screen">
          <Terminal />
          <div className="flex-1 bg-black/80 overflow-y-auto">
            <div className="border-b-2 border-cyan-400 p-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 inline-block">
                    {">"}zenny_dev
                  </div>
                  <div className="text-lg text-green-400 mt-2">
                    fullstack_developer | command_mode_active
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400">STATUS: OPEN_TO_WORK</div>
                </div>
              </div>
            </div>
            <ContentArea />
          </div>
        </div>
      </div>
    </div>
  );
}
