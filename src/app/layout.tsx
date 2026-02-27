import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Akhdan Farros Renoldi · Fullstack Engineer",
  description: "Personal portfolio showcasing real-world experience and selected work.",
};

import { Providers } from "./providers";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${jetbrains.variable}`}>
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}

