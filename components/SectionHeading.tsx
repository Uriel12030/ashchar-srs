import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const titleColor = light ? "text-white" : "text-navy";
  const descColor = light ? "text-white/70" : "text-ink-muted";
  const eyebrowColor = light ? "text-accent" : "text-accent-dark";
  return (
    <div className={`${alignCls} max-w-3xl`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.1] tracking-tighter2 ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
