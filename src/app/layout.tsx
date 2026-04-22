import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MotionLayout from "./components/MotionLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ranjula Ilukpitiya | Junior Developer",
  description:
    "Portfolio of Ranjula Ilukpitiya, a junior developer focused on React, Next.js, TypeScript, UI/UX, and modern frontend products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll antialiased`}
      >
        <MotionLayout>{children}</MotionLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
