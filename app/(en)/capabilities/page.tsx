import type { Metadata } from "next";
import { CapabilitiesTemplate } from "@/components/templates/CapabilitiesTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.en.pages.capabilities.metaTitle,
  description: dict.en.pages.capabilities.metaDescription,
};

export default function Page() {
  return <CapabilitiesTemplate locale="en" />;
}
