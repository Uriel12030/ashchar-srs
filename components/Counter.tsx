"use client";

import { useEffect, useRef, useState } from "react";

type Parsed = {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
};

function parseMetric(value: string): Parsed {
  const m = value.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { prefix: "", target: 0, suffix: value, decimals: 0 };
  const numStr = m[2];
  const decimals = numStr.includes(".")
    ? numStr.split(".")[1]?.length ?? 0
    : 0;
  return {
    prefix: m[1] ?? "",
    target: parseFloat(numStr),
    suffix: m[3] ?? "",
    decimals,
  };
}

function format(n: number, decimals: number): string {
  if (decimals > 0) return n.toFixed(decimals);
  return Math.round(n).toString();
}

export function Counter({
  value,
  duration = 1400,
  threshold = 0.35,
}: {
  value: string;
  duration?: number;
  threshold?: number;
}) {
  const parsed = parseMetric(value);
  const [display, setDisplay] = useState<number>(parsed.target);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(parsed.target);
      return;
    }

    // Reset to 0 on mount so animation can run on intersection.
    setDisplay(0);

    let raf = 0;
    let started = false;

    const animate = () => {
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        // easeOutQuart
        const eased = 1 - Math.pow(1 - p, 4);
        setDisplay(parsed.target * eased);
        if (p < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setDisplay(parsed.target);
        }
      };
      raf = requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === "undefined") {
      animate();
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            animate();
            io.disconnect();
          }
        }
      },
      { threshold },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [parsed.target, duration, threshold]);

  return (
    <span ref={ref} className="tabular-nums">
      {parsed.prefix}
      {format(display, parsed.decimals)}
      {parsed.suffix}
    </span>
  );
}
