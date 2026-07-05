import type { Partner } from "@/types";
import {
  buildRelAttribute,
  getPartnerLink,
  isPlaceholderPartner,
} from "@/lib/affiliate";
import { Badge } from "@/components/ui/Badge";

/**
 * Ausgabe-Element für Partnerlinks (Server Component).
 *
 * Einzige Stelle, an der Partner-URLs ins Markup gelangen — href und rel
 * kommen ausschließlich aus lib/affiliate.ts, nie als Hardcode.
 *
 * Zwei Zustände:
 * - Aktiver Partner (status "active" + echte URL): <a> mit
 *   rel="sponsored nofollow noopener" und target="_blank".
 * - Platzhalter (v1: alle Partner): nicht-interaktives <span> —
 *   bewusst KEIN <a href="#">, damit weder Nutzer noch Screenreader
 *   einen Link angekündigt bekommen, der nirgendwohin führt.
 *
 * Die "Anzeige"-Kennzeichnung (Badge, kontrastreich, nicht rein farblich)
 * ist in beiden Zuständen sichtbar. showBadge={false} nur setzen, wenn der
 * umgebende Kontext (z. B. PartnerCard) bereits deutlich gekennzeichnet ist —
 * eine sichtbare Kennzeichnung am Werbeplatz ist Pflicht.
 */
export function PartnerButton({
  partner,
  showBadge = true,
}: {
  partner: Partner;
  showBadge?: boolean;
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {showBadge && <Badge variant="ad">Anzeige</Badge>}
      {isPlaceholderPartner(partner) ? (
        <span
          className={`${baseStyles} cursor-default border border-dashed border-slate-300 bg-slate-50 text-slate-500`}
        >
          Partner folgt in Kürze
        </span>
      ) : (
        <a
          href={getPartnerLink(partner)}
          target="_blank"
          rel={buildRelAttribute()}
          className={`${baseStyles} bg-accent-600 text-white transition-colors hover:bg-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700`}
        >
          Zum Angebot
        </a>
      )}
    </div>
  );
}
