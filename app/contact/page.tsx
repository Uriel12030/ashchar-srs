import type { Metadata } from "next";
import { site, mailto, whatsappLink, telLink } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CinemaImage } from "@/components/CinemaImage";
import { heroImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Engage Ashchar for operational infrastructure and logistics support in Israel.",
};

const channels = [
  { label: "Direct", value: `${site.contactName} · ${site.phone}`, href: telLink() },
  { label: "Email", value: site.email, href: mailto() },
  { label: "WhatsApp", value: site.phone, href: whatsappLink() },
];

export default function ContactPage() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <CinemaImage
        src={heroImages.closer}
        alt=""
        className="absolute inset-0"
        imgClassName="opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
      <div className="pointer-events-none absolute inset-0 grain" />

      <div className="relative z-10 mx-auto max-w-container px-6 pb-32 pt-40 md:px-10 md:pb-40 md:pt-52">
        <Reveal>
          <div className="flex items-center gap-5 text-[10px] uppercase tracking-wider3 text-graphite-200">
            <span className="block h-px w-14 bg-olive-light" />
            <span>Contact</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-10 max-w-[14ch] font-display text-display-lg font-light text-bone">
            Brief us on the requirement.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-[44ch] text-base font-light leading-relaxed text-graphite-100 md:text-lg">
            We respond within 24 hours.
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 border-y hairline md:mt-32 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={`group block px-6 py-14 transition-colors duration-700 hover:bg-graphite-900/50 md:px-10 md:py-20 ${
                  i > 0 ? "border-t hairline md:border-t-0 md:border-l" : ""
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-wider3 text-olive-light">
                  {c.label}
                </div>
                <div className="mt-8 font-display text-2xl font-light tracking-tightish text-bone md:text-3xl">
                  {c.value}
                </div>
                <div className="mt-12 flex items-center gap-4 text-[11px] uppercase tracking-wider2 text-graphite-100 group-hover:text-bone">
                  <span className="block h-px w-10 bg-graphite-200 transition-all duration-700 ease-cinema group-hover:w-16 group-hover:bg-bone" />
                  <span>Reach out</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 text-[13px] font-light text-graphite-100 md:mt-28 md:grid-cols-3">
          <div>
            <div className="text-[10px] uppercase tracking-wider3 text-graphite-200">
              Location
            </div>
            <div className="mt-4">{site.location}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider3 text-graphite-200">
              Registration
            </div>
            <div className="mt-4 space-y-1">
              <div>SAM {site.sam.status}</div>
              <div>UEI {site.sam.uei}</div>
              <div>NCAGE {site.sam.ncage}</div>
              <div>Israel-Based OCONUS Support</div>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider3 text-graphite-200">
              Operations
            </div>
            <div className="mt-4">24/7 coordination</div>
          </div>
        </div>
      </div>
    </section>
  );
}
