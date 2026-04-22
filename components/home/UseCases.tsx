import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { Icon } from "../Icons";
import { useCases } from "@/data/content";

export function UseCases() {
  return (
    <section className="bg-white">
      <Container className="py-24 lg:py-32">
        <SectionHeading
          eyebrow="Use cases"
          title="Examples of requirements we handle."
          description="From single-element needs to multi-discipline operational deployments, our work spans the range of real-world Israeli execution requirements."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="flex gap-4 rounded-xl border border-navy/10 bg-surface-soft p-6 transition hover:border-accent/40 hover:bg-white hover:shadow-card"
            >
              <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-navy text-accent">
                <Icon name="check" size={16} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-navy">
                  {u.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {u.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
