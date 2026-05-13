import type { Metadata } from "next";
import { ContactTemplate } from "@/components/templates/ContactTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.he.pages.contact.metaTitle,
  description: dict.he.pages.contact.metaDescription,
};

export default function Page() {
  return <ContactTemplate locale="he" />;
}
