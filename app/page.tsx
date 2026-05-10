import type { Metadata } from "next";
import { CinematicHero } from "@/components/CinematicHero";
import { TrustRow } from "@/components/TrustRow";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { PathwaysSplit } from "@/components/PathwaysSplit";
import { CapabilitiesIndex } from "@/components/CapabilitiesIndex";
import { Operations } from "@/components/Operations";
import { Closer } from "@/components/Closer";
import { heroImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Ashchar — Israel-Based Operational Support",
  description:
    "Fleet, housing, infrastructure, and rapid procurement for U.S. Government and defense operations in Israel.",
};

export default function HomePage() {
  return (
    <>
      <CinematicHero
        eyebrow="Israel — OCONUS Operational Support"
        headline={`Israel-Based\nOperational\nSupport.`}
        sub="Fleet, housing, infrastructure, and rapid procurement for U.S. Government and defense operations."
        image={heroImages.home}
        showScrollHint
      />
      <TrustRow />
      <CredibilityStrip />
      <PathwaysSplit />
      <CapabilitiesIndex />
      <Operations />
      <Closer />
    </>
  );
}
