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
    "Fleet & ground transportation, billeting & life support, regional logistics & movement support for private-sector operators in Israel.",
};

const focus = [
  {
    title: "Fleet & ground transportation",
    body: "Pickups, SUVs, vans, buses, executive transport, shuttle operations, maintenance and surge capacity.",
  },
  {
    title: "Billeting & life support",
    body: "Modular accommodation at scale, hotels, cleaning, sanitation, water, daily sustainment.",
  },
  {
    title: "Regional logistics & movement",
    body: "Port, inland transport, warehousing, distribution, cross-border coordination.",
  },
  {
    title: "Procurement & operational supplies",
    body: "Sourcing, vendor coordination, equipment delivery for time-critical and sustained requirements.",
  },
  {
    title: "Temporary operational sites",
    body: "Engineered, deployed, managed, demobilized — practical execution from greenfield to operational.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <LandingHero
        eyebrow="Commercial Operations"
        headline={`Industrial scale.\nOperational discipline.`}
        sub="Fleet & ground transportation, billeting, regional logistics, and field support for private-sector operators in Israel."
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
