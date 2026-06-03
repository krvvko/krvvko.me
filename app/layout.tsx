import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Space_Mono } from "next/font/google";
import Nav from "@/components/Nav/Nav";
import Scene from "@/components/Scene/Scene";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "krvvko — Kostya Krevvetka, Full-Stack Developer",
  description:
    "Kostya Krevvetka — frontend-focused full-stack developer in Massachusetts with 6 years of experience. Team products with hundreds of thousands of users; solo apps with 10k+ users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${spaceMono.variable}`}
    >
      <body>
        <Scene />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
