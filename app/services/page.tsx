import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { services } from "@/data/services";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services — Ashchar SRS",
  description:
    "Full-scope operational services across Israel: accommodation, site setup, heavy equipment, modular structures, power & HVAC, transport, protection, and regulatory support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            End-to-end operational solutions{" "}
            <span className="text-accent">for Israel.</span>
          </>
        }
        description="From a single requirement to a full operational deployment, Ashchar coordinates accommodation, infrastructure, equipment, and field support — executed on the ground."
      />

      <section className="bg-surface-soft border-b border-navy/10">
        <Container className="py-10 lg:py-12">
          <nav aria-label="Services index" className="flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-xs font-medium text-navy transition hover:border-accent hover:bg-accent/10"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 lg:py-28 space-y-16 lg:space-y-24">
          {services.map((service, idx) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
            >
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-accent">
                  <Icon name={service.icon} size={28} />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent-dark">
                  {String(idx + 1).padStart(2, "0")} · Service
                </p>
                <h2 className="mt-3 font-display text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-tighter2 text-navy">
                  {service.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact?type=quote" variant="primary">
                    Request a Quote
                    <Icon name="arrow-right" size={16} />
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Discuss a Requirement
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-navy/10 bg-surface-soft p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
                  Capabilities
                </p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-dark">
                        <Icon name="check" size={14} />
                      </span>
                      <span className="text-navy/90 leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
