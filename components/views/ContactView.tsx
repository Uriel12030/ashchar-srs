import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import type { Dict } from "@/lib/i18n";
import {
  contact,
  mailtoLink,
  telLink,
  whatsappLink,
} from "@/data/site";

export function ContactView({ t }: { t: Dict }) {
  const channels = t.contact.channels.map((c) => {
    if (c.kind === "email") {
      return { ...c, value: c.value || contact.email, href: mailtoLink(), external: false };
    }
    if (c.kind === "phone") {
      return { ...c, value: c.value || contact.phone, href: telLink(), external: false };
    }
    return { ...c, href: whatsappLink(), external: true };
  });

  return (
    <>
      <PageHero
        eyebrow={t.contact.pageEyebrow}
        title={t.contact.pageTitle}
        description={t.contact.pageDescription}
      />

      <section className="bg-white">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                {t.contact.channelsEyebrow}
              </p>
              <h2 className="mt-5 font-display text-2xl lg:text-3xl font-semibold leading-[1.1] tracking-tighter2 text-navy">
                {t.contact.channelsTitle}
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
                          <p
                            className="mt-1 font-display text-base font-semibold text-navy group-hover:text-accent-dark transition-colors"
                            dir={c.kind === "whatsapp" ? undefined : "ltr"}
                          >
                            {c.value}
                          </p>
                        </div>
                      </div>
                      <Icon
                        name="arrow-up-right"
                        size={18}
                        className="text-ink-soft group-hover:text-accent-dark transition rtl:-scale-x-100"
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
                <span>{t.contact.coverageText}</span>
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent-dark">
                {t.contact.messageEyebrow}
              </p>
              <h2 className="mt-5 font-display text-2xl lg:text-3xl font-semibold leading-[1.1] tracking-tighter2 text-navy">
                {t.contact.messageTitle}
              </h2>
              <p className="mt-4 text-sm text-ink-muted max-w-md">
                {t.contact.messageDescription}
              </p>
              <div className="mt-10">
                <Suspense fallback={<div className="h-10" />}>
                  <ContactForm t={t.contact.form} common={t.common} />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
