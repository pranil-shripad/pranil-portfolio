"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "SecureVault DeFi",
    description:
      "A decentralized finance platform with audited smart contracts, enabling secure staking, lending, and yield farming with multi-chain support.",
    tags: ["Solidity", "React", "Ethers.js", "Hardhat", "Web3"],
    github: "#",
    live: "#",
  },
  {
    title: "ThreatScope AI",
    description:
      "AI-powered threat detection system that uses machine learning to identify and classify network intrusions in real-time with 97% accuracy.",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "CryptoTracer",
    description:
      "Blockchain forensics tool for tracing transactions across multiple chains, helping identify suspicious patterns and flagging potential fraud.",
    tags: ["Go", "PostgreSQL", "GraphQL", "Next.js", "Redis"],
    github: "#",
  },
  {
    title: "DevShield",
    description:
      "A CI/CD security scanner that integrates into GitHub workflows, automatically detecting vulnerabilities in dependencies and code patterns.",
    tags: ["TypeScript", "Node.js", "GitHub Actions", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "NeuralChat",
    description:
      "Privacy-first messaging application with end-to-end encryption, featuring AI-powered smart replies and on-device NLP processing.",
    tags: ["React Native", "Rust", "WebSocket", "ML Kit"],
    github: "#",
  },
  {
    title: "ZKAuth Protocol",
    description:
      "Zero-knowledge proof authentication protocol that enables passwordless, privacy-preserving identity verification for Web3 applications.",
    tags: ["Circom", "Solidity", "Next.js", "TypeScript", "ZK-SNARKs"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/3 rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        <BlurFade delay={0.1} inView>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            A selection of projects spanning full-stack development,
            cybersecurity, blockchain, and AI.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <BlurFade key={project.title} delay={0.1 + index * 0.1} inView>
              <div className="group relative flex flex-col h-full p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-violet-accent/30 hover:bg-card/60 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/5">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Title row */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-violet-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 shrink-0 ml-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-violet-accent transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <GithubIcon className="size-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="text-muted-foreground hover:text-violet-accent transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-mono bg-violet-soft/50 text-violet-accent border-0 hover:bg-violet-soft"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.8} inView>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/pranilshripad"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" }) + " rounded-xl border-border/80 hover:border-violet-accent/50 hover:bg-violet-soft transition-all duration-300"}
            >
              <GithubIcon className="mr-2 size-4" />
              View All on GitHub
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
