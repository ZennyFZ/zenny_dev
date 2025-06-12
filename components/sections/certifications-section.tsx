"use client";

import { Card } from "@/components/ui/card";
import { CERTIFICATIONS } from "@/data/certifications";
import Link from "next/link";

export function CertificationsSection() {
  return (
    <div className="space-y-6">
      <div className="text-2xl md:text-3xl text-pink-400 mb-6">
        ◉ CERTIFICATION_VAULT
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <Link key={index} href={cert.link ?? "#"} target="_blank">
            <Card
              key={index}
              className="h-40 bg-gray-900/50 border-2 border-pink-400 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="text-lg md:text-xl text-white font-bold leading-tight">
                      {cert.name}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">
                      ISSUED BY: {cert.issuer}
                    </div>
                  </div>
                  <div className="text-right space-y-1 ml-2">
                    <div className="text-cyan-400 text-xs md:text-sm">
                      {cert.date}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
