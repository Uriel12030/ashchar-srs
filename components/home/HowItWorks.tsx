import { Container } from "../Container";
import { howItWorks } from "@/data/content";

export function HowItWorks() {
  return (
    <section className="bg-surface-soft border-y border-navy/10">
      <Container className="py-24 lg:py-36">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
            / ENGAGEMENT
          </p>
          <h2 className="mt-5 font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2 text-navy">
            A clear path from requirement to delivery.
          </h2>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="hidden lg:block relative">
            <div
              aria-hidden="true"
              className="absolute left-[calc(10%)] right-[calc(10%)] top-6 h-px bg-navy/15"
            />
            <ol className="relative grid grid-cols-5 gap-6">
              {howItWorks.map((item) => (
                <li key={item.step} className="flex flex-col items-center text-center">
                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white border border-navy/15 font-display text-sm font-semibold text-navy">
                    {item.step}
                  </span>
                  <h3 className="mt-7 font-display text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted max-w-[200px]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <ol className="lg:hidden space-y-0">
            {howItWorks.map((item, i) => (
              <li key={item.step} className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-navy/15 font-display text-sm font-semibold text-navy">
                    {item.step}
                  </span>
                  {i < howItWorks.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="my-2 h-10 w-px bg-navy/15"
                    />
                  )}
                </div>
                <div className="flex-1 pt-2 pb-6">
                  <h3 className="font-display text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
