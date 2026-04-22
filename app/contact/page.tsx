import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import {
  contact,
  mailtoLink,
  telLink,
  whatsappLink,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Ashchar SRS",
  description:
    "Send a requirement or request a quote. We respond quickly by email, phone, or WhatsApp.",
};

const channels = [
  {
    label: "Email",
    icon: "mail" as const,
    value: contact.email,
    href: mailtoLink("Inquiry — Ashchar SRS"),
    hint: "Preferred for structured requirements",
  },
  {
    label: "Phone",
    icon: "phone" as const,
    value: contact.phone,
    href: telLink(),
    hint: "Direct line for urgent matters",
  },
  {
    label: "WhatsApp",
    icon: "whatsapp" as const,
    value: "Message us",
    href: whatsappLink("Hello, I would like to discuss a requirement."),
    hint: "Fastest informal channel",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Send a requirement.{" "}
            <span className="text-accent">We respond fast.</span>
          </>
        }
        description="Share the outline of your need — scope, location, timeline. Minimal information is enough to start. We respond within hours on business days."
      />

      <section className="bg-white">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Request a quote or send a message
              </h2>
              <p className="mt-3 text-ink-muted">
                Fields marked with * are required. All inquiries are handled
                directly by our team.
              </p>
              <div className="mt-8">
                <Suspense fallback={<div className="h-10" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl bg-navy p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Direct channels
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  Reach us directly
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  Skip the form — contact us directly by phone, WhatsApp, or
                  email.
                </p>
                <ul className="mt-6 space-y-4">
                  {channels.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-accent/50 hover:bg-white/10"
                      >
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                          <Icon name={c.icon} size={20} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                            {c.label}
                          </p>
                          <p className="mt-1 truncate font-display text-base font-semibold text-white group-hover:text-accent">
                            {c.value}
                          </p>
                          <p className="mt-1 text-xs text-white/60">
                            {c.hint}
                          </p>
                        </div>
                        <Icon
                          name="arrow-up-right"
                          size={18}
                          className="ml-auto mt-1 text-white/40 transition group-hover:text-accent"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-navy/10 bg-surface-soft p-8">
                <div className="flex items-center gap-3">
                  <Icon name="clock" size={20} className="text-accent-dark" />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                    Response time
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  We typically respond within hours during business days.
                  Urgent requests are reviewed immediately — please indicate
                  urgency in your message or call directly.
                </p>
              </div>

              <div className="rounded-2xl border border-navy/10 bg-surface-soft p-8">
                <div className="flex items-center gap-3">
                  <Icon name="location" size={20} className="text-accent-dark" />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                    Coverage
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Operating nationwide across Israel. We coordinate with
                  suppliers, authorities, and operators countrywide.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
