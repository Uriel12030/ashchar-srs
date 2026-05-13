import type { Metadata } from "next";
import { GovernmentTemplate } from "@/components/templates/GovernmentTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.he.pages.government.metaTitle,
  description: dict.he.pages.government.metaDescription,
};

export default function Page() {
  return <GovernmentTemplate locale="he" />;
}
