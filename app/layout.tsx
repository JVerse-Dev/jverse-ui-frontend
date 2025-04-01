import type React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "JVerse UI - Modern React Component Library",
  description: "A modern, customizable React UI component library for building beautiful interfaces",
  keywords: [
    "React",
    "UI components",
    "component library",
    "modern design",
    "customizable",
    "responsive",
    "accessible",
    "cross-browser",
    "lightweight",
    "performance",
    "developer-friendly",
    "open source", 
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <div className="min-h-screen bg-background flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
