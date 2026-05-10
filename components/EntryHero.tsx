"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CinemaImage } from "./CinemaImage";

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    href: "/government",
    eyebrow: "01 — Government & Defense",
    title: "Government\n& Defense",
    body: "For military, government and mission-critical operations.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2400&q=80",
  },
  {
    href: "/commercial",
    eyebrow: "02 — Commercial Operations",
    title: "Commercial\nOperations",
    body: "For private-sector logistics and infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=80",
  },
];

export function EntryHero() {
  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient grain">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-container flex-col px-6 pb-12 pt-28 md:px-10 md:pb-20 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="mb-10 flex items-center gap-4 text-[11px] uppercase tracking-wider2 text-graphite-200 md:mb-16"
        >
          <span className="block h-px w-10 bg-olive" />
          <span>Israel — Operational Infrastructure</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
          className="font-display text-5xl font-light leading-[0.95] tracking-ultratight text-bone md:text-7xl lg:text-[88px]"
        >
          Operational <em className="not-italic text-graphite-200">infrastructure</em>
          <br />
          & logistics support
          <br />
          <span className="text-graphite-200">in Israel.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          className="mt-8 max-w-[44ch] text-base leading-relaxed text-graphite-100 md:text-lg"
        >
          Rapid deployment solutions for defense and commercial operations.
        </motion.p>

        <div className="mt-16 grid flex-1 grid-cols-1 gap-4 md:mt-24 md:grid-cols-2 md:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.href}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.4 + i * 0.1 }}
            >
              <Link
                href={c.href}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden border hairline bg-graphite-900 p-7 transition-colors duration-500 hover:border-bone/30 md:aspect-[5/6] md:p-10"
              >
                <CinemaImage
                  src={c.image}
                  alt={c.title.replace("\n", " ")}
                  className="absolute inset-0"
                  imgClassName="opacity-50 transition-all duration-[2400ms] ease-cinema group-hover:opacity-70 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />

                <div className="relative">
                  <div className="font-mono text-[10px] uppercase tracking-wider2 text-olive-light">
                    {c.eyebrow}
                  </div>
                  <h2 className="mt-6 whitespace-pre-line font-display text-4xl font-light leading-[1] tracking-ultratight text-bone md:text-6xl">
                    {c.title}
                  </h2>
                  <p className="mt-6 max-w-[34ch] text-[13px] leading-relaxed text-graphite-100 md:text-sm">
                    {c.body}
                  </p>
                  <div className="mt-10 flex items-center gap-3 text-[11px] uppercase tracking-wider2 text-bone">
                    <span>Enter</span>
                    <span
                      aria-hidden
                      className="block w-4 transition-transform duration-500 ease-cinema group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
