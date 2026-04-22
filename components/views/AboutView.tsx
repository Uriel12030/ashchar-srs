import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import type { Dict } from "@/lib/i18n";

export function AboutView({ t }: { t: Dict }) {
  return (
    <>
      <PageHero
        eyebrow={t.about.pageEyebrow}
        title={
          <>
            {t.about.pageTitleStart}{" "}
            <span className="text-accent">{t.about.pageTitleAccent}</span>
          </>
        }
        description={t.about.pageDescription}
      />

      <section className="bg-white">
        <Container className="py-24 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                {t.about.companyEyebrow}
              </p>
              <h2 className="mt-5 font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2 text-navy">
                {t.about.companyTitle}
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-ink-muted">
              {t.about.companyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft border-y border-navy/10">
        <Container className="py-24 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                {t.about.scaleEyebrow}
              </p>
              <h2 className="mt-5 font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2 text-navy">
                {t.about.scaleTitle}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
                {t.about.scaleDescription}
              </p>
            </div>

            <ul className="self-center">
              {t.about.scaleItems.map((item) => (
                <li
                  key={item.text}
                  className="flex items-baseline gap-6 border-t border-navy/10 py-5 last:border-b"
                >
                  <span className="min-w-[6rem] font-display text-2xl lg:text-3xl font-semibold tabular-nums text-navy">
                    {item.value}
                  </span>
                  <span className="text-base leading-relaxed text-ink-muted">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-24 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                {t.about.principlesEyebrow}
              </p>
              <h2 className="mt-5 font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2 text-navy">
                {t.about.principlesTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted max-w-md">
                {t.about.principlesDescription}
              </p>
            </div>

            <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {t.howWeOperate.items.map((item, i) => (
                <li key={item.title} className="flex gap-5">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-accent-dark pt-1 whitespace-nowrap">
                    / {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
