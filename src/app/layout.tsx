import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vortox - Create Viral Content with AI",
  description: "Transform your content creation with AI avatars that generate millions of views. Create viral content in seconds.",
  keywords: "AI, content creation, viral videos, social media, automation",
  authors: [{ name: "Vortox" }],
  creator: "Vortox",
  openGraph: {
    title: "Vortox - Create Viral Content with AI",
    description: "Transform your content creation with AI avatars that generate millions of views.",
    type: "website",
    siteName: "Vortox",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortox - Create Viral Content with AI",
    description: "Transform your content creation with AI avatars that generate millions of views.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5YF6MWEVQB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5YF6MWEVQB');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
