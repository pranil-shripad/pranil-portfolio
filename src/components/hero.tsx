"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Layers, Code2, ArrowRight } from "lucide-react";

const stats = [
  { value: "+5", label: "PROJECTS\nCOMPLETED" },
  { value: "+10", label: "TECHNOLOGIES\nMASTERED" },
  { value: "+3", label: "DOMAINS\nEXPLORED" },
];

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-8">
      {/* Ghost heading */}
      <BlurFade delay={0.1} inView>
        <div className="ghost-heading mb-6">
          <span className="solid">SOFTWARE</span>
          <br />
          <span className="outline">ENGINEER</span>
        </div>
      </BlurFade>

      {/* Bio paragraph */}
      <BlurFade delay={0.2} inView>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-10">
          Passionate about building robust, secure, and scalable software. 
          Specializing in full stack development, cybersecurity, blockchain, and AI — 
          transforming ideas into production-ready applications.
        </p>
      </BlurFade>

      {/* Stats row */}
      <BlurFade delay={0.3} inView>
        <div className="flex items-start gap-8 sm:gap-12 mb-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label whitespace-pre-line">{stat.label}</div>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Accent cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BlurFade delay={0.4} inView>
          <div className="accent-card-orange p-6 sm:p-8 relative z-10">
            <Layers className="size-8 mb-16 text-white/80" />
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white">
              Full Stack, Blockchain,{" "}
              <br className="hidden sm:block" />
              Security Engineering
            </h3>
            <button className="mt-4 p-2 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 transition-colors">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <div className="accent-card-lime p-6 sm:p-8 relative z-10">
            <Code2 className="size-8 mb-16 text-black/60" />
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black">
              React, Next.js, Python,{" "}
              <br className="hidden sm:block" />
              Solidity, Go
            </h3>
            <button className="mt-4 p-2 rounded-lg border border-black/20 text-black/60 hover:bg-black/10 transition-colors">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
