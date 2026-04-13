"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BlurFade } from "@/components/ui/blur-fade";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
    <section id="contact" className="py-8">
      {/* Ghost heading */}
      <BlurFade delay={0.1} inView>
        <div className="ghost-heading mb-4">
          <span className="solid">GET IN</span>
          <br />
          <span className="outline">TOUCH</span>
        </div>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mb-8">
          Have a project in mind or want to collaborate? Drop me a message and I&apos;ll
          get back to you as soon as possible.
        </p>
      </BlurFade>

      {/* Contact form */}
      <BlurFade delay={0.3} inView>
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="from_name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                id="from_name"
                name="from_name"
                required
                placeholder="Your name"
                className="dark-input"
              />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                required
                placeholder="your@email.com"
                className="dark-input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="dark-input resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-orange text-white text-sm font-semibold hover:bg-accent-orange/90 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? (
              <>
                <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : status === "sent" ? (
              <>
                <CheckCircle2 className="size-4" />
                Sent!
              </>
            ) : status === "error" ? (
              <>
                <AlertCircle className="size-4" />
                Failed — Try Again
              </>
            ) : (
              <>
                <Send className="size-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </BlurFade>
    </section>
  );
}
