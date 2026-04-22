import { Container } from "../Container";
import { valueStrip } from "@/data/content";

export function ValueStrip() {
  return (
    <section className="border-y border-navy/10 bg-surface-soft">
      <Container className="py-10 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valueStrip.map((item, i) => (
            <div
              key={item.title}
              className="relative pl-5 lg:pl-6 lg:pr-4"
            >
              <span className="absolute left-0 top-1 h-full w-0.5 rounded bg-accent" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-dark">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
