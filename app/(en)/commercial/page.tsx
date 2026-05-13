import type { Metadata } from "next";
import { CommercialTemplate } from "@/components/templates/CommercialTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.en.pages.commercial.metaTitle,
  description: dict.en.pages.commercial.metaDescription,
};

export default function Page() {
  return <CommercialTemplate locale="en" />;
}
