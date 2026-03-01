import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HaasCharter | Private Aviation",
  description:
    "One Aircraft. One Crew. Total Transparency. Charter a Gulfstream G550 at $10,000/hr. No memberships, no hidden fees.",
  keywords: [
    "private charter",
    "Gulfstream G550",
    "private jet",
    "charter flight",
    "luxury aviation",
  ],
  openGraph: {
    title: "HaasCharter | Private Aviation",
    description:
      "Charter a Gulfstream G550 at $10,000/hr. One aircraft, one crew, total transparency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
