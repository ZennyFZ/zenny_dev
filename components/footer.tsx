"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nhandinhdo291@gmail.com");
    toast.success("Email copied to clipboard!", {
      position: "top-center",
      duration: 2000,
    });
  };

  return (
    <footer className="border-t-2 border-cyan-400 bg-black/90 p-4 md:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm md:text-base">
            © {currentYear} <span className="text-cyan-400">ZennyDev</span>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Button
              onClick={handleCopyEmail}
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10 bg-gray-900/50 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </Button>

            <Button
              onClick={() =>
                window.open("https://linkedin.com/in/nhandinhdo2002")
              }
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10 bg-gray-900/50 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Button>

            <Button
              onClick={() => window.open("https://github.com/ZennyFZ")}
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10 bg-gray-900/50 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Button>

            <Button
              onClick={() =>
                window.open("https://discord.com/users/337217983279661056")
              }
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10 bg-gray-900/50 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
              aria-label="Discord"
            >
              <Image src="/Discord.png" alt="Discord" width={18} height={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
