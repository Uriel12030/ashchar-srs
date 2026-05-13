import { Reveal } from "./Reveal";
import {
  getOperationalExperience,
  getExperienceDisclaimer,
} from "@/data/experience";
import { dict, type Locale } from "@/lib/i18n";

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
                  <li className="group flex h-full min-h-[120px] flex-col items-center justify-center bg-ink px-4 py-10 transition-colors duration-500 hover:bg-graphite-900/60 md:min-h-[140px] md:px-6">
                    <span className="font-display text-xl font-light uppercase tracking-wider2 text-graphite-100 transition-colors duration-500 group-hover:text-bone md:text-2xl">
                      {e.name}
                    </span>
                    {e.expand && (
                      <span className="mt-3 max-w-[22ch] text-center font-mono text-[9px] uppercase leading-relaxed tracking-wider3 text-graphite-300">
                        {e.expand}
                      </span>
                    )}
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
