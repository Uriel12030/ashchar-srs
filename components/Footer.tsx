import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Icon } from "./Icons";
import type { Dict, Locale } from "@/lib/i18n";
import { contact, mailtoLink, site, telLink, whatsappLink } from "@/data/site";

export function Footer({ t }: { t: Dict }) {
  const year = new Date().getFullYear();
  const servicesBase = t.locale === "he" ? "/he/services" : "/services";
  const locationLabel = t.locale === "he" ? "ישראל" : "Israel";
  return (
    <footer className="bg-navy text-white/80">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" href={t.home} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {t.footer.descriptor}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {t.footer.company}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {t.nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {t.footer.services}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {t.services.services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`${servicesBase}#${s.slug}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={servicesBase}
                  className="text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1.5"
                >
                  {t.footer.allServices}
                  <Icon name="arrow-right" size={14} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="mail" size={18} className="mt-0.5 text-accent" />
                <a
                  href={mailtoLink()}
                  className="text-white/80 hover:text-white transition-colors"
                  dir="ltr"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="phone" size={18} className="mt-0.5 text-accent" />
                <a
                  href={telLink()}
                  className="text-white/80 hover:text-white transition-colors"
                  dir="ltr"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="whatsapp" size={18} className="mt-0.5 text-accent" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="location" size={18} className="mt-0.5 text-accent" />
                <span className="text-white/80">{locationLabel}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year} {site.fullName}. {t.footer.rights}
          </p>
          <p className="text-xs text-white/50">{t.footer.descriptor}</p>
        </div>
      </Container>
    </footer>
  );
}

// Guard unused types/parameters
export type _FooterLocaleRef = Locale;
