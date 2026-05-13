"use client";

import Link from "next/link";
import { useState } from "react";
import { CinemaImage } from "./CinemaImage";
import { Reveal } from "./Reveal";
import { dict, localePath, type Locale } from "@/lib/i18n";

export function PathwaysSplit({ locale }: { locale: Locale }) {
  const t = dict[locale].pathways;
  const common = dict[locale].common;
  const [hovered, setHovered] = useState<number | null>(null);

  const pathways = [
    {
      href: localePath(locale, "/government"),
      eyebrow: t.govEyebrow,
      sector: t.govSector,
      title: t.govTitle,
      body: t.govBody,
      image: "/images/generated/force-protection-infrastructure.jpg",
    },
    {
      href: localePath(locale, "/commercial"),
      eyebrow: t.commEyebrow,
      sector: t.commSector,
      title: t.commTitle,
      body: t.commBody,
      image: "/images/generated/fleet-vehicles-israel.jpg",
    },
  ];

  return (
    <section className="relative bg-ink">
      <div className="mx-auto max-w-container px-6 pt-24 md:px-10 md:pt-40">
        <Reveal>
          <div className="flex items-center gap-5 text-[10px] uppercase tracking-wider3 text-graphite-200">
            <span className="block h-px w-14 bg-olive-light" />
            <span>{t.eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-[20ch] font-display text-display-md font-light text-bone">
            {t.title}
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 md:mt-24 md:grid-cols-2">
        {pathways.map((p, i) => {
          const dimmed = hovered !== null && hovered !== i;
          return (
            <Link
              key={p.href}
              href={p.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex h-[78svh] min-h-[560px] flex-col justify-end overflow-hidden border-t hairline transition-all duration-700 ease-cinema ${
                i === 0 ? "md:border-r" : ""
              } ${dimmed ? "opacity-50" : "opacity-100"}`}
            >
              <CinemaImage
                src={p.image}
                alt={p.sector}
                className="absolute inset-0"
                imgClassName="opacity-55 transition-opacity duration-[1600ms] ease-cinema group-hover:opacity-70"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/25" />

              <div className="relative px-6 pb-16 md:px-12 md:pb-20">
                <div className="font-mono text-[10px] uppercase tracking-wider3 text-olive-light">
                  {p.eyebrow}
                </div>
                <div className="mt-6 text-[12px] uppercase tracking-wider2 text-graphite-100">
                  {p.sector}
                </div>
                <h3 className="mt-6 max-w-[14ch] font-display text-4xl font-light leading-[0.98] tracking-ultratight text-bone md:text-6xl lg:text-7xl">
                  {p.title}
                </h3>
                <p className="mt-8 max-w-[36ch] text-[14px] leading-relaxed text-graphite-100 md:text-base">
                  {p.body}
                </p>
                <div className="mt-12 flex items-center gap-4 text-[11px] uppercase tracking-wider2 text-bone">
                  <span className="block h-px w-10 bg-bone transition-all duration-700 ease-cinema group-hover:w-16" />
                  <span>{common.enter}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
