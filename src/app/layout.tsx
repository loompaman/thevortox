import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VORTOX - AI Design Gallery & Prompts",
  description: "Discover stunning designs and the exact AI prompts used to create them. Get inspired by our curated collection of cutting-edge AI-powered creativity.",
  icons: {
    icon: '/favicon.svg?v=3',
    shortcut: '/favicon.svg?v=3',
    apple: '/favicon.svg?v=3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg?v=3" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
