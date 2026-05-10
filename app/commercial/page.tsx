import type { Metadata } from "next";
import { LandingHero } from "@/components/LandingHero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { FocusList } from "@/components/FocusList";
import { CapabilitiesIndex } from "@/components/CapabilitiesIndex";
import { Operations } from "@/components/Operations";
import { Closer } from "@/components/Closer";
import { heroImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Commercial Operations",
  description:
    "Industrial-scale logistics and infrastructure execution for private-sector operators in Israel.",
};

const focus = [
  {
    title: "Workforce housing",
    body: "Modular accommodation at scale. Climate-controlled. Sustained.",
  },
  {
    title: "Logistics",
    body: "Port, inland transport, warehousing, distribution.",
  },
  {
    title: "Fleet rental",
    body: "Pickups, transport, fuel, heavy equipment. Long-term and surge.",
  },
  {
    title: "Infrastructure setup",
    body: "Power, water, climate, fencing, access. Greenfield to operational.",
  },
  {
    title: "Temporary operational sites",
    body: "Engineered, deployed, managed, demobilized.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <LandingHero
        eyebrow="Commercial Operations"
        headline={`Industrial scale.\nOperational discipline.`}
        sub="Workforce housing, logistics, fleet, and infrastructure for private-sector operators in Israel."
        image={heroImages.commercial}
      />
      <CredibilityStrip />
      <FocusList
        eyebrow="Delivered"
        headline="Stand it up. Run it. Stand it down."
        items={focus}
      />
      <CapabilitiesIndex />
      <Operations filter="Commercial" withHeader />
      <Closer
        title="Tell us the requirement."
        sub="Scope, timeline, location. We respond within 24 hours."
        ctaLabel="Start a project"
      />
    </>
  );
}
