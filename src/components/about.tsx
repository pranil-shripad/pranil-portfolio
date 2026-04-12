"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import {
  Code2,
  Shield,
  Link2,
  Brain,
  Database,
  Globe,
  Terminal,
  Lock,
  Layers,
  Cpu,
} from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Globe, category: "Frontend" },
  { name: "Node.js / Express", icon: Terminal, category: "Backend" },
  { name: "TypeScript", icon: Code2, category: "Language" },
  { name: "Python", icon: Code2, category: "Language" },
  { name: "PostgreSQL / MongoDB", icon: Database, category: "Database" },
  { name: "Solidity / Web3", icon: Link2, category: "Blockchain" },
  { name: "Penetration Testing", icon: Shield, category: "Security" },
  { name: "Network Security", icon: Lock, category: "Security" },
  { name: "Machine Learning", icon: Brain, category: "AI/ML" },
  { name: "Docker / Linux", icon: Layers, category: "DevOps" },
  { name: "Rust / Go", icon: Cpu, category: "Language" },
  { name: "Smart Contracts", icon: Link2, category: "Blockchain" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <BlurFade delay={0.1} inView>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
            I&apos;m a passionate developer who bridges the gap between building
            robust applications and securing them. With expertise spanning full
            stack development, cybersecurity, blockchain, and AI, I craft
            solutions that are not only functional and elegant but also secure
            by design. I love exploring the intersection of emerging
            technologies and finding creative ways to solve complex problems.
          </p>
        </BlurFade>

        {/* Tech stack grid */}
        <BlurFade delay={0.3} inView>
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Technologies & Skills
          </h3>
        </BlurFade>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <BlurFade key={skill.name} delay={0.1 + index * 0.05} inView>
              <div className="group flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/50 hover:border-violet-accent/30 hover:bg-violet-soft/50 transition-all duration-300 cursor-default">
                <skill.icon className="size-5 text-muted-foreground group-hover:text-violet-accent transition-colors shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {skill.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {skill.category}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
