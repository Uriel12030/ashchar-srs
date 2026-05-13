import { dict, type Locale } from "@/lib/i18n";

/**
 * Wordmark entries for the Operational Experience section. Names are
 * Latin in both locales (these are real organization names), but the
 * expansion text under each acronym is localized via lib/i18n.
 */
export type ExperienceEntry = {
  name: string;
  expand?: string;
};

const baseNames: { name: string; key?: string }[] = [
  { name: "USAF", key: "USAF" },
  { name: "SOCCENT", key: "SOCCENT" },
  { name: "MARCENT", key: "MARCENT" },
  { name: "MSOC", key: "MSOC" },
  { name: "Amentum" },
  { name: "V2X" },
  { name: "GHF" },
  { name: "Gotham" },
];

export const getOperationalExperience = (
  locale: Locale
): ExperienceEntry[] => {
  const expand = dict[locale].experience.expand;
  return baseNames.map((n) => ({
    name: n.name,
    expand: n.key ? expand[n.key] : undefined,
  }));
};

export const getExperienceDisclaimer = (locale: Locale): string =>
  dict[locale].experience.disclaimer;
