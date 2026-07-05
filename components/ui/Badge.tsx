import type { ReactNode } from "react";

type BadgeVariant = "ad" | "neutral" | "brand";

/**
 * Label-Badge.
 *
 * Variante "ad" (Werbekennzeichnung "Anzeige"):
 * Bewusst maximal kontrastreich (Weiß auf slate-900, ≈ 17.9:1) und in
 * Versalien — die Kennzeichnung von Partnerlinks muss deutlich erkennbar
 * sein (wettbewerbsrechtliche Anforderung, PROJEKTPLAN.md Abschnitt 7).
 * Diese Variante nie verkleinern oder ausgrauen.
 */
const variantStyles: Record<BadgeVariant, string> = {
  ad: "bg-slate-900 text-white uppercase tracking-wider",
  neutral: "bg-slate-100 text-slate-700",
  brand: "bg-brand-100 text-brand-800",
};

export function Badge({
  children,
  variant = "neutral",
  className = "",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
