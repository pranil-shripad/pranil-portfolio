"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  color: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "SecureVault DeFi",
    category: "Blockchain · DeFi Platform",
    color: "#E8613C",
    github: "#",
    live: "#",
  },
  {
    title: "ThreatScope AI",
    category: "ML · Threat Detection",
    color: "#3B82F6",
    github: "#",
    live: "#",
  },
  {
    title: "CryptoTracer",
    category: "Forensics · Blockchain",
    color: "#C6FF00",
    github: "#",
  },
  {
    title: "AI Resume Optimizer",
    category: "SaaS · AI/ML",
    color: "#A855F7",
    github: "#",
    live: "#",
  },
  {
    title: "Deepfake Detector",
    category: "Security · ML",
    color: "#F59E0B",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-8">
      {/* Ghost heading */}
      <BlurFade delay={0.1} inView>
        <div className="ghost-heading mb-8">
          <span className="solid">RECENT</span>
          <br />
          <span className="outline">PROJECTS</span>
        </div>
      </BlurFade>

      {/* Project list */}
      <div>
        {projects.map((project, index) => (
          <BlurFade key={project.title} delay={0.15 + index * 0.08} inView>
            <a
              href={project.live || project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row group"
            >
              {/* Color thumbnail */}
              <div
                className="w-16 h-12 sm:w-24 sm:h-16 rounded-lg flex-shrink-0"
                style={{ backgroundColor: project.color }}
              />

              {/* Title and category */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {project.category}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                className="size-5 text-accent-orange flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
