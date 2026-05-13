import { getTrustSignals } from "@/data/content";
import { dict, type Locale } from "@/lib/i18n";

/**
 * Institutional credibility strip. Sits directly under the hero so the
 * registration data + posture statements land before any narrative.
 *
 * Six short statements: SAM Registered, Active UEI, Active NCAGE,
 * Israel-Based Operational Support, Government & Defense Support
 * Operations, Rapid Response Logistics & Infrastructure. Rendered on
 * a hairline grid (3 cols × 2 rows on desktop, 1 col on mobile) so it
 * reads as a clean institutional capability statement, not a marketing
 * badge row.
 */
export function TrustRow({ locale }: { locale: Locale }) {
  const signals = getTrustSignals(locale);
  const eyebrow =
    dict[locale].htmlLang === "he"
      ? "סטטוס מבצעי ורישום"
      : "Operational Posture & Registration";

  return (
    <section className="relative bg-ink">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <div className="border-y hairline py-8 md:py-10">
          <div className="text-[10px] uppercase tracking-wider3 text-graphite-200">
            {eyebrow}
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 text-[11px] uppercase tracking-wider3 text-graphite-100 sm:grid-cols-2 md:mt-8 md:grid-cols-3 md:text-[12px]">
            {signals.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 font-mono before:block before:h-px before:w-4 before:bg-olive-light/70"
              >
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
