"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeConfig, type Locale } from "@/lib/i18n";

function otherLocalePath(pathname: string, current: Locale): string {
  // `/he/...` ↔ `/...`
  const cleaned = pathname.replace(/\/+$/, "") || "/";
  if (current === "he") {
    if (cleaned === "/he") return "/";
    if (cleaned.startsWith("/he/")) return cleaned.slice(3);
    return "/";
  }
  if (cleaned === "/") return "/he";
  return `/he${cleaned}`;
}

export function LanguageSwitcher({
  current,
  tone = "light",
}: {
  current: Locale;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname() ?? "/";
  const target: Locale = current === "en" ? "he" : "en";
  const href = otherLocalePath(pathname, current);
  const label = localeConfig[target].shortCode;

  const colorClasses =
    tone === "light"
      ? "border-white/20 text-white/75 hover:border-white/50 hover:text-white"
      : "border-navy/20 text-navy/75 hover:border-navy/60 hover:text-navy";

  return (
    <Link
      href={href}
      aria-label={`Switch to ${localeConfig[target].name}`}
      className={`inline-flex h-8 items-center justify-center rounded-md border px-2.5 font-mono text-[11px] tracking-[0.18em] transition ${colorClasses}`}
      prefetch={false}
    >
      {label}
    </Link>
  );
}
