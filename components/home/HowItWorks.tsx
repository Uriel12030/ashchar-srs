import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { howItWorks } from "@/data/content";

export function HowItWorks() {
  return (
    <section className="bg-surface-soft">
      <Container className="py-24 lg:py-32">
        <SectionHeading
          eyebrow="How it works"
          title="A clear path from requirement to operational delivery."
          description="We keep the process simple and transparent — so you can move fast, make informed decisions, and rely on a structured delivery on the ground."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {howItWorks.map((item) => (
            <li
              key={item.step}
              className="relative flex flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-card"
            >
              <span className="font-display text-4xl font-semibold text-accent-dark">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
