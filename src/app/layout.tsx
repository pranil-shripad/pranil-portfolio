import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranil Shripad — Full Stack Developer & Cybersecurity Engineer",
  description:
    "Portfolio of Pranil Shripad — Full Stack Developer, Cybersecurity Engineer, Blockchain Developer, and AI Enthusiast. Explore projects, skills, and get in touch.",
  keywords: [
    "Pranil Shripad",
    "Full Stack Developer",
    "Cybersecurity Engineer",
    "Blockchain Developer",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Pranil Shripad" }],
  openGraph: {
    title: "Pranil Shripad — Full Stack Developer & Cybersecurity Engineer",
    description:
      "Portfolio of Pranil Shripad — Full Stack Developer, Cybersecurity Engineer, Blockchain Developer, and AI Enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
