import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Pranil Shripad",
  description: "Recent projects by Pranil Shripad in full stack, blockchain, cybersecurity and AI.",
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <Footer />
    </>
  );
}
