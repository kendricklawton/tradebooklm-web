import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ProviderWrapper } from "@/components/ProviderWrapper";
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
  authors: {
    name: "K-Henry",
  },

  title: "TradebookLM | The AI-Powered Trading Journal",
  description:
    "The ultimate tradebook for organizing your trades and gaining next level insights with AI.",
  keywords:
    "trading, journal, ai, tradebook, tradebooklm, large language model, trading language model, trading journal, ai trading journal",
  openGraph: {
    title: "TradebookLM | The AI-Powered Trading Journal",
    description:
      "The ultimate tradebook for organizing your trades and gaining next level insights with AI.",
    url: "https://tradebooklm.com",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TradeBookLM",
    description:
      "The ultimate tradebook for organizing your trades and gaining next level insights with AI.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
