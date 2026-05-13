/**
 * Wordmark entries for the Operational Experience section.
 *
 * Each entry is a *reference* to the organization or company name only —
 * not a logo image and not a claim of formal affiliation. The visual
 * treatment is monochrome wordmark text so we don't get into copyright
 * or false-endorsement territory. Update the list as the operational
 * track record evolves; preserve the disclaimer language alongside it.
 */
export type ExperienceEntry = {
  /** Display name as it appears in the grid. */
  name: string;
  /** Optional small descriptor under the wordmark (e.g. expansion of acronym). */
  expand?: string;
};

export const operationalExperience: ExperienceEntry[] = [
  { name: "USAF", expand: "U.S. Air Force" },
  { name: "SOCCENT", expand: "Special Operations Command Central" },
  { name: "MARCENT", expand: "U.S. Marine Forces Central Command" },
  { name: "MSOC", expand: "Marine Special Operations Command" },
  { name: "Amentum" },
  { name: "V2X" },
  { name: "GHF" },
  { name: "Gotham" },
];

export const experienceDisclaimer =
  "Logos and organization references are used solely to represent relevant operational experience and do not imply endorsement or formal affiliation unless explicitly stated.";
