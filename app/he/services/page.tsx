import type { Metadata } from "next";
import { ServicesView } from "@/components/views/ServicesView";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "שירותים — Ashchar",
  description:
    "מבט מלא על השירותים שאשחר מספקת — מאכסון והקמת אתר ועד ציוד, לוגיסטיקה ותמיכה רגולטורית.",
};

export default function HebrewServicesPage() {
  return <ServicesView t={getDict("he")} />;
}
