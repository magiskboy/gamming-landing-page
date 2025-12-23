import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gaming Club - Play, Compete, Connect",
  description: "Join thousands of gamers aged 16-35 for weekly tournaments, instant matchmaking, and a buzzing community - all for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${inter.variable} font-sans antialiased bg-[#1C1C1E] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
