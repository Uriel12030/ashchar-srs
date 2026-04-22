import { ReactNode } from "react";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 80% 0%, rgba(200,164,86,0.15), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <Container className="relative pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.08] tracking-tighter2">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
