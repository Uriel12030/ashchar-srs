import { Container } from "../Container";
import { Icon } from "../Icons";
import { capabilityGroups } from "@/data/capabilities";

export function CapabilityGroups() {
  return (
    <section id="capabilities" className="bg-surface-soft">
      <Container className="py-24 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
              / CAPABILITIES
            </p>
            <h2 className="mt-5 font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2 text-navy">
              Three capability groups.
              <br />
              One coordinated partner.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              Our services are organized around three capability groups.
              Together they cover the full scope of an operational deployment
              in Israel.
            </p>
          </div>

          <div className="space-y-5">
            {capabilityGroups.map((group) => (
              <article
                key={group.id}
                className="grid grid-cols-1 gap-6 rounded-2xl border border-navy/10 bg-white p-8 lg:grid-cols-[auto_1fr] lg:gap-10 lg:p-10"
              >
                <div className="flex items-start justify-between lg:flex-col lg:items-start lg:gap-8">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] text-accent-dark">
                      / {group.number}
                    </p>
                    <div className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-accent">
                      <Icon name={group.icon} size={26} />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tightish text-navy">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted max-w-xl">
                    {group.summary}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {group.scope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-navy/90"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-3 shrink-0 bg-accent"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
