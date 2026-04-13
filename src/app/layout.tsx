import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/about";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pranil Shripad — Full Stack Developer & Cybersecurity Engineer",
  description:
    "Portfolio of Pranil Shripad — Full Stack Developer, Cybersecurity Engineer, Blockchain Developer, and AI Enthusiast.",
  keywords: [
    "Pranil Shripad",
    "Full Stack Developer",
    "Cybersecurity Engineer",
    "Blockchain Developer",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Pranil Shripad" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground font-sans">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar />
            <main className="flex-1 min-w-0">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
