import type { Metadata } from "next";
import { Operations } from "@/components/Operations";
import { CinematicHero } from "@/components/CinematicHero";
import { Closer } from "@/components/Closer";
import { heroImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Operational projects across government, defense, and commercial sectors in Israel.",
};

export default function ProjectsPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Selected operations"
        headline={`Executed\nin theatre.`}
        sub="A representative slice of BOS, logistics, and transportation work delivered under operational conditions."
        image={heroImages.government}
      />
      <Operations withHeader={false} />
      <Closer />
    </>
  );
}
