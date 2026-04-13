"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

interface ToolKey {
  id: string;
  name: string;
  category: string;
  description: string;
  color: string;
  textColor: string;
  icon: string;
  url: string;
}

const toolKeys: ToolKey[] = [
  { id: "react", name: "React", category: "UI Library", description: "the OG component king 👑", color: "#61DAFB", textColor: "#000", icon: "⚛️", url: "https://react.dev" },
  { id: "nextjs", name: "Next.js", category: "Framework", description: "full-stack React? say less 🚀", color: "#1A1A1A", textColor: "#FFF", icon: "▲", url: "https://nextjs.org" },
  { id: "typescript", name: "TypeScript", category: "Language", description: "JavaScript that actually behaves 🎯", color: "#3178C6", textColor: "#FFF", icon: "TS", url: "https://typescriptlang.org" },
  { id: "javascript", name: "JavaScript", category: "Language", description: "the language that runs the internet 🌐", color: "#F7DF1E", textColor: "#000", icon: "JS", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: "python", name: "Python", category: "Language", description: "from ML to web, python does it all 🐍", color: "#3776AB", textColor: "#FFD43B", icon: "🐍", url: "https://python.org" },
  { id: "solidity", name: "Solidity", category: "Smart Contracts", description: "writing money as code, literally 💰", color: "#363636", textColor: "#FFF", icon: "⟠", url: "https://soliditylang.org" },
  { id: "nodejs", name: "Node.js", category: "Runtime", description: "JS on the server? we're unstoppable 💪", color: "#339933", textColor: "#FFF", icon: "⬡", url: "https://nodejs.org" },
  { id: "go", name: "Go", category: "Language", description: "concurrency beast, zero drama 🦫", color: "#00ADD8", textColor: "#FFF", icon: "Go", url: "https://go.dev" },
  { id: "rust", name: "Rust", category: "Language", description: "memory safety without the GC 🦀", color: "#CE422B", textColor: "#FFF", icon: "🦀", url: "https://rust-lang.org" },
  { id: "docker", name: "Docker", category: "DevOps", description: "it works on my machine → solved 🐳", color: "#2496ED", textColor: "#FFF", icon: "🐳", url: "https://docker.com" },
  { id: "postgres", name: "PostgreSQL", category: "Database", description: "the database that never lets you down 🐘", color: "#4169E1", textColor: "#FFF", icon: "🐘", url: "https://postgresql.org" },
  { id: "mongodb", name: "MongoDB", category: "Database", description: "documents go brrr 🍃", color: "#47A248", textColor: "#FFF", icon: "🍃", url: "https://mongodb.com" },
  { id: "redis", name: "Redis", category: "Cache", description: "speed is the feature ⚡", color: "#DC382D", textColor: "#FFF", icon: "◆", url: "https://redis.io" },
  { id: "tensorflow", name: "TensorFlow", category: "ML", description: "neural nets that actually work 🧠", color: "#FF6F00", textColor: "#FFF", icon: "🧠", url: "https://tensorflow.org" },
  { id: "tailwind", name: "Tailwind CSS", category: "Styling", description: "utility-first and proud of it 💨", color: "#06B6D4", textColor: "#FFF", icon: "💨", url: "https://tailwindcss.com" },
  { id: "aws", name: "AWS", category: "Cloud", description: "cloud infra that scales to infinity ☁️", color: "#FF9900", textColor: "#000", icon: "☁️", url: "https://aws.amazon.com" },
  { id: "hardhat", name: "Hardhat", category: "Blockchain", description: "smart contract testing made easy ⛑️", color: "#FFF100", textColor: "#000", icon: "⛑️", url: "https://hardhat.org" },
  { id: "linux", name: "Linux", category: "OS", description: "btw, I use arch 🐧", color: "#1A1A1A", textColor: "#FCC624", icon: "🐧", url: "https://linux.org" },
  { id: "git", name: "Git", category: "Version Control", description: "git push --force and pray 🙏", color: "#F05032", textColor: "#FFF", icon: "🔀", url: "https://git-scm.com" },
  { id: "figma", name: "Figma", category: "Design", description: "where ideas become pixels 🎨", color: "#A259FF", textColor: "#FFF", icon: "🎨", url: "https://figma.com" },
];

// Keyboard layout: rows of key indices
const keyboardRows = [
  [0, 1, 2, 3, 4],   // Row 1: 5 keys
  [5, 6, 7, 8, 9],   // Row 2: 5 keys
  [10, 11, 12, 13, 14], // Row 3: 5 keys
  [15, 16, 17, 18, 19], // Row 4: 5 keys
];

