"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Apply documentary color grading (desaturate + lower contrast). Default true. */
  documentary?: boolean;
  /** Hint Next/Image about layout sizing (passed to sizes attribute). */
  sizes?: string;
};

/**
 * Quiet fade-in image with documentary grading. Uses next/image for
 * automatic optimization (WebP/AVIF, responsive sizes) — files in /public
 * are served at the optimal resolution per device.
 */
export function CinemaImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  documentary = true,
  sizes = "100vw",
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-graphite-900 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-[1100ms] ease-cinema ${
          loaded ? "opacity-100" : "opacity-0"
        } ${documentary ? "doc-treatment" : ""} ${imgClassName}`}
      />
    </div>
  );
}
