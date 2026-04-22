import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icons";
import { CTASection } from "@/components/home/CTASection";
import { whyAshchar } from "@/data/content";

export const metadata: Metadata = {
  title: "About — Ashchar SRS",
  description:
    "Ashchar SRS is an Israeli company focused on rapid operational delivery across accommodation, infrastructure, logistics, equipment, and field support.",
};

const principles = [
  {
    title: "Execution first",
    description:
      "We measure ourselves by what gets delivered on the ground — not by what gets written in a deck.",
    icon: "check" as const,
  },
  {
    title: "Speed with rigor",
    description:
      "Rapid response without shortcuts. Clear scoping, clean commercials, and reliable delivery.",
    icon: "clock" as const,
  },
  {
    title: "Single point of ownership",
    description:
      "One team coordinates across disciplines so you never have to stitch together vendors.",
    icon: "shield" as const,
  },
  {
    title: "International standards",
    description:
      "Workflows, documentation, and communication built for international counterparties.",
    icon: "globe" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            An Israeli operational partner{" "}
            <span className="text-accent">built for execution.</span>
          </>
        }
        description="We turn complex or urgent requirements into coordinated, real-world solutions — quickly and reliably — for government, international, and private sector clients in Israel."
      />

      <section className="bg-white">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <SectionHeading
              eyebrow="Who we are"
              title="A focused team for fast, practical delivery in Israel."
            />
            <div className="space-y-6 text-base leading-relaxed text-ink-muted">
              <p>
                Ashchar SRS is an Israeli company focused on rapid operational
                delivery across accommodation, infrastructure, logistics,
                equipment, and field support requirements.
              </p>
              <p>
                We work with government entities, international organizations,
                and private companies that require fast, practical execution in
                Israel.
              </p>
              <p>
                Our role is to turn complex or urgent requirements into
                coordinated, real-world solutions — quickly and reliably.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft border-y border-navy/10">
        <Container className="py-24 lg:py-32">
          <SectionHeading
            eyebrow="How we operate"
            title="The principles that shape our work."
            description="These are not slogans — they are the operating rules that let us respond quickly, deliver reliably, and earn long-term relationships."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 rounded-xl border border-navy/10 bg-white p-7 shadow-card"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-accent">
                  <Icon name={p.icon} size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-24 lg:py-32">
          <SectionHeading
            eyebrow="Why clients choose us"
            title="What makes Ashchar different."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyAshchar.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-navy/10 bg-surface-soft p-7"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent-dark">
                  <Icon name="check" size={20} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-navy">
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

      <CTASection />
    </>
  );
}
