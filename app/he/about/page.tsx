import type { Metadata } from "next";
import { AboutView } from "@/components/views/AboutView";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "אודות — Ashchar",
  description:
    "אשחר היא חברה ישראלית המתמקדת באספקה תפעולית בתחומי אכסון, תשתיות, לוגיסטיקה, ציוד ותמיכת שטח.",
};

export default function HebrewAboutPage() {
  return <AboutView t={getDict("he")} />;
}
