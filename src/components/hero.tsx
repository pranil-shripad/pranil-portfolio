"use client";

import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";
import { BlurFade } from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const titles = [
  "Full Stack Developer",
  "Cybersecurity Engineer",
  "Blockchain Developer",
  "AI Enthusiast",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            // Pause at full text, then start deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        color="#8b5cf6"
        size={0.6}
        staticity={30}
        ease={40}
      />

      {/* Spotlight gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <BlurFade delay={0.2} inView>
          <p className="text-sm font-mono text-violet-accent tracking-widest uppercase mb-6">
            Welcome to my portfolio
          </p>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Pranil</span>{" "}
            <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-purple-600 bg-clip-text text-transparent">
              Shripad
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.6} inView>
          <div className="h-10 flex items-center justify-center mb-8">
            <p className="text-xl sm:text-2xl text-muted-foreground font-light">
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-6 bg-violet-accent ml-1 animate-[blink-cursor_1.2s_step-end_infinite]" />
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.8} inView>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-violet-accent hover:bg-violet-glow text-white px-8 py-6 text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <ArrowDown className="ml-2 size-4" />
            </Button>
            <a
              href="/resume.pdf"
              download
              className={buttonVariants({ variant: "outline", size: "lg" }) + " px-8 py-6 text-base rounded-xl border-border/80 hover:border-violet-accent/50 hover:bg-violet-soft transition-all duration-300"}
            >
              <Download className="mr-2 size-4" />
              Download Resume
            </a>
          </div>
        </BlurFade>

        {/* Scroll indicator */}
        <BlurFade delay={1.2} inView>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-violet-accent rounded-full animate-bounce" />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
