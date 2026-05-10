"use client";

import { metrics } from "@/data/content";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

export function CredibilityStrip() {
  return (
    <section className="relative bg-ink">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <div className="grid grid-cols-2 divide-x divide-graphite-700/60 border-y hairline md:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="px-6 py-12 md:px-10 md:py-16">
                <div className="font-display text-3xl font-light tracking-ultratight text-bone md:text-5xl">
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-4 max-w-[16ch] text-[10px] uppercase tracking-wider3 text-graphite-200">
                  {m.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
