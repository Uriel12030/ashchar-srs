import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact — Ashchar",
  description: "Direct contact channels for Ashchar — email, phone, and WhatsApp.",
};

export default function ContactPage() {
  return <ContactView t={getDict("en")} />;
}
