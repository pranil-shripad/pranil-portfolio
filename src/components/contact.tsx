"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// Brand SVG icons (lucide removed all brand icons)
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

const socials = [
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/pranilshripad",
    label: "@pranilshripad",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/pranilshripad",
    label: "Pranil Shripad",
  },
  {
    name: "X (Twitter)",
    icon: XIcon,
    href: "https://twitter.com/pranilshripad",
    label: "@pranilshripad",
  },
  {
    name: "Email",
    icon: MailIcon,
    href: "mailto:pranilshripad35@gmail.com",
    label: "pranilshripad35@gmail.com",
  },
  {
    name: "LeetCode",
    icon: LeetCodeIcon,
    href: "https://leetcode.com/pranilshripad",
    label: "pranilshripad",
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        <BlurFade delay={0.1} inView>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Have a project in mind or just want to say hello? Feel free to reach
            out. I&apos;m always open to new opportunities and interesting
            conversations.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <BlurFade delay={0.3} inView>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="from_name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="from_name"
                      name="from_name"
                      placeholder="Your name"
                      required
                      className="bg-card/30 border-border/50 focus:border-violet-accent/50 rounded-xl h-12 px-4 placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="from_email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="from_email"
                      name="from_email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-card/30 border-border/50 focus:border-violet-accent/50 rounded-xl h-12 px-4 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hi..."
                    required
                    rows={6}
                    className="bg-card/30 border-border/50 focus:border-violet-accent/50 rounded-xl px-4 py-3 placeholder:text-muted-foreground/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "sending"}
                  className="bg-violet-accent hover:bg-violet-glow text-white px-8 py-6 text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 w-full sm:w-auto disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <div className="mr-2 size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle2 className="mr-2 size-4" />
                      Message Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle className="mr-2 size-4" />
                      Failed — Try Again
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 size-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </BlurFade>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2">
            <BlurFade delay={0.4} inView>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Find me on
              </h3>
            </BlurFade>
            <div className="space-y-3">
              {socials.map((social, index) => (
                <BlurFade
                  key={social.name}
                  delay={0.4 + index * 0.08}
                  inView
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/30 hover:border-violet-accent/30 hover:bg-violet-soft/50 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-violet-soft group-hover:bg-violet-accent/20 transition-colors">
                      <social.icon className="size-4 text-violet-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {social.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {social.label}
                      </p>
                    </div>
                  </a>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
