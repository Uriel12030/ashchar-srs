"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Icon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-navy"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Logo variant="light" />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
          <Button href="/contact?type=quote" variant="primary">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 transition"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy">
          <Container className="py-6 space-y-1">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <Button href="/contact" variant="ghost" className="w-full">
                Contact Us
              </Button>
              <Button
                href="/contact?type=quote"
                variant="primary"
                className="w-full"
              >
                Request a Quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
