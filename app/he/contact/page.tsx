import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "צור קשר — Ashchar",
  description: "ערוצי יצירת קשר ישירים עם אשחר — אימייל, טלפון וואטסאפ.",
};

export default function HebrewContactPage() {
  return <ContactView t={getDict("he")} />;
}
