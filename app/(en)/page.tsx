import type { Metadata } from "next";
import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: dict.en.pages.home.metaTitle },
  description: dict.en.pages.home.metaDescription,
};

export default function Page() {
  return <HomeTemplate locale="en" />;
}
