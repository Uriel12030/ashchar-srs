import type { Metadata } from "next";
import { ContactTemplate } from "@/components/templates/ContactTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.en.pages.contact.metaTitle,
  description: dict.en.pages.contact.metaDescription,
};

export default function Page() {
  return <ContactTemplate locale="en" />;
}
