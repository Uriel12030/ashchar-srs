import { dict, type Locale } from "@/lib/i18n";

/**
 * Operational Experience wordmark grid. Each entry references a real
 * organization that Ashchar has supported in some operational capacity.
 *
 * Logo assets:
 *  - USAF, SOCCENT, MARSOC — official seals from Wikimedia Commons
 *    (U.S. Government works, public domain in the U.S.). Rendered
 *    monochrome via CSS filter (brightness 0 + invert) so they unify
 *    visually with the rest of the grid on the dark background.
 *  - Amentum — wordmark logo from the company's public website,
 *    same monochrome treatment.
 *  - MARCENT, V2X, Gotham, GHF — custom monochrome SVG wordmarks
 *    built in-repo (no third-party asset, no copyright concern).
 *
 * Whatever real visual recognition the official seals provide, the
 * filter compresses them to clean white silhouettes — matching the
 * restrained enterprise feel of the rest of the site.
 */

export type ExperienceEntry = {
  /** Display name as it appears in the grid label below the logo. */
  name: string;
  /** Path under /public for the logo asset. */
  logo: string;
  /** Render width in px (height auto). */
  width: number;
  /** Render height in px (used for layout reservation). */
  height: number;
  /** Optional acronym expansion shown as a small caption (localised). */
  expandKey?: "USAF" | "SOCCENT" | "MARCENT" | "MSOC";
};

export const experienceEntries: ExperienceEntry[] = [
  { name: "USAF", logo: "/logos/usaf.svg", width: 120, height: 60, expandKey: "USAF" },
  { name: "SOCCENT", logo: "/logos/soccent.svg", width: 56, height: 60, expandKey: "SOCCENT" },
  { name: "MARCENT", logo: "/logos/marcent.svg", width: 180, height: 60, expandKey: "MARCENT" },
  { name: "MSOC", logo: "/logos/marsoc.svg", width: 60, height: 60, expandKey: "MSOC" },
  { name: "Amentum", logo: "/logos/amentum.png", width: 180, height: 46 },
  { name: "V2X", logo: "/logos/v2x.svg", width: 120, height: 60 },
  { name: "Gotham", logo: "/logos/gotham.svg", width: 160, height: 60 },
  { name: "GHF", logo: "/logos/ghf.png", width: 143, height: 60 },
];

export const getOperationalExperience = (locale: Locale) =>
  experienceEntries.map((e) => ({
    ...e,
    expand: e.expandKey
      ? dict[locale].experience.expand[e.expandKey]
      : undefined,
  }));

export const getExperienceDisclaimer = (locale: Locale): string =>
  dict[locale].experience.disclaimer;
