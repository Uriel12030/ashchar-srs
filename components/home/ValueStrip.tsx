import { Container } from "../Container";
import type { Dict } from "@/lib/i18n";

export function ValueStrip({ t }: { t: Dict["valueStrip"] }) {
  return (
    <section className="border-b border-navy/10 bg-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.map((item, i) => (
            <div key={item.title} className="flex gap-5">
              <span className="font-mono text-[11px] tracking-[0.18em] text-accent-dark pt-0.5 whitespace-nowrap">
                / {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
