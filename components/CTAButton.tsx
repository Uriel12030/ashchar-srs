import Link from "next/link";

type Variant = "primary" | "ghost" | "outline";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-bone text-ink hover:bg-bone-50 border border-bone",
  ghost:
    "bg-transparent text-bone hover:text-bone hover:bg-bone/[0.04] border border-bone/20 hover:border-bone/40",
  outline:
    "bg-transparent text-bone border border-bone/30 hover:border-bone hover:bg-bone/[0.06]",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: Props) {
  const className = `group inline-flex items-center justify-center gap-3 px-7 py-4 text-[12px] uppercase tracking-wider2 transition-all duration-500 ease-cinema ${variants[variant]}`;

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="block w-4 transition-transform duration-500 ease-cinema group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
