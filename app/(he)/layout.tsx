import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono, Heebo } from "next/font/google";
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

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

const ogTitle = dict.he.pages.home.metaTitle;
const ogDescription = dict.he.pages.home.metaDescription;
const ogImageAlt =
  "אשחר — סצנת תמיכה מבצעית בישראל המציגה ואנים לבנים, ג׳יפים, אוטובוס שאטל ליד מבנה אכלוס בסגנון ים-תיכוני מודרני ושינוע מטענים במלגזה.";

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
    url: "https://ashcharops.com/he",
    title: ogTitle,
    description: ogDescription,
    siteName: "Ashchar",
    locale: "he_IL",
    alternateLocale: "en_US",
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

export default function HeRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${inter.variable} ${display.variable} ${mono.variable} ${heebo.variable}`}
    >
      <body className="min-h-screen bg-ink text-bone antialiased font-hebrew">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-50 focus:rounded focus:bg-bone focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          דלג לתוכן
        </a>
        <Nav locale="he" />
        <main id="main">{children}</main>
        <Footer locale="he" />
      </body>
    </html>
  );
}
