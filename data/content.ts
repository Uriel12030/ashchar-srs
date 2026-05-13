export const metrics = [
  { value: 600, suffix: "+", label: "Billeting Units Deployed" },
  { value: 300, suffix: "+", label: "Vehicles in Fleet" },
  { value: 80, suffix: "+", label: "Heavy Equipment Assets" },
  { value: 24, suffix: "/7", label: "Operational Coordination" },
];

// Compact credibility row near the hero — registration + posture, nothing flashy.
export const trustSignals = [
  "SAM Registered",
  "UEI: VJ23VL3BNJL8",
  "NCAGE: 7006A",
  "Israel-Based OCONUS Support",
];

// Concise credibility statements used in the Mission Execution section.
export const credibility = [
  "Trusted by U.S. Government and prime contractor teams operating in Israel.",
  "Experienced in urgent field requirements, controlled-access environments, and mission-critical timelines.",
  "Local execution with regional logistics reach.",
];

const IMG = "/images/generated";

export type Capability = {
  slug: string;
  /** Short label used in nav-style listings. */
  title: string;
  /** Two- or three-word summary used on the homepage index. */
  short: string;
  /** Single-paragraph description used on the /capabilities page. */
  description: string;
  image: string;
};

/**
 * The eight Operational Support Capabilities. Terminology is intentionally
 * aligned with U.S. Government BOS/BOS-I language without claiming a prime
 * designation — we support BOS/BOS-I requirements as a regional contractor.
 */
export const capabilities: Capability[] = [
  {
    slug: "base-operational-support",
    title: "Base Operational Support",
    short: "BOS / BOS-I support capabilities.",
    description:
      "Integrated support for base operations, field services, vendor coordination, equipment, housing, transport, and life-support needs. BOS/BOS-I support capabilities scaled to the requirement.",
    image: `${IMG}/about-field-operations.jpg`,
  },
  {
    slug: "ground-transportation",
    title: "Ground Transportation & Shuttle Operations",
    short: "Personnel movement, scheduled and ad-hoc.",
    description:
      "Personnel movement, scheduled and ad-hoc shuttles, buses, vans, executive vehicles, and mission-specific transportation. Movement control across forward and rear sites.",
    image: `${IMG}/fleet-vehicles-israel.jpg`,
  },
  {
    slug: "cargo-equipment-movement",
    title: "Cargo & Equipment Movement (GLOC)",
    short: "Ground lines of communication.",
    description:
      "Ground movement of equipment, supplies, containers, and mission cargo along approved logistics routes. GLOC execution, staging, and forward delivery.",
    image: `${IMG}/heavy-equipment-infrastructure.jpg`,
  },
  {
    slug: "cross-border-logistics",
    title: "Cross-Border Logistics",
    short: "Regional staging, transfer, customs.",
    description:
      "Coordination of regional cargo movement, staging, border transfer, customs support, and partner-network execution. Regional reach with local execution.",
    image: `${IMG}/operations-control-room.jpg`,
  },
  {
    slug: "fleet-operations",
    title: "Fleet & Vehicle Operations",
    short: "Passenger, transport, maintenance.",
    description:
      "Passenger vehicles, SUVs, pickups, vans, buses, maintenance coordination, replacement vehicles, and operational fleet management. Long-term and surge capacity.",
    image: `${IMG}/fleet-vehicles-israel.jpg`,
  },
  {
    slug: "billeting-life-support",
    title: "Billeting & Life Support Services",
    short: "Housing, sanitation, sustainment.",
    description:
      "Housing, hotels, temporary lodging, cleaning, water, sanitation, office support, and daily operational sustainment. Practical billeting at scale.",
    image: `${IMG}/modular-housing-base-support.jpg`,
  },
  {
    slug: "airfield-remote-site",
    title: "Airfield & Remote Site Support",
    short: "Air bases, remote OPs, staging areas.",
    description:
      "Support for air bases, remote operating sites, staging areas, temporary compounds, and fast-changing mission locations. Forward logistics and on-site coordination.",
    image: `${IMG}/hero-operational-logistics.jpg`,
  },
  {
    slug: "rapid-deployment-contingency",
    title: "Rapid Deployment & Contingency Support",
    short: "Fast sourcing, mobilization, field execution.",
    description:
      "Fast sourcing, mobilization, vendor coordination, equipment delivery, and field execution under urgent timelines. Contingency-ready posture.",
    image: `${IMG}/rapid-procurement-operations.jpg`,
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Government" | "Commercial";
  blurb: string;
  image: string;
  meta: string;
};

export const projects: Project[] = [
  {
    slug: "force-protection-deployment",
    title: "Force Protection Infrastructure",
    category: "Government",
    meta: "Multi-site / Compressed timeline",
    blurb:
      "Hardened protective barriers and modular infrastructure positioned across forward operational sites.",
    image: `${IMG}/force-protection-infrastructure.jpg`,
  },
  {
    slug: "billeting-program",
    title: "Billeting Program at Scale",
    category: "Commercial",
    meta: "600+ units / Sustained ops",
    blurb:
      "Modular accommodation program with full life-support, climate control, and 24/7 site management.",
    image: `${IMG}/modular-housing-base-support.jpg`,
  },
  {
    slug: "rapid-procurement-program",
    title: "Rapid Procurement & Movement",
    category: "Government",
    meta: "Time-critical / Multi-vendor",
    blurb:
      "End-to-end sourcing, GLOC routing, and forward delivery for time-critical operational requirements.",
    image: `${IMG}/about-field-operations.jpg`,
  },
];

export const heroImages = {
  home: `${IMG}/hero-operational-logistics.jpg`,
  government: `${IMG}/force-protection-infrastructure.jpg`,
  commercial: `${IMG}/fleet-vehicles-israel.jpg`,
  capabilities: `${IMG}/heavy-equipment-infrastructure.jpg`,
  projects: `${IMG}/about-field-operations.jpg`,
  closer: `${IMG}/operations-control-room.jpg`,
};
