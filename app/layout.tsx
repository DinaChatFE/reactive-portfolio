import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import GlassBubbles from "@/components/GlassBubbles";
import ChatAssistant from "@/components/ChatAssistant";
import { Toaster } from "@/components/ui/sonner";

import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dina Chat - Luminous Curator Portfolio",
  description: "High-End Editorial Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased dark scroll-smooth scroll-pt-32`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <GlassBubbles />
        <Navbar />
        {children}
        <ChatAssistant />
        <Toaster />
      </body>
    </html>
  );
}
