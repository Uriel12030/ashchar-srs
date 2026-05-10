"use client";

import { projects, type Project } from "@/data/content";
import { CinemaImage } from "./CinemaImage";
import { Reveal } from "./Reveal";

type Props = {
  filter?: Project["category"];
};

export function ProjectCards({ filter }: Props) {
  const list = filter
    ? projects.filter((p) => p.category === filter)
    : projects;

  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
      {list.map((p, i) => (
        <Reveal key={p.slug} delay={i * 0.08} y={32}>
          <article className="group relative block aspect-[3/4] overflow-hidden bg-graphite-900">
            <CinemaImage
              src={p.image}
              alt={p.title}
              className="absolute inset-0"
              imgClassName="transition-transform duration-[2400ms] ease-cinema group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-wider2 text-olive-light">
                {p.category}
              </div>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tightish text-bone md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-graphite-100">
                {p.blurb}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
