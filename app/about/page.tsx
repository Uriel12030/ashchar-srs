import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { howWeOperate } from "@/data/content";

export const metadata: Metadata = {
  title: "About — Ashchar SRS",
  description:
    "Ashchar SRS is an Israeli company focused on operational delivery across accommodation, infrastructure, logistics, equipment, and field support.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="/ ABOUT"
        title={
          <>
            An Israeli operational partner{" "}
            <span className="text-accent">for structured delivery.</span>
          </>
        }
        description="Ashchar SRS coordinates multi-disciplinary operational requirements in Israel — from a single service to a full end-to-end deployment."
      />

      <section className="bg-white">
        <Container className="py-24 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                / COMPANY
              </p>
              <h2 className="mt-5 font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2 text-navy">
                Who we are.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-ink-muted">
              <p>
                Ashchar SRS is an Israeli company focused on operational
                delivery across accommodation, infrastructure, logistics,
                equipment, and field support.
              </p>
              <p>
                We work with government entities, international organizations,
                and private companies that require practical execution in
                Israel.
              </p>
              <p>
                Our role is to translate complex or multi-disciplinary
                requirements into coordinated, real-world solutions — delivered
                on the ground through an established local network.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft border-y border-navy/10">
        <Container className="py-24 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                / OPERATING PRINCIPLES
              </p>
              <h2 className="mt-5 font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2 text-navy">
                How we work.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted max-w-md">
                The principles that shape how we scope, coordinate, and
                deliver.
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
    </>
  );
}
