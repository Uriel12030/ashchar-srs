import Image from "next/image";
import { Reveal } from "./Reveal";
import {
  getOperationalExperience,
  getExperienceDisclaimer,
} from "@/data/experience";
import { dict, type Locale } from "@/lib/i18n";

/**
 * Operational Experience — restrained logo grid.
 *
 * Visual treatment:
 *  - All logos are forced to a unified monochrome silhouette via the
 *    `brightness(0) invert(1)` filter, regardless of source colors.
 *    This collapses recognizable full-color seals to white silhouettes
 *    that read on the dark background and feel intentional rather
 *    than pasted-in. The trade-off is loss of internal detail; the
 *    gain is a serious enterprise grid that doesn't look like a
 *    typical "logo wall".
 *  - Default state: 65% opacity. Hover lifts to 100%.
 *  - Width/height are reserved per entry so the grid doesn't shift
 *    while images load.
 *  - The label below each logo carries the actual name (so the
 *    silhouette is still identifiable in writing), and acronyms get
 *    a small expansion line in localized mono caption type.
 */
export function OperationalExperience({ locale }: { locale: Locale }) {
  const t = dict[locale].experience;
  const entries = getOperationalExperience(locale);
  const disclaimer = getExperienceDisclaimer(locale);

  return (
    <section className="relative border-t hairline bg-ink">
      <div className="mx-auto max-w-container px-6 py-24 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-5 text-[10px] uppercase tracking-wider3 text-graphite-200">
                <span className="block h-px w-14 bg-olive-light" />
                <span>{t.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 max-w-[16ch] font-display text-display-md font-light text-bone">
                {t.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-[44ch] text-[14px] font-light leading-relaxed text-graphite-100 md:text-[15px]">
                {t.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="text-[10px] uppercase tracking-wider3 text-graphite-200">
                {t.includes}
              </div>
            </Reveal>

            <ul className="mt-8 grid grid-cols-2 gap-px border-y hairline bg-graphite-700 sm:grid-cols-3 md:grid-cols-4">
              {entries.map((e, i) => (
                <Reveal key={e.name} delay={Math.min(i * 0.04, 0.32)}>
                  <li className="group flex h-full min-h-[160px] flex-col items-center justify-center gap-5 bg-ink px-4 py-10 transition-colors duration-500 hover:bg-graphite-900/60 md:min-h-[180px] md:px-6">
                    <div
                      className="flex h-14 items-center justify-center opacity-65 transition-opacity duration-500 group-hover:opacity-100 md:h-16"
                      style={{
                        // Convert any source artwork (color seals, dark
                        // wordmarks, custom white SVGs) into a unified
                        // white silhouette on dark background.
                        filter: "brightness(0) invert(1)",
                      }}
                    >
                      <Image
                        src={e.logo}
                        alt={`${e.name} reference`}
                        width={e.width}
                        height={e.height}
                        className="h-full w-auto object-contain"
                        sizes={`${e.width}px`}
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <span className="font-mono text-[10px] uppercase tracking-wider3 text-graphite-100 transition-colors duration-500 group-hover:text-bone">
                        {e.name}
                      </span>
                      {e.expand && (
                        <span className="max-w-[22ch] font-mono text-[9px] uppercase leading-relaxed tracking-wider3 text-graphite-300">
                          {e.expand}
                        </span>
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.32}>
              <p className="mt-10 max-w-[80ch] text-[10px] leading-relaxed text-graphite-300">
                {disclaimer}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
