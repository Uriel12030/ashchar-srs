import type { Metadata } from "next";
import { ProjectsTemplate } from "@/components/templates/ProjectsTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.en.pages.projects.metaTitle,
  description: dict.en.pages.projects.metaDescription,
};

export default function Page() {
  return <ProjectsTemplate locale="en" />;
}
