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
  description: "Personal portfolio of Dina Chat, a Full-Stack Developer and Data Scientist with 6+ years of experience blending professional engineering with high-performance aesthetics.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Dina Chat - Luminous Curator Portfolio",
    description: "Personal portfolio of Dina Chat, a Full-Stack Developer and Data Scientist with 6+ years of experience blending professional engineering with high-performance aesthetics.",
    url: "https://dinachat.com",
    siteName: "Dina Chat Portfolio",
    images: [
      {
        url: "/images/me.jpg",
        width: 800,
        height: 600,
        alt: "Dina Chat Profile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dina Chat - Luminous Curator Portfolio",
    description: "Personal portfolio of Dina Chat, a Full-Stack Developer and Data Scientist with 6+ years of experience blending professional engineering with high-performance aesthetics.",
    images: ["/images/me.jpg"],
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
