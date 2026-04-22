"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/data/site";
import { Icon } from "./Icons";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink("Hello, I would like to discuss a requirement.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className={`fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:bg-[#1fbe5a] hover:shadow-[0_12px_32px_rgba(37,211,102,0.45)] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Icon name="whatsapp" size={22} />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
