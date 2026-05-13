import { dict, type Locale } from "@/lib/i18n";

const IMG = "/images/generated";

/* ---------- Metrics ---------- */

export type MetricKey = "housing" | "vehicles" | "equipment" | "coord";

export type Metric = {
  key: MetricKey;
  value: number;
  suffix: string;
  label: string;
};

const metricBase: { key: MetricKey; value: number; suffix: string }[] = [
  { key: "housing", value: 600, suffix: "+" },
  { key: "vehicles", value: 300, suffix: "+" },
  { key: "equipment", value: 80, suffix: "+" },
  { key: "coord", value: 24, suffix: "/7" },
];

export const getMetrics = (locale: Locale): Metric[] =>
  metricBase.map((m) => ({ ...m, label: dict[locale].metrics[m.key] }));

/* ---------- Trust signals ---------- */

export const getTrustSignals = (locale: Locale): string[] => {
  const t = dict[locale].trust;
  return [t.sam, t.uei, t.ncage, t.oconus];
};

/* ---------- Capabilities ---------- */

export type CapabilitySlug =
  | "base-operational-support"
  | "ground-transportation"
  | "cargo-equipment-movement"
  | "cross-border-logistics"
  | "fleet-operations"
  | "billeting-life-support"
  | "airfield-remote-site"
  | "rapid-deployment-contingency";

export type Capability = {
  slug: CapabilitySlug;
  title: string;
  short: string;
  description: string;
  image: string;
};

const capabilityImages: Record<CapabilitySlug, string> = {
  "base-operational-support": `${IMG}/about-field-operations.jpg`,
  "ground-transportation": `${IMG}/fleet-vehicles-israel.jpg`,
  "cargo-equipment-movement": `${IMG}/heavy-equipment-infrastructure.jpg`,
  "cross-border-logistics": `${IMG}/operations-control-room.jpg`,
  "fleet-operations": `${IMG}/fleet-vehicles-israel.jpg`,
  "billeting-life-support": `${IMG}/modular-housing-base-support.jpg`,
  "airfield-remote-site": `${IMG}/hero-operational-logistics.jpg`,
  "rapid-deployment-contingency": `${IMG}/rapid-procurement-operations.jpg`,
};

const capabilityOrder: CapabilitySlug[] = [
  "base-operational-support",
  "ground-transportation",
  "cargo-equipment-movement",
  "cross-border-logistics",
  "fleet-operations",
  "billeting-life-support",
  "airfield-remote-site",
  "rapid-deployment-contingency",
];

export const getCapabilities = (locale: Locale): Capability[] =>
  capabilityOrder.map((slug) => ({
    slug,
    ...dict[locale].capabilities.items[slug],
    image: capabilityImages[slug],
  }));

/* ---------- Projects ---------- */

export type ProjectSlug =
  | "force-protection-deployment"
  | "billeting-program"
  | "rapid-procurement-program";

export type Project = {
  slug: ProjectSlug;
  title: string;
  category: "Government" | "Commercial";
  categoryLabel: string;
  blurb: string;
  image: string;
  meta: string;
};

const projectShape: {
  slug: ProjectSlug;
  category: "Government" | "Commercial";
  image: string;
}[] = [
  {
    slug: "force-protection-deployment",
    category: "Government",
    image: `${IMG}/force-protection-infrastructure.jpg`,
  },
  {
    slug: "billeting-program",
    category: "Commercial",
    image: `${IMG}/modular-housing-base-support.jpg`,
  },
  {
    slug: "rapid-procurement-program",
    category: "Government",
    image: `${IMG}/about-field-operations.jpg`,
  },
];

export const getProjects = (locale: Locale): Project[] =>
  projectShape.map((p) => ({
    ...p,
    ...dict[locale].operations.items[p.slug],
    categoryLabel:
      p.category === "Government"
        ? dict[locale].operations.catGovernment
        : dict[locale].operations.catCommercial,
  }));

/* ---------- Hero images (locale-agnostic) ---------- */

export const heroImages = {
  home: `${IMG}/hero-operational-logistics.jpg`,
  government: `${IMG}/force-protection-infrastructure.jpg`,
  commercial: `${IMG}/fleet-vehicles-israel.jpg`,
  capabilities: `${IMG}/heavy-equipment-infrastructure.jpg`,
  projects: `${IMG}/about-field-operations.jpg`,
  closer: `${IMG}/operations-control-room.jpg`,
};
