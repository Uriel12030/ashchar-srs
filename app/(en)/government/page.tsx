import type { Metadata } from "next";
import { GovernmentTemplate } from "@/components/templates/GovernmentTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.en.pages.government.metaTitle,
  description: dict.en.pages.government.metaDescription,
};

export default function Page() {
  return <GovernmentTemplate locale="en" />;
}
