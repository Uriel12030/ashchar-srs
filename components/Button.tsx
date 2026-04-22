import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-tightish transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-navy hover:bg-accent-hover shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-navy border border-navy/15 hover:border-navy/30 hover:bg-navy/5",
  ghost:
    "bg-transparent text-white/90 border border-white/25 hover:border-white/60 hover:bg-white/5",
  dark: "bg-navy text-white hover:bg-navy-700",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type,
  external,
  ariaLabel,
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  ariaLabel?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
