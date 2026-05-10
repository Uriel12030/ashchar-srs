"use client";

import { projects, type Project } from "@/data/content";
import { CinemaImage } from "./CinemaImage";
import { Reveal } from "./Reveal";

type Props = {
  filter?: Project["category"];
  withHeader?: boolean;
};

export function Operations({ filter, withHeader = true }: Props) {
  const list = filter
    ? projects.filter((p) => p.category === filter)
    : projects;

  return (
    <section className="relative border-t hairline bg-ink">
      <div className="mx-auto max-w-container px-6 py-24 md:px-10 md:py-40">
        {withHeader && (
          <div className="mb-20 md:mb-32">
            <Reveal>
              <div className="flex items-center gap-5 text-[10px] uppercase tracking-wider3 text-graphite-200">
                <span className="block h-px w-14 bg-olive-light" />
                <span>Selected operations</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 max-w-[18ch] font-display text-display-md font-light text-bone">
                Executed in theatre.
              </h2>
            </Reveal>
          </div>
        )}

        <ul className="space-y-24 md:space-y-40">
          {list.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <li key={p.slug}>
                <article
                  className={`grid grid-cols-12 items-end gap-y-10 lg:gap-x-12 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal y={32} className="col-span-12 lg:col-span-8">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite-900">
                      <CinemaImage
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0"
                        imgClassName="opacity-85"
                        sizes="(min-width: 1024px) 67vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                      <div className="pointer-events-none absolute inset-0 grain" />
                    </div>
                  </Reveal>

                  <Reveal
                    delay={0.1}
                    y={24}
                    className={`col-span-12 lg:col-span-4 ${
                      reverse ? "lg:pe-0 lg:ps-4" : "lg:ps-0 lg:pe-4"
                    }`}
                  >
                    <div className="font-mono text-[10px] uppercase tracking-wider3 text-olive-light">
                      Op {String(i + 1).padStart(2, "0")} · {p.category}
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-light leading-[1.05] tracking-ultratight text-bone md:text-5xl">
                      {p.title}
                    </h3>
                    <div className="mt-4 text-[11px] uppercase tracking-wider2 text-graphite-200">
                      {p.meta}
                    </div>
                    <p className="mt-8 max-w-[44ch] text-[14px] leading-relaxed text-graphite-100">
                      {p.blurb}
                    </p>
                  </Reveal>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
