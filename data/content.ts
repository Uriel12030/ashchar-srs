export const metrics = [
  { value: 600, suffix: "+", label: "Housing Units Deployed" },
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

const IMG = "/images/generated";

export type Capability = {
  slug: string;
  title: string;
  short: string;
  image: string;
};

/**
 * Custom photography generated for Ashchar (gpt-image-1, documentary style).
 * Slot mapping is intentional: each image is reused only where it remains
 * contextually credible (e.g. the modular-housing render serves both the
 * facilities capability and base-support contexts).
 */
export const capabilities: Capability[] = [
  {
    slug: "modular-facilities",
    title: "Modular Facilities",
    short: "Workforce housing, command posts, field offices.",
    image: `${IMG}/modular-housing-base-support.jpg`,
  },
  {
    slug: "force-protection",
    title: "Force Protection & Barriers",
    short: "Hardened protective infrastructure.",
    image: `${IMG}/force-protection-infrastructure.jpg`,
  },
  {
    slug: "heavy-equipment",
    title: "Heavy Equipment",
    short: "Excavators, loaders, cranes, forklifts.",
    image: `${IMG}/heavy-equipment-infrastructure.jpg`,
  },
  {
    slug: "vehicle-fleets",
    title: "Vehicle Fleets",
    short: "Land Cruisers, pickups, vans, transport.",
    image: `${IMG}/fleet-vehicles-israel.jpg`,
  },
  {
    slug: "site-development",
    title: "Site Development",
    short: "Greenfield to operational compound.",
    image: `${IMG}/about-field-operations.jpg`,
  },
  {
    slug: "power-hvac",
    title: "Power & HVAC",
    short: "Generators, distribution, climate, lighting.",
    image: `${IMG}/modular-housing-base-support.jpg`,
  },
  {
    slug: "rapid-procurement",
    title: "Rapid Procurement",
    short: "Sourcing, supply chain, time-critical delivery.",
    image: `${IMG}/rapid-procurement-operations.jpg`,
  },
  {
    slug: "logistics-coordination",
    title: "Logistics Coordination",
    short: "Routing, transport, distribution.",
    image: `${IMG}/operations-control-room.jpg`,
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
    title: "Force Protection Deployment",
    category: "Government",
    meta: "Multi-site / Compressed timeline",
    blurb:
      "Hardened protective barriers and modular infrastructure positioned across forward operational sites.",
    image: `${IMG}/force-protection-infrastructure.jpg`,
  },
  {
    slug: "workforce-housing",
    title: "Workforce Housing at Scale",
    category: "Commercial",
    meta: "600+ units / Sustained ops",
    blurb:
      "Modular accommodation program with full life-support, climate control, and 24/7 site management.",
    image: `${IMG}/modular-housing-base-support.jpg`,
  },
  {
    slug: "rapid-procurement-program",
    title: "Rapid Procurement Program",
    category: "Government",
    meta: "Time-critical / Multi-vendor",
    blurb:
      "End-to-end sourcing, coordination, and delivery for time-critical operational requirements.",
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
