"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowUpRight } from "lucide-react";

interface Experience {
  company: string;
  description: string;
  period: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    company: "Full Stack Development",
    description:
      "Building scalable web applications with React, Next.js, Node.js, and PostgreSQL. Focus on clean architecture and performance optimization.",
    period: "2022 – Present",
  },
  {
    company: "Cybersecurity Research",
    description:
      "Conducting vulnerability assessments, penetration testing, and security audits. Active participant in CTF competitions and bug bounty programs.",
    period: "2021 – Present",
  },
  {
    company: "Blockchain Development",
    description:
      "Designing and deploying smart contracts on Ethereum and Polygon. Building DeFi protocols with Solidity, Hardhat, and Ethers.js.",
    period: "2023 – Present",
  },
  {
    company: "AI / Machine Learning",
    description:
      "Developing ML models for real-time threat detection and deepfake analysis using TensorFlow, PyTorch, and NLP techniques.",
    period: "2024 – Present",
  },
];

export function Resume() {
  return (
    <section id="experience" className="py-8">
      {/* Ghost heading */}
      <BlurFade delay={0.1} inView>
        <div className="ghost-heading mb-8">
          <span className="solid">YEARS OF</span>
          <br />
          <span className="outline">EXPERIENCE</span>
        </div>
      </BlurFade>

      {/* Experience list */}
      <div>
        {experiences.map((exp, index) => (
          <BlurFade key={exp.company} delay={0.15 + index * 0.08} inView>
            <div className="experience-row group">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {exp.company}
                </h3>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-orange flex-shrink-0"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-2xl">
                {exp.description}
              </p>
              <p className="text-sm text-muted-foreground/60 mt-3">
                {exp.period}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Download resume link */}
      <BlurFade delay={0.6} inView>
        <div className="mt-8">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-orange text-white text-sm font-semibold hover:bg-accent-orange/90 transition-colors"
          >
            Download Resume
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </BlurFade>
    </section>
  );
}
