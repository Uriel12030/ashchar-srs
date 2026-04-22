import type { Metadata } from "next";
import { ServicesView } from "@/components/views/ServicesView";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services — Ashchar",
  description:
    "Full-scope operational services across Israel: accommodation, site setup, heavy equipment, modular structures, power and HVAC, transport, protection, and regulatory support.",
};

export default function ServicesPage() {
  return <ServicesView t={getDict("en")} />;
}
