import { Reveal } from "./Reveal";
import { dict, type Locale } from "@/lib/i18n";

export function MissionExecution({ locale }: { locale: Locale }) {
  const t = dict[locale].mission;
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
              <h2 className="mt-8 max-w-[14ch] font-display text-display-md font-light text-bone">
                {t.title}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pt-6">
            <Reveal delay={0.1}>
              <p className="max-w-[60ch] font-light leading-relaxed text-graphite-100 text-base md:text-lg">
                {t.body}
              </p>
            </Reveal>

            <ul className="mt-12 grid grid-cols-1 gap-px border-y hairline bg-graphite-700 md:mt-16 md:grid-cols-3">
              {t.credibility.map((line, i) => (
                <Reveal key={i} delay={0.15 + i * 0.06}>
                  <li className="bg-ink p-6 md:p-8">
                    <div className="font-mono text-[10px] uppercase tracking-wider3 text-olive-light">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-5 max-w-[36ch] text-[13px] font-light leading-relaxed text-bone">
                      {line}
                    </p>
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
