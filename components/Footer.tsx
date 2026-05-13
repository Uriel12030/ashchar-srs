import Link from "next/link";
import { site, mailto, whatsappLink, telLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t hairline bg-ink">
      <div className="mx-auto max-w-container px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-display text-[15px] tracking-tightish text-bone"
            >
              ASHCHAR OPS
            </Link>
            <p className="mt-6 max-w-[40ch] text-[13px] font-light leading-relaxed text-graphite-100">
              Base operational support, logistics, transportation, and life
              support for U.S. Government, military, and prime contractor
              operations in Israel and the region.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-wider3 text-graphite-200">
              Sectors
            </div>
            <ul className="mt-4 space-y-2 text-[13px] text-graphite-100">
              <li>
                <Link href="/government" className="hover:text-bone">
                  Government & Defense
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="hover:text-bone">
                  Commercial Operations
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-bone">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-bone">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-wider3 text-graphite-200">
              Engage
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
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bone"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bone">
                  Contact form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 h-px divider-line md:mt-20" />

        <div className="mt-8 flex flex-col gap-4 text-[10px] uppercase tracking-wider3 text-graphite-200 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} {site.legalName}</span>
            <span>{site.location}</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono">
            <span>SAM {site.sam.status}</span>
            <span>UEI {site.sam.uei}</span>
            <span>NCAGE {site.sam.ncage}</span>
            <span>Israel-Based OCONUS Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
