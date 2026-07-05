import type { OfferTile as OfferTileData, Partner } from "@/types";
import {
  buildRelAttribute,
  getPartnerLink,
  isPlaceholderPartner,
} from "@/lib/affiliate";
import { Badge } from "@/components/ui/Badge";
import { Icon, toIconName } from "@/components/ui/Icon";

/**
 * Angebots-/Vergleichs-Kachel (Server Component) — handlungsorientierter
 * Einstiegspunkt nach Nutzerintention, z. B. "SIM-only Tarife prüfen".
 *
 * Der Partner wird auf Seitenebene über getPartnerById(tile.partnerId)
 * aufgelöst und als Prop übergeben (kein /data-Import hier). Link-Logik
 * kommt ausschließlich aus lib/affiliate.ts.
 *
 * Zustände:
 * - Aktiver Partner: gesamte Kachel als <a> mit rel="sponsored nofollow
 *   noopener" und target="_blank".
 * - Sonst (v1: immer): nicht-interaktives <div> mit "Partner folgt in
 *   Kürze" — kein <a href="#">.
 *
 * Design bewusst ruhig (Markenfarben, keine Preise/Prozente/Dringlichkeit);
 * jede Kachel trägt die "Anzeige"-Badge.
 */
export function OfferTile({
  tile,
  partner,
  fallbackIcon = "check",
}: {
  tile: OfferTileData;
  partner: Partner | null;
  fallbackIcon?: string;
}) {
  const isActive = partner !== null && !isPlaceholderPartner(partner);

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex rounded-lg bg-brand-100 p-2.5 text-brand-800">
          <Icon name={toIconName(tile.icon ?? fallbackIcon)} className="h-5 w-5" />
        </span>
        <Badge variant="ad" className="shrink-0">
          Anzeige
        </Badge>
      </div>
      <h3 className="mt-4 text-base font-semibold text-brand-900">{tile.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
        {tile.description}
      </p>
    </>
  );

  if (isActive && partner) {
    return (
      <a
        href={getPartnerLink(partner)}
        target="_blank"
        rel={buildRelAttribute()}
        className="group flex h-full flex-col rounded-2xl border border-brand-200 bg-white p-5 shadow-sm transition-colors hover:border-brand-400 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
      >
        {inner}
        <span className="mt-4 inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-accent-700 group-hover:text-accent-800">
          Zum Partner
          <Icon name="arrow-right" className="h-4 w-4" />
        </span>
      </a>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-200 bg-white p-5 shadow-sm">
      {inner}
      <span className="mt-4 inline-flex w-fit items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
        Partner folgt in Kürze
      </span>
    </div>
  );
}
