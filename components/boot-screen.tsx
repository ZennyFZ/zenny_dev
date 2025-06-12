"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { BOOT_SEQUENCE } from "@/constants/boot-sequence";
import Image from "next/image";

interface BootScreenProps {
  terminalHistory: string[];
  setTerminalHistory: React.Dispatch<React.SetStateAction<string[]>>;
  setIsBooting: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

export function BootScreen({
  terminalHistory,
  setTerminalHistory,
  setIsBooting,
  setCurrentView,
}: BootScreenProps) {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const bootTimer = setInterval(() => {
      if (index < BOOT_SEQUENCE.length) {
        setTerminalHistory((prev) => [...prev, `> ${BOOT_SEQUENCE[index]}`]);
        index++;
      } else {
        setIsBooting(false);
        localStorage.setItem("booted", "true");
        setCurrentView("main");
        clearInterval(bootTimer);
      }
    }, 1000);
    return () => clearInterval(bootTimer);
  }, [setTerminalHistory, setIsBooting, setCurrentView]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <Image
            src="/Kemomimi.gif"
            alt="Boot Logo"
            width={150}
            height={150}
            className="mx-auto mb-4 animate-pulse"
          />
        </div>
        <div
          ref={terminalRef}
          className="bg-black border-2 border-green-400 rounded-lg p-4 md:p-6 h-64 md:h-96 overflow-y-auto"
        >
          {terminalHistory.map((line, index) => (
            <div
              key={index}
              className="mb-2 text-green-400 text-sm md:text-base"
            >
              {line}
            </div>
          ))}
          <div className="text-green-400">
            <span className="animate-ping">█</span>
          </div>
        </div>
      </div>
    </div>
  );
}
