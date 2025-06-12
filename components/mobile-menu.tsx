"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { X, Terminal, Smartphone } from "lucide-react"
import { NAVIGATION_ITEMS } from "@/constants/navigation"
import type { PortfolioProps } from "@/types/portfolio"

export function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  currentView,
  setCurrentView,
  mode,
  setMode,
}: PortfolioProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col h-full">
        <div className="border-b-2 border-cyan-400 p-4 flex justify-between items-center">
          <div className="text-cyan-400 text-lg">◉ NAVIGATION_MENU</div>
          <Button
            onClick={() => setMobileMenuOpen(false)}
            className="bg-transparent text-red-400 hover:bg-red-400/20 p-2"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="flex-1 p-4 space-y-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Button
              key={item.key}
              onClick={() => {
                setCurrentView(item.key)
                setMobileMenuOpen(false)
              }}
              className={`
                w-full font-mono text-lg py-4 border-2 transition-all duration-300
                ${
                  currentView === item.key
                    ? `bg-${item.color}-400 text-black border-${item.color}-400`
                    : `bg-transparent text-${item.color}-400 border-${item.color}-400/50 hover:border-${item.color}-400`
                }
              `}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="border-t-2 border-cyan-400 p-4">
          <div className="flex items-center justify-between">
            <span className="text-green-400">INTERFACE_MODE:</span>
            <div className="flex items-center space-x-2">
              <Terminal size={16} className="text-yellow-400" />
              <Switch
                checked={mode === "normal"}
                onCheckedChange={(checked) => setMode(checked ? "normal" : "command")}
                className="data-[state=checked]:bg-cyan-400"
              />
              <Smartphone size={16} className="text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
