import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Pranil Shripad",
  description: "Get in touch with Pranil Shripad for collaboration or project inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  );
}
