"use client";

import { motion } from "framer-motion";
import { CinemaImage } from "./CinemaImage";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  image: string;
};

export function LandingHero({ eyebrow, headline, sub, image }: Props) {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <CinemaImage
        src={image}
        alt=""
        priority
        className="absolute inset-0"
        imgClassName="opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink" />
      <div className="pointer-events-none absolute inset-0 grain" />

      <div className="relative z-10 mx-auto flex h-full max-w-container flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
          className="flex items-center gap-5 text-[10px] uppercase tracking-wider3 text-graphite-200"
        >
          <span className="block h-px w-14 bg-olive-light" />
          <span>{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease, delay: 0.15 }}
          className="mt-10 max-w-[14ch] whitespace-pre-line font-display text-display-xl font-light text-bone"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.4 }}
          className="mt-10 max-w-[44ch] text-base font-light leading-relaxed text-graphite-100 md:text-lg"
        >
          {sub}
        </motion.p>
      </div>
    </section>
  );
}