export function Skills() {
  const [activeKey, setActiveKey] = useState<ToolKey | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const handleKeyClick = (tool: ToolKey) => {
    setPressedKey(tool.id);
    setActiveKey(tool);
    setTimeout(() => setPressedKey(null), 150);
  };

  const handleRandomKey = () => {
    const randomTool = toolKeys[Math.floor(Math.random() * toolKeys.length)];
    handleKeyClick(randomTool);
  };

  return (
    <section className="py-8">
      {/* Ghost heading */}
      <BlurFade delay={0.1} inView>
        <div className="ghost-heading mb-8">
          <span className="solid">PREMIUM</span>
          <br />
          <span className="outline">TOOLS</span>
        </div>
      </BlurFade>

      {/* Keyboard section with purple gradient */}
      <BlurFade delay={0.2} inView>
        <div className="relative rounded-2xl overflow-hidden p-6 sm:p-10"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 30%, #5B21B6 60%, #4C1D95 100%)",
          }}
        >
          {/* Tooltip popup */}
          <div
            className={`
              mx-auto mb-6 max-w-sm px-5 py-3 rounded-2xl
              bg-white/95 backdrop-blur-sm shadow-xl
              transition-all duration-300
              ${activeKey ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
            `}
          >
            {activeKey ? (
              <>
                <p className="font-extrabold text-lg text-violet-700">{activeKey.name}</p>
                <p className="text-sm text-gray-600">{activeKey.category} — {activeKey.description}</p>
              </>
            ) : (
              <>
                <p className="font-extrabold text-lg text-violet-700">My Tech Stack</p>
                <p className="text-sm text-gray-600">Click a key to learn more! 👇</p>
              </>
            )}
          </div>

          {/* 3D Keyboard */}
          <div className="relative mx-auto" style={{ maxWidth: "480px" }}>
            {/* Keyboard base shadow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "#1A1A2E",
                transform: "perspective(800px) rotateX(25deg) rotateZ(-5deg)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3)",
              }}
            />

            {/* Keyboard body */}
            <div
              className="relative rounded-2xl p-3 sm:p-5"
              style={{
                background: "linear-gradient(145deg, #2D2D3F, #1A1A2E)",
                transform: "perspective(800px) rotateX(25deg) rotateZ(-5deg)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {keyboardRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex gap-1.5 sm:gap-2 justify-center mb-1.5 sm:mb-2"
                  style={{
                    marginLeft: rowIndex % 2 === 1 ? "8px" : "0",
                  }}
                >
                  {row.map((keyIndex) => {
                    const tool = toolKeys[keyIndex];
                    if (!tool) return null;
                    const isPressed = pressedKey === tool.id;
                    const isActive = activeKey?.id === tool.id;

                    return (
                      <button
                        key={tool.id}
                        onClick={() => handleKeyClick(tool)}
                        className="relative group transition-all duration-100 focus:outline-none cursor-pointer"
                        style={{
                          width: "clamp(48px, 12vw, 72px)",
                          height: "clamp(48px, 12vw, 72px)",
                        }}
                        title={tool.name}
                      >
                        {/* Key shadow (bottom part for 3D effect) */}
                        <div
                          className="absolute inset-0 rounded-lg"
                          style={{
                            backgroundColor: tool.color,
                            filter: "brightness(0.6)",
                            transform: isPressed ? "translateY(0)" : "translateY(4px)",
                            transition: "transform 0.1s ease",
                          }}
                        />
                        {/* Key face */}
                        <div
                          className={`
                            absolute inset-0 rounded-lg flex items-center justify-center
                            transition-all duration-100
                            ${isActive ? "ring-2 ring-white ring-offset-1 ring-offset-transparent" : ""}
                          `}
                          style={{
                            backgroundColor: tool.color,
                            color: tool.textColor,
                            transform: isPressed ? "translateY(2px)" : "translateY(0)",
                            boxShadow: isPressed
                              ? "inset 0 1px 2px rgba(0,0,0,0.2)"
                              : "0 2px 0 rgba(0,0,0,0.3), inset 0 -1px 0 rgba(0,0,0,0.15)",
                          }}
                        >
                          <span className={`font-black select-none ${tool.icon.length <= 3 ? "text-xs sm:text-sm" : "text-lg sm:text-xl"}`}>
                            {tool.icon}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* "Press any key" button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleRandomKey}
              className="px-6 py-2.5 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-semibold shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Press any key! ⌨️✨
            </button>
          </div>
        </div>
      </BlurFade>

      {/* Skills list below keyboard for accessibility */}
      <BlurFade delay={0.4} inView>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {toolKeys.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card group"
            >
              <div
                className="tool-icon"
                style={{ backgroundColor: tool.color, color: tool.textColor }}
              >
                <span className={tool.icon.length <= 3 ? "text-xs font-black" : "text-base"}>
                  {tool.icon}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">{tool.name}</p>
                <p className="text-[10px] text-muted-foreground truncate">{tool.category}</p>
              </div>
            </a>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
