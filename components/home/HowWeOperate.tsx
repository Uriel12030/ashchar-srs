import { Container } from "../Container";
import { howWeOperate } from "@/data/content";

export function HowWeOperate() {
  return (
    <section className="bg-white">
      <Container className="py-24 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
              / HOW WE OPERATE
            </p>
            <h2 className="mt-5 font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2 text-navy">
              Structured execution for operational environments.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted max-w-md">
              The principles that shape how we scope, coordinate, and deliver
              on the ground.
            </p>
          </div>

          <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {howWeOperate.map((item, i) => (
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
  );
}
