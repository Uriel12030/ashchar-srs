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
    "Direct contact channels for Ashchar SRS — email, phone, and WhatsApp.",
};

const channels = [
  {
    label: "Email",
    icon: "mail" as const,
    value: contact.email,
    href: mailtoLink(),
  },
  {
    label: "Phone",
    icon: "phone" as const,
    value: contact.phone,
    href: telLink(),
  },
  {
    label: "WhatsApp",
    icon: "whatsapp" as const,
    value: "Message",
    href: whatsappLink(),
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="/ CONTACT"
        title="Get in touch."
        description="Direct channels for inquiries and structured requirements."
      />

      <section className="bg-white">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                / CHANNELS
              </p>
              <h2 className="mt-5 font-display text-2xl lg:text-3xl font-semibold leading-[1.1] tracking-tighter2 text-navy">
                Direct contact.
              </h2>
              <ul className="mt-10 space-y-0">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between gap-6 border-t border-navy/10 py-6 last:border-b"
                    >
                      <div className="flex items-center gap-5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy text-accent">
                          <Icon name={c.icon} size={18} />
                        </span>
                        <div>
                          <p className="font-mono text-[10px] tracking-[0.22em] text-ink-soft uppercase">
                            {c.label}
                          </p>
                          <p className="mt-1 font-display text-base font-semibold text-navy group-hover:text-accent-dark transition-colors">
                            {c.value}
                          </p>
                        </div>
                      </div>
                      <Icon
                        name="arrow-up-right"
                        size={18}
                        className="text-ink-soft group-hover:text-accent-dark transition"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex items-start gap-3 text-sm text-ink-muted">
                <Icon
                  name="location"
                  size={18}
                  className="mt-0.5 text-accent-dark shrink-0"
                />
                <span>
                  Based in Israel. Operational coverage nationwide.
                </span>
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                / MESSAGE
              </p>
              <h2 className="mt-5 font-display text-2xl lg:text-3xl font-semibold leading-[1.1] tracking-tighter2 text-navy">
                Send a message.
              </h2>
              <p className="mt-4 text-sm text-ink-muted max-w-md">
                Share the outline of your requirement — scope, location, and
                timeline. Minimal information is enough to start.
              </p>
              <div className="mt-10">
                <Suspense fallback={<div className="h-10" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
