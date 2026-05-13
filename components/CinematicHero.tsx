"use client";

import { motion } from "framer-motion";
import { CinemaImage } from "./CinemaImage";
import { dict, type Locale } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  locale: Locale;
  eyebrow: string;
  headline: string;
  sub?: string;
  image: string;
  showScrollHint?: boolean;
};

export function CinematicHero({
  locale,
  eyebrow,
  headline,
  sub,
  image,
  showScrollHint = false,
}: Props) {
  const t = dict[locale];
  const isHe = locale === "he";

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <CinemaImage
        src={image}
        alt=""
        priority
        className="absolute inset-0"
        imgClassName="opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/55 to-ink" />
      <div className="pointer-events-none absolute inset-0 grain" />

      {/* Top-left coordinates / theatre — discreet operator feel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease, delay: 0.6 }}
        className={`absolute top-24 z-10 hidden font-mono text-[10px] uppercase tracking-wider3 text-graphite-200 md:top-28 md:block ${
          isHe ? "right-6 md:right-10" : "left-6 md:left-10"
        }`}
      >
        <div>{t.hero.coords}</div>
        <div className="mt-1">{t.hero.theatre}</div>
      </motion.div>

      {/* Top-right registration metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease, delay: 0.6 }}
        className={`absolute top-24 z-10 hidden font-mono text-[10px] uppercase tracking-wider3 text-graphite-200 md:top-28 md:block ${
          isHe ? "left-6 md:left-10 text-left" : "right-6 md:right-10 text-right"
        }`}
      >
        <div>UEI · VJ23VL3BNJL8</div>
        <div className="mt-1">NCAGE · 7006A</div>
      </motion.div>

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

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.45 }}
            className="mt-10 max-w-[44ch] text-base font-light leading-relaxed text-graphite-100 md:text-lg"
          >
            {sub}
          </motion.p>
        )}
      </div>

      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease, delay: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-wider3 text-graphite-200"
        >
          <div className="flex flex-col items-center gap-3">
            <span>{t.common.scroll}</span>
            <span className="block h-8 w-px bg-graphite-200/60" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
