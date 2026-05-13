"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  dict,
  localePath,
  otherLocale,
  swapLocalePath,
  type Locale,
} from "@/lib/i18n";

export function Nav({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: localePath(locale, "/capabilities"), label: t.nav.capabilities },
    { href: localePath(locale, "/government"), label: t.nav.government },
    { href: localePath(locale, "/commercial"), label: t.nav.commercial },
    { href: localePath(locale, "/projects"), label: t.nav.projects },
    { href: localePath(locale, "/contact"), label: t.nav.contact },
  ];

  const other = otherLocale(locale);
  const swap = swapLocalePath(locale, pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinema ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-xl border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6 md:h-20 md:px-10">
        <Link
          href={localePath(locale, "/")}
          className="font-display text-[14px] font-medium tracking-wider2 text-bone"
        >
          {t.common.brand}
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-[12px] uppercase tracking-wider2 text-graphite-100">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors duration-300 hover:text-bone"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href={swap}
            hrefLang={other}
            className="font-mono text-[10px] uppercase tracking-wider3 text-graphite-100 transition-colors hover:text-bone"
            aria-label={`Switch to ${t.common.languageSwitchTo}`}
          >
            {t.common.languageSwitchTo}
          </Link>
          <Link
            href={localePath(locale, "/contact")}
            className="font-mono text-[10px] uppercase tracking-wider3 text-bone"
          >
            {t.common.navContact}
          </Link>
        </div>

        <button
          aria-label={t.common.menu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center"
        >
          <span className="relative block h-[1px] w-6 bg-bone">
            <span
              className={`absolute left-0 block h-[1px] w-6 bg-bone transition-transform duration-500 ease-cinema ${
                open ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1px] w-6 bg-bone transition-transform duration-500 ease-cinema ${
                open ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-16 bg-ink/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-1 px-6 py-10">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-3xl tracking-tightish text-bone"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * links.length,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 border-t hairline pt-6"
              >
                <Link
                  href={swap}
                  hrefLang={other}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-mono text-[11px] uppercase tracking-wider3 text-graphite-100"
                >
                  {t.common.languageSwitchTo}
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
