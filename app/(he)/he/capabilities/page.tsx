import type { Metadata } from "next";
import { CapabilitiesTemplate } from "@/components/templates/CapabilitiesTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.he.pages.capabilities.metaTitle,
  description: dict.he.pages.capabilities.metaDescription,
};

export default function Page() {
  return <CapabilitiesTemplate locale="he" />;
}
