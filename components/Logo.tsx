import Link from "next/link";

export function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const wordColor = variant === "light" ? "text-white" : "text-navy";
  const subColor =
    variant === "light" ? "text-white/60" : "text-ink-muted";
  return (
    <Link
      href="/"
      aria-label="Ashchar SRS — Home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-navy font-display text-base font-bold"
        aria-hidden="true"
      >
        A
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-[17px] font-semibold tracking-tightish ${wordColor}`}
        >
          Ashchar SRS
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          Operational Solutions
        </span>
      </span>
    </Link>
  );
}
