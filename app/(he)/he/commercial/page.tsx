import type { Metadata } from "next";
import { CommercialTemplate } from "@/components/templates/CommercialTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.he.pages.commercial.metaTitle,
  description: dict.he.pages.commercial.metaDescription,
};

export default function Page() {
  return <CommercialTemplate locale="he" />;
}
