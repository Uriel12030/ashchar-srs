import type { Metadata } from "next";
import { AboutView } from "@/components/views/AboutView";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About — Ashchar",
  description:
    "Ashchar is an Israeli company focused on operational delivery across accommodation, infrastructure, logistics, equipment, and field support.",
};

export default function AboutPage() {
  return <AboutView t={getDict("en")} />;
}
