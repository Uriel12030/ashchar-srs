"use client";

import Link from "next/link";
import { useState } from "react";
import { capabilities } from "@/data/content";
import { CinemaImage } from "./CinemaImage";
import { Reveal } from "./Reveal";

export function CapabilitiesIndex() {
  const [active, setActive] = useState<number>(0);
  const current = capabilities[active];

  return (
    <section className="relative border-t hairline bg-ink">
      <div className="mx-auto max-w-container px-6 py-24 md:px-10 md:py-40">
        <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <div className="flex items-center gap-5 text-[10px] uppercase tracking-wider3 text-graphite-200">
                <span className="block h-px w-14 bg-olive-light" />
                <span>Operational Support Capabilities</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 max-w-[18ch] font-display text-display-md font-light text-bone">
                BOS, logistics, transportation, life support.
              </h2>
            </Reveal>
          </div>
          <Link
            href="/capabilities"
            className="self-start text-[11px] uppercase tracking-wider2 text-bone underline-offset-[6px] hover:underline md:self-end"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image column — sticks while user scans the list */}
          <div className="lg:col-span-7 lg:sticky lg:top-32 lg:self-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite-900 md:aspect-[16/10]">
              {capabilities.map((c, i) => (
                <div
                  key={c.slug}
                  className={`absolute inset-0 transition-opacity duration-[1200ms] ease-cinema ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <CinemaImage
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0"
                    imgClassName="opacity-90"
                    sizes="(min-width: 1024px) 58vw, 100vw"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 grain" />
              <div className="absolute bottom-6 left-6 z-10 font-mono text-[10px] uppercase tracking-wider3 text-graphite-100 md:bottom-8 md:left-8">
                {String(active + 1).padStart(2, "0")} / {String(capabilities.length).padStart(2, "0")} — {current.title}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ul className="border-y hairline">
              {capabilities.map((c, i) => (
                <li key={c.slug}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className="group flex w-full items-baseline justify-between border-b hairline py-6 text-left transition-colors duration-500 last:border-b-0 md:py-7"
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="font-mono text-[11px] uppercase tracking-wider3 text-graphite-200 transition-colors group-hover:text-olive-light">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-2xl font-light tracking-tightish transition-colors duration-500 md:text-3xl ${
                          active === i ? "text-bone" : "text-graphite-100 group-hover:text-bone"
                        }`}
                      >
                        {c.title}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`text-[12px] transition-all duration-500 ease-cinema ${
                        active === i ? "translate-x-0 text-bone opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
