"use client";

import { Reveal } from "./Reveal";

type Item = { title: string; body: string };

type Props = {
  eyebrow: string;
  headline: string;
  intro?: string;
  items: Item[];
};

export function FocusList({ eyebrow, headline, intro, items }: Props) {
  return (
    <section className="relative border-t hairline bg-ink">
      <div className="mx-auto max-w-container px-6 py-24 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-5 text-[10px] uppercase tracking-wider3 text-graphite-200">
                <span className="block h-px w-14 bg-olive-light" />
                <span>{eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 max-w-[18ch] font-display text-display-md font-light text-bone">
                {headline}
              </h2>
            </Reveal>
            {intro && (
              <Reveal delay={0.1}>
                <p className="mt-10 max-w-[42ch] text-[15px] font-light leading-relaxed text-graphite-100">
                  {intro}
                </p>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <ul className="border-t hairline">
              {items.map((it, i) => (
                <Reveal key={it.title} delay={i * 0.04}>
                  <li className="grid grid-cols-12 items-baseline gap-6 border-b hairline py-8 md:py-10">
                    <div className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-wider3 text-olive-light">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <div className="font-display text-2xl font-light tracking-tightish text-bone md:text-3xl">
                        {it.title}
                      </div>
                      <div className="mt-4 max-w-[60ch] text-[14px] font-light leading-relaxed text-graphite-100">
                        {it.body}
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
