import { LandingHero } from "@/components/LandingHero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { FocusList } from "@/components/FocusList";
import { CapabilitiesIndex } from "@/components/CapabilitiesIndex";
import { Operations } from "@/components/Operations";
import { Closer } from "@/components/Closer";
import { heroImages } from "@/data/content";
import { dict, type Locale } from "@/lib/i18n";

export function CommercialTemplate({ locale }: { locale: Locale }) {
  const t = dict[locale].pages.commercial;
  return (
    <>
      <LandingHero
        eyebrow={t.eyebrow}
        headline={t.headline}
        sub={t.sub}
        image={heroImages.commercial}
      />
      <CredibilityStrip locale={locale} />
      <FocusList
        eyebrow={t.focusEyebrow}
        headline={t.focusTitle}
        items={t.focus}
      />
      <CapabilitiesIndex locale={locale} />
      <Operations locale={locale} filter="Commercial" withHeader />
      <Closer
        locale={locale}
        title={t.closerTitle}
        sub={t.closerSub}
        ctaLabel={t.closerCta}
      />
    </>
  );
}
