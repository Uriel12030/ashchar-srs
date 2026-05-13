import Link from "next/link";
import { site, mailto, whatsappLink, telLink } from "@/data/site";
import { dict, localePath, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = dict[locale];

  return (
    <footer className="border-t hairline bg-ink">
      <div className="mx-auto max-w-container px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href={localePath(locale, "/")}
              className="font-display text-[15px] tracking-tightish text-bone"
            >
              {t.common.brand}
            </Link>
            <p className="mt-6 max-w-[40ch] text-[13px] font-light leading-relaxed text-graphite-100">
              {t.footer.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-wider3 text-graphite-200">
              {t.common.sectorsHeading}
            </div>
            <ul className="mt-4 space-y-2 text-[13px] text-graphite-100">
              <li>
                <Link
                  href={localePath(locale, "/government")}
                  className="hover:text-bone"
                >
                  {t.footer.governmentDefense}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(locale, "/commercial")}
                  className="hover:text-bone"
                >
                  {t.footer.commercialOps}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(locale, "/capabilities")}
                  className="hover:text-bone"
                >
                  {t.footer.capabilitiesLink}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(locale, "/projects")}
                  className="hover:text-bone"
                >
                  {t.footer.projectsLink}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-wider3 text-graphite-200">
              {t.common.engageHeading}
            </div>
            <ul className="mt-4 space-y-2 text-[13px] text-graphite-100">
              <li>
                <a href={telLink()} className="hover:text-bone">
                  {site.contactName} · {site.phone}
                </a>
              </li>
              <li>
                <a href={mailto()} className="hover:text-bone">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bone"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href={localePath(locale, "/contact")}
                  className="hover:text-bone"
                >
                  {t.footer.contactForm}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 h-px divider-line md:mt-20" />

        <div className="mt-8 flex flex-col gap-4 text-[10px] uppercase tracking-wider3 text-graphite-200 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>
              © {new Date().getFullYear()} {t.footer.legal}
            </span>
            <span>{t.common.location}</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono">
            <span>{t.trust.samActive}</span>
            <span>UEI {site.sam.uei}</span>
            <span>NCAGE {site.sam.ncage}</span>
            <span>{t.trust.oconus}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
