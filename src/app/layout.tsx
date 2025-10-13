import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import androidChrome192 from "@/android-chrome-192x192.png";
import androidChrome512 from "@/android-chrome-512x512.png";
import appleTouchIcon from "@/apple-touch-icon.png";
import favicon16 from "@/favicon-16x16.png";
import favicon32 from "@/favicon-32x32.png";
import faviconIco from "@/favicon.ico";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dawid Strużyński — Front-End Developer",
  description:
    "Portfolio of Dawid Strużyński, a Computer Science student and front-end developer building responsive React and Next.js applications.",
  openGraph: {
    title: "Dawid Strużyński — Front-End Developer",
    description:
      "Explore Dawid Strużyński’s front-end projects, Supabase integrations, and IT support highlights.",
    url: "https://github.com/Strushs",
    siteName: "Dawid Strużyński Portfolio",
    type: "website",
  },
  icons: {
    icon: [
      { url: favicon16.src, sizes: "16x16", type: "image/png" },
      { url: favicon32.src, sizes: "32x32", type: "image/png" },
      { url: faviconIco.src },
    ],
    apple: [{ url: appleTouchIcon.src, sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome", url: androidChrome192.src, sizes: "192x192" },
      { rel: "android-chrome", url: androidChrome512.src, sizes: "512x512" },
    ],
  },
  metadataBase: new URL("https://github.com/Strushs"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
