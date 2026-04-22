import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import type { Dict } from "@/lib/i18n";

export function ServicesView({ t }: { t: Dict }) {
  return (
    <>
      <PageHero
        eyebrow={t.services.pageEyebrow}
        title={
          <>
            {t.services.pageTitleStart}{" "}
            <span className="text-accent">{t.services.pageTitleAccent}</span>
          </>
        }
        description={t.services.pageDescription}
      />

      <section className="bg-surface-soft border-b border-navy/10">
        <Container className="py-10 lg:py-14">
          <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
            / {t.common.index}
          </p>
          <nav
            aria-label="Services index"
            className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3"
          >
            {t.services.services.map((s, i) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="group flex items-baseline gap-4 border-b border-navy/10 py-2.5 text-sm text-navy hover:border-accent"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-medium group-hover:text-accent-dark transition-colors">
                  {s.title}
                </span>
                <Icon
                  name="arrow-right"
                  size={14}
                  className="text-ink-soft group-hover:text-accent-dark transition rtl:rotate-180"
                />
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 lg:py-28 space-y-20 lg:space-y-28">
          {t.services.services.map((service, idx) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20"
            >
              <div>
                <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                  / {String(idx + 1).padStart(2, "0")}
                </p>
                <div className="mt-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-accent">
                  <Icon name={service.icon} size={28} />
                </div>
                <h2 className="mt-6 font-display text-2xl lg:text-3xl font-semibold leading-[1.1] tracking-tighter2 text-navy">
                  {service.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>

              <div className="lg:pt-16">
                <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                  / {t.common.scope}
                </p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm text-navy/90 border-t border-navy/10 pt-4"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-3 shrink-0 bg-accent"
                      />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
