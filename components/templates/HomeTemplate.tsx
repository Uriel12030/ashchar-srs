import { CinematicHero } from "@/components/CinematicHero";
import { TrustRow } from "@/components/TrustRow";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { PathwaysSplit } from "@/components/PathwaysSplit";
import { MissionExecution } from "@/components/MissionExecution";
import { CapabilitiesIndex } from "@/components/CapabilitiesIndex";
import { Operations } from "@/components/Operations";
import { OperationalExperience } from "@/components/OperationalExperience";
import { Closer } from "@/components/Closer";
import { heroImages } from "@/data/content";
import { dict, type Locale } from "@/lib/i18n";

export function HomeTemplate({ locale }: { locale: Locale }) {
  const t = dict[locale].pages.home;
  return (
    <>
      <CinematicHero
        locale={locale}
        eyebrow={t.eyebrow}
        headline={t.headline}
        sub={t.sub}
        image={heroImages.home}
        showScrollHint
      />
      <TrustRow locale={locale} />
      <CredibilityStrip locale={locale} />
      <PathwaysSplit locale={locale} />
      <MissionExecution locale={locale} />
      <CapabilitiesIndex locale={locale} />
      <Operations locale={locale} />
      <OperationalExperience locale={locale} />
      <Closer locale={locale} />
    </>
  );
}
