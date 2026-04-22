import Link from "next/link";
import { Service } from "@/data/services";
import { Icon } from "./Icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex flex-col rounded-xl border border-navy/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-cardHover"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-accent group-hover:bg-navy-700 transition-colors">
        <Icon name={service.icon} size={24} />
      </div>
      <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-navy">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {service.shortDescription}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-accent-dark transition-colors">
        Learn more
        <Icon
          name="arrow-right"
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
