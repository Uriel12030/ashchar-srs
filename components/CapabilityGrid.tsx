"use client";

import Link from "next/link";
import { capabilities } from "@/data/content";
import { CinemaImage } from "./CinemaImage";
import { Reveal } from "./Reveal";

export function CapabilityGrid() {
  return (
    <ul className="grid grid-cols-1 gap-px bg-graphite-700 sm:grid-cols-2 lg:grid-cols-4">
      {capabilities.map((cap, i) => (
        <li key={cap.slug} className="bg-ink">
          <Reveal delay={Math.min(i * 0.04, 0.4)} y={16}>
            <Link
              href={`/capabilities#${cap.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <CinemaImage
                src={cap.image}
                alt={cap.title}
                className="absolute inset-0"
                imgClassName="transition-transform duration-[2400ms] ease-cinema group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-wider2 text-graphite-200">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-display text-xl font-medium tracking-tightish text-bone md:text-2xl">
                  {cap.title}
                </div>
                <div className="mt-1 text-[13px] text-graphite-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {cap.short}
                </div>
              </div>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
