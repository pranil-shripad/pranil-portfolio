import { Resume } from "@/components/resume";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Pranil Shripad",
  description: "Professional experience and background of Pranil Shripad.",
};

export default function ExperiencePage() {
  return (
    <>
      <Resume />
      <Footer />
    </>
  );
}
