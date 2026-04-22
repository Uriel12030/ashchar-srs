import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — Rapid Logistics & Operational Solutions in Israel`,
    template: `%s — ${site.fullName}`,
  },
  description: site.description,
  keywords: [
    "logistics Israel",
    "infrastructure Israel",
    "accommodation Israel",
    "government logistics",
    "defense logistics",
    "operational solutions",
    "modular buildings Israel",
    "heavy equipment rental Israel",
    "Ashchar",
    "Ashchar",
  ],
  openGraph: {
    type: "website",
    title: `${site.fullName} — Rapid Logistics & Operational Solutions in Israel`,
    description: site.description,
    siteName: site.fullName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0F2A2D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-navy antialiased selection:bg-accent/30 selection:text-navy">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
