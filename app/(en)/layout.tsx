import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { dict } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const ogTitle = dict.en.pages.home.metaTitle;
const ogDescription = dict.en.pages.home.metaDescription;
const ogImageAlt =
  "Ashchar — operational support scene in Israel showing passenger vans, SUVs, a shuttle bus parked near modern Mediterranean-style accommodation, and cargo handling with a forklift.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashcharops.com"),
  title: {
    default: ogTitle,
    template: "%s — Ashchar",
  },
  description: ogDescription,
  alternates: {
    languages: {
      en: "https://ashcharops.com/",
      he: "https://ashcharops.com/he",
    },
  },
  openGraph: {
    type: "website",
    url: "https://ashcharops.com",
    title: ogTitle,
    description: ogDescription,
    siteName: "Ashchar",
    locale: "en_US",
    alternateLocale: "he_IL",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: ogImageAlt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [
      {
        url: "/twitter-image.jpg",
        alt: ogImageAlt,
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-ink text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-bone focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <Nav locale="en" />
        <main id="main">{children}</main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
