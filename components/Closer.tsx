"use client";

import Link from "next/link";
import { CinemaImage } from "./CinemaImage";
import { Reveal } from "./Reveal";
import { heroImages } from "@/data/content";

type Props = {
  title?: string;
  sub?: string;
  ctaHref?: string;
  ctaLabel?: string;
  image?: string;
};

export function Closer({
  title = "Brief us on the mission.",
  sub = "Scope, timeline, location. We respond within 24 hours.",
  ctaHref = "/contact",
  ctaLabel = "Engage Ashchar Ops",
  image = heroImages.closer,
}: Props) {
  return (
    <section className="relative h-[90svh] min-h-[600px] overflow-hidden border-t hairline">
      <CinemaImage
        src={image}
        alt=""
        className="absolute inset-0"
        imgClassName="opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/70 to-ink" />
      <div className="pointer-events-none absolute inset-0 grain" />

      <div className="relative z-10 mx-auto flex h-full max-w-container flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
        <Reveal>
          <div className="flex items-center gap-5 text-[10px] uppercase tracking-wider3 text-graphite-200">
            <span className="block h-px w-14 bg-olive-light" />
            <span>Engage</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 max-w-[16ch] font-display text-display-lg font-light text-bone">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[44ch] text-base font-light leading-relaxed text-graphite-100 md:text-lg">
            {sub}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            href={ctaHref}
            className="group mt-14 inline-flex items-center gap-5 self-start text-[11px] uppercase tracking-wider2 text-bone"
          >
            <span className="block h-px w-14 bg-bone transition-all duration-700 ease-cinema group-hover:w-24" />
            <span>{ctaLabel}</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
