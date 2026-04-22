import { ReactElement, SVGProps } from "react";

export type IconName =
  | "bed"
  | "building"
  | "crane"
  | "container"
  | "bolt"
  | "truck"
  | "shield"
  | "tools"
  | "document"
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "whatsapp"
  | "location"
  | "clock"
  | "globe";

const paths: Record<IconName, ReactElement> = {
  bed: (
    <>
      <path d="M3 7v10" />
      <path d="M3 12h18v5" />
      <path d="M21 12V9a2 2 0 0 0-2-2h-9v5" />
      <circle cx="7" cy="11" r="2" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </>
  ),
  crane: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21V7l13-3v3" />
      <path d="M6 7h13" />
      <path d="M10 21v-6h4v6" />
      <path d="M19 7v4" />
      <path d="M19 11l-2 3h4l-2-3" />
    </>
  ),
  container: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="1" />
      <path d="M7 7v12M11 7v12M15 7v12M19 7v12" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a4 4 0 0 1 5 5L16 15l3 3-2 2-3-3-3.7 3.7a4 4 0 0 1-5-5L9 12 6 9l2-2 3 3 3.7-3.7z" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h8l4 4v14H7z" />
      <path d="M15 3v4h4" />
      <path d="M10 12h6M10 16h6M10 8h2" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7M8 7h9v9" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 5 5 9-11" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20 12a8 8 0 1 1-3.2-6.4L20 4l-1.4 3.1A8 8 0 0 1 20 12z" />
      <path d="M9 9c0 4 3 7 7 7l1.5-2-2.5-1-1 1a5 5 0 0 1-3-3l1-1-1-2.5L9 9z" />
    </>
  ),
  location: (
    <>
      <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
};

export function Icon({
  name,
  className = "",
  size = 24,
  ...rest
}: { name: IconName; size?: number } & Omit<
  SVGProps<SVGSVGElement>,
  "name"
>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
