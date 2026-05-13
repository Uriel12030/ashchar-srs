import type { Metadata } from "next";
import { LandingHero } from "@/components/LandingHero";
import { TrustRow } from "@/components/TrustRow";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { FocusList } from "@/components/FocusList";
import { CapabilitiesIndex } from "@/components/CapabilitiesIndex";
import { Operations } from "@/components/Operations";
import { Closer } from "@/components/Closer";
import { heroImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Government & Defense — BOS Support",
  description:
    "BOS/BOS-I support capabilities for U.S. Government, military, and prime contractor operations in Israel. Movement control, GLOC, life support, rapid deployment.",
};

const focus = [
  {
    title: "BOS / BOS-I support capabilities",
    body: "Integrated base operations support — vendors, equipment, housing, transport, and life-support coordination scaled to the requirement.",
  },
  {
    title: "Movement control & GLOC",
    body: "Personnel movement, ground lines of communication, and cargo & equipment movement along approved routes.",
  },
  {
    title: "Compliance familiarity",
    body: "SAM Registered. UEI VJ23VL3BNJL8 · NCAGE 7006A. Familiar with FAR/DFARS-aligned terms and controlled-access environments.",
  },
  {
    title: "Forward & remote site support",
    body: "Sustainment for forward, remote, and isolated sites — billeting, power, fuel, transport, and on-site coordination.",
  },
  {
    title: "Rapid deployment & contingency",
    body: "Pre-positioned assets, vetted vendors, and crews available for mobilization within hours.",
  },
];

export default function GovernmentPage() {
  return (
    <>
      <LandingHero
        eyebrow="Government & Defense — BOS Support"
        headline={`Mission-critical\nBOS support.`}
        sub="BOS/BOS-I support capabilities for U.S. Government, military, and prime contractor operations in Israel."
        image={heroImages.government}
      />
      <TrustRow />
      <CredibilityStrip />
      <FocusList
        eyebrow="Operating doctrine"
        headline="Built for missions that cannot wait."
        items={focus}
      />
      <CapabilitiesIndex />
      <Operations filter="Government" withHeader />
      <Closer
        title="Ready to deploy?"
        sub="Brief us on the requirement. We respond within 24 hours."
        ctaLabel="Engage Ashchar Ops"
      />
    </>
  );
}
