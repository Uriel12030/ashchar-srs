import type { Metadata } from "next";
import { LandingHero } from "@/components/LandingHero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { FocusList } from "@/components/FocusList";
import { CapabilitiesIndex } from "@/components/CapabilitiesIndex";
import { Operations } from "@/components/Operations";
import { Closer } from "@/components/Closer";
import { heroImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Government & Defense",
  description:
    "Mission-critical operations in Israel. Rapid deployment, compliance, execution.",
};

const focus = [
  {
    title: "Rapid deployment",
    body: "Pre-positioned assets. Vetted crews. Mobilization within hours.",
  },
  {
    title: "Compliance familiarity",
    body: "SAM-registered. Aligned to U.S. Government and DoD-aligned standards.",
  },
  {
    title: "Operational execution",
    body: "On-the-ground delivery in active environments, led by experienced operators.",
  },
  {
    title: "Remote site support",
    body: "Sustained logistics and life-support for forward and isolated sites.",
  },
  {
    title: "Infrastructure readiness",
    body: "Modular shelters, hardened structures, power, climate — ready to scale on demand.",
  },
];

export default function GovernmentPage() {
  return (
    <>
      <LandingHero
        eyebrow="Government & Defense"
        headline={`Mission-critical\noperations.`}
        sub="Infrastructure, equipment, and logistics for U.S. Government and defense-related operations in Israel."
        image={heroImages.government}
      />
      <CredibilityStrip />
      <FocusList
        eyebrow="Operating doctrine"
        headline="Built for operations that cannot wait."
        items={focus}
      />
      <CapabilitiesIndex />
      <Operations filter="Government" withHeader />
      <Closer
        title="Ready to deploy?"
        sub="Brief us on the requirement. We respond within 24 hours."
        ctaLabel="Engage Ashchar"
      />
    </>
  );
}
