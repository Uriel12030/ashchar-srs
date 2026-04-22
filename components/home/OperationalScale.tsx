import { Container } from "../Container";
import { operationalScale } from "@/data/content";

export function OperationalScale() {
  return (
    <section className="bg-surface-soft border-b border-navy/10">
      <Container className="py-20 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
              / OPERATIONAL SCALE
            </p>
            <h2 className="mt-5 max-w-xl font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2 text-navy">
              Current operational footprint.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
            A snapshot of the scale currently under coordination across
            Israel.
          </p>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10">
          {operationalScale.map((m) => (
            <div
              key={m.label}
              className="flex flex-col justify-between gap-8 bg-white p-8 lg:p-10"
            >
              <dt className="font-display text-5xl lg:text-[64px] font-semibold leading-none tracking-tighter2 tabular-nums text-navy">
                {m.value}
              </dt>
              <dd>
                <p className="font-display text-base font-semibold text-navy">
                  {m.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {m.note}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
