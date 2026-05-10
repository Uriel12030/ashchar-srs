import { trustSignals } from "@/data/content";

/**
 * Compact credibility strip — registration + posture in a single hairline row.
 * Sits directly under the hero so trust signals land before any narrative.
 */
export function TrustRow() {
  return (
    <section className="relative bg-ink">
      <div className="mx-auto max-w-container border-y hairline px-6 md:px-10">
        <ul className="grid grid-cols-2 gap-y-4 py-5 text-[10px] uppercase tracking-wider3 text-graphite-100 md:grid-cols-4 md:py-4 md:text-[11px]">
          {trustSignals.map((s, i) => (
            <li
              key={s}
              className={`flex items-center gap-3 font-mono ${
                i > 0 ? "md:before:block md:before:h-px md:before:w-6 md:before:bg-graphite-500" : ""
              }`}
            >
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
