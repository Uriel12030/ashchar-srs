import type { Metadata } from "next";
import { CinematicHero } from "@/components/CinematicHero";
import { TrustRow } from "@/components/TrustRow";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { PathwaysSplit } from "@/components/PathwaysSplit";
import { MissionExecution } from "@/components/MissionExecution";
import { CapabilitiesIndex } from "@/components/CapabilitiesIndex";
import { Operations } from "@/components/Operations";
import { Closer } from "@/components/Closer";
import { heroImages } from "@/data/content";

export const metadata: Metadata = {
  title:
    "Ashchar Ops — Base Operational Support in Israel & the Region",
  description:
    "Mission-ready base operations, logistics, transportation, and life-support services for U.S. Government, military, and prime contractor operations across Israel and the region.",
};

export default function HomePage() {
  return (
    <>
      <CinematicHero
        eyebrow="Israel & Regional Operations — BOS / BOS-I Support"
        headline={`Base Operations.\nLogistics.\nLife Support.`}
        sub="Mission-ready operational support for U.S. Government, military, and prime contractor operations across Israel and the region."
        image={heroImages.home}
        showScrollHint
      />
      <TrustRow />
      <CredibilityStrip />
      <PathwaysSplit />
      <MissionExecution />
      <CapabilitiesIndex />
      <Operations />
      <Closer
        title="Brief us on the mission."
        sub="Scope, timeline, location. We respond within 24 hours."
        ctaLabel="Engage Ashchar Ops"
      />
    </>
  );
}
