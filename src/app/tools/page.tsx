import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — Pranil Shripad",
  description: "Premium tools and technologies used by Pranil Shripad.",
};

export default function ToolsPage() {
  return (
    <>
      <Skills />
      <Footer />
    </>
  );
}
