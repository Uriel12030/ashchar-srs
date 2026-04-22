import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "light",
  className = "",
  height = 36,
  href = "/",
}: {
  variant?: "light" | "dark";
  className?: string;
  height?: number;
  href?: string;
}) {
  const width = Math.round(height * 2.253);
  const src =
    variant === "light"
      ? "/brand/ashchar-logo-light.svg"
      : "/brand/ashchar-logo.svg";

  return (
    <Link
      href={href}
      aria-label="Ashchar — Home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={src}
        alt="Ashchar"
        width={width}
        height={height}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}
