import { Operations } from "@/components/Operations";
import { CinematicHero } from "@/components/CinematicHero";
import { Closer } from "@/components/Closer";
import { heroImages } from "@/data/content";
import { dict, type Locale } from "@/lib/i18n";

export function ProjectsTemplate({ locale }: { locale: Locale }) {
  const t = dict[locale].pages.projects;
  return (
    <>
      <CinematicHero
        locale={locale}
        eyebrow={t.eyebrow}
        headline={t.headline}
        sub={t.sub}
        image={heroImages.projects}
      />
      <Operations locale={locale} withHeader={false} />
      <Closer locale={locale} />
    </>
  );
}
