import type { ReactElement } from "react";

/**
 * Eigene Inline-SVG-Icons — bewusst keine Icon-Library (keine Dependency,
 * kein zusätzliches JS). 24×24-Raster, Strichstärke 2, erben die Textfarbe
 * über currentColor.
 *
 * Die Namen der Kategorie-Icons entsprechen dem icon-Feld in
 * data/categories.ts: smartphone, wifi, zap, credit-card, calculator,
 * briefcase, shield, banknote.
 */
export type IconName =
  | "smartphone"
  | "wifi"
  | "zap"
  | "credit-card"
  | "calculator"
  | "briefcase"
  | "shield"
  | "banknote"
  | "menu"
  | "close"
  | "arrow-right"
  | "check"
  | "alert";

const paths: Record<IconName, ReactElement> = {
  smartphone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M12 18h.01" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <path d="M12 20h.01" />
    </>
  ),
  zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  "credit-card": (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </>
  ),
  shield: <path d="M12 22s8-3 8-10V6l-8-3-8 3v6c0 7 8 10 8 10z" />,
  banknote: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  "arrow-right": <path d="M5 12h14m-6-6 6 6-6 6" />,
  check: <path d="m5 13 4 4L19 7" />,
  alert: (
    <>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
};

/**
 * Sichere Zuordnung eines Icon-Namens aus der Datenschicht (dort als string
 * typisiert, z. B. category.icon) auf einen gültigen IconName — mit Fallback.
 */
export function toIconName(name: string, fallback: IconName = "check"): IconName {
  return name in paths ? (name as IconName) : fallback;
}

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
