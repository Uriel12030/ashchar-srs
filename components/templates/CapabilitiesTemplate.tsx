import { getCapabilities, heroImages } from "@/data/content";
import { CinemaImage } from "@/components/CinemaImage";
import { Reveal } from "@/components/Reveal";
import { CinematicHero } from "@/components/CinematicHero";
import { Closer } from "@/components/Closer";
import { dict, type Locale } from "@/lib/i18n";

export function CapabilitiesTemplate({ locale }: { locale: Locale }) {
  const t = dict[locale].pages.capabilities;
  const capabilities = getCapabilities(locale);

  return (
    <>
      <CinematicHero
        locale={locale}
        eyebrow={t.eyebrow}
        headline={t.headline}
        sub={t.sub}
        image={heroImages.capabilities}
      />

      <section className="border-t hairline bg-ink">
        <ul className="divide-y hairline">
          {capabilities.map((c, i) => {
            const reverse = i % 2 === 1;
            return (
              <li id={c.slug} key={c.slug} className="scroll-mt-24">
                <div className="mx-auto max-w-container px-6 py-24 md:px-10 md:py-40">
                  <div
                    className={`grid grid-cols-12 items-end gap-y-12 lg:gap-x-16 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <Reveal y={32} className="col-span-12 lg:col-span-8">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite-900 md:aspect-[16/10]">
                        <CinemaImage
                          src={c.image}
                          alt={c.title}
                          className="absolute inset-0"
                          imgClassName="opacity-90"
                          sizes="(min-width: 1024px) 67vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
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
                        {String(i + 1).padStart(2, "0")} — {t.capabilityLabel}
                      </div>
                      <h2 className="mt-6 font-display text-3xl font-light leading-[1.05] tracking-ultratight text-bone md:text-4xl lg:text-5xl">
                        {c.title}
                      </h2>
                      <p className="mt-6 max-w-[44ch] text-[14px] font-light leading-relaxed text-graphite-100">
                        {c.description}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <Closer locale={locale} title={t.closerTitle} />
    </>
  );
}
