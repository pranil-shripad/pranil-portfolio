"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      {
        primary: "B.Tech in Computer Science",
        secondary: "Specialization in Cybersecurity & AI",
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Experience",
    items: [
      {
        primary: "Full Stack Development",
        secondary: "Building scalable web applications with modern frameworks",
      },
      {
        primary: "Security Research",
        secondary:
          "Vulnerability assessment, penetration testing & security audits",
      },
    ],
  },
  {
    icon: Award,
    title: "Certifications & Achievements",
    items: [
      {
        primary: "Blockchain Development",
        secondary: "Smart contract development & DeFi protocol design",
      },
      {
        primary: "CTF Competitions",
        secondary: "Active participant in cybersecurity capture-the-flag events",
      },
    ],
  },
];

export function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        <BlurFade delay={0.1} inView>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              My{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            A summary of my education, experience, and achievements.
            Download the full resume for more details.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((section, index) => (
            <BlurFade key={section.title} delay={0.2 + index * 0.1} inView>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-violet-soft">
                    <section.icon className="size-5 text-violet-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.primary}>
                      <p className="text-sm font-medium text-foreground">
                        {item.primary}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {item.secondary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.6} inView>
          <div className="text-center">
            <a
              href="/resume.pdf"
              download
              className={buttonVariants({ size: "lg" }) + " bg-violet-accent hover:bg-violet-glow text-white px-8 py-6 text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"}
            >
              <Download className="mr-2 size-5" />
              Download Full Resume
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
