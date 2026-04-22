import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { Icon } from "../Icons";
import { whyAshchar } from "@/data/content";

export function WhyAshchar() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <Container className="relative py-24 lg:py-32">
        <SectionHeading
          light
          eyebrow="Why Ashchar"
          title="Built for execution in demanding, time-critical environments."
          description="We are set up to respond quickly, coordinate across disciplines, and deliver real outcomes on the ground — for clients that cannot afford delays."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {whyAshchar.map((item) => (
            <div
              key={item.title}
              className="group relative bg-navy p-8 transition-colors hover:bg-navy-700"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-accent/40 bg-accent/10 text-accent">
                <Icon name="check" size={20} />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
