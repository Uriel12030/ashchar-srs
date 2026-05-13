import type { Metadata } from "next";
import { ProjectsTemplate } from "@/components/templates/ProjectsTemplate";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.he.pages.projects.metaTitle,
  description: dict.he.pages.projects.metaDescription,
};

export default function Page() {
  return <ProjectsTemplate locale="he" />;
}
