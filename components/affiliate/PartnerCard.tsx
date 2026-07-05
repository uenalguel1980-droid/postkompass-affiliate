import type { Partner } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { PartnerButton } from "@/components/affiliate/PartnerButton";

/**
 * Partner-Darstellung als Karte (Server Component).
 *
 * Erhält den Partner als Prop (kein /data-Import). Die "Anzeige"-Badge
 * sitzt deutlich sichtbar oben rechts an der Karte — der PartnerButton
 * blendet seine eigene Badge deshalb aus (eine klare Kennzeichnung pro
 * Werbeplatz, keine doppelte).
 *
 * Bewusst keine Bewertungen, Rankings oder Superlative — nur Name,
 * sachliche Beschreibung und Merkmale aus der Datenpflege.
 */
export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-brand-900">{partner.name}</h3>
        <Badge variant="ad" className="shrink-0">
          Anzeige
        </Badge>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {partner.description}
      </p>

      <ul className="mt-4 space-y-2">
        {partner.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1" />
      <PartnerButton partner={partner} showBadge={false} />
    </Card>
  );
}
