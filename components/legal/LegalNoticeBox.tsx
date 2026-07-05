import { Icon } from "@/components/ui/Icon";

type LegalNoticeVariant = "versicherung" | "kredit" | "default";

/**
 * Rechtliche Hinweisbox für sensible Kategorien (Ebene 3, Server Component).
 *
 * Wird vom Kategorie-Template automatisch gerendert, wenn
 * category.sensitive === true (v1: versicherungen, kredit) — nicht manuell
 * zu setzen. Bewusst NICHT einklappbar und deutlich abgesetzt.
 *
 * Props:
 * - variant: aus category.sensitiveVariant ("versicherung" | "kredit"),
 *   sonst "default".
 * - notice: der anzuzeigende Text. Die Seite übergibt
 *   category.sensitiveNotice ?? site.legalNotice — die Komponente
 *   importiert nicht selbst aus /data. Beide Quelltexte stellen klar:
 *   keine individuelle Finanz-, Versicherungs-, Kredit-, Rechts- oder
 *   Steuerberatung; Inhalte dienen allgemeiner Orientierung; Prüfung,
 *   Beratung und Abschluss erfolgen ausschließlich beim jeweiligen
 *   Anbieter oder zugelassenen Partner.
 *
 * PFLICHTANGABEN KREDITWERBUNG (§ 17 PAngV) — VORMERKUNG:
 * Sobald echte Kreditpartner mit konkreten Konditionen beworben werden,
 * gehören die gesetzlichen Pflichtangaben (u. a. repräsentatives Beispiel
 * mit effektivem Jahreszins) in unmittelbare Nähe der Werbung. Diese werden
 * vom jeweiligen Anbieter/Netzwerk bereitgestellt und dann hier bzw. an der
 * PartnerCard ergänzt. In v1 (nur Platzhalter, keine Konditionen, keine
 * Links) fällt keine solche Werbung an — deshalb bewusst noch kein
 * sichtbarer §-17-Block.
 */
const headings: Record<LegalNoticeVariant, string> = {
  versicherung: "Wichtiger Hinweis zu Versicherungen",
  kredit: "Wichtiger Hinweis zu Krediten",
  default: "Wichtiger Hinweis",
};

export function LegalNoticeBox({
  variant = "default",
  notice,
}: {
  variant?: LegalNoticeVariant;
  notice: string;
}) {
  return (
    <aside
      role="note"
      aria-label={headings[variant]}
      className="rounded-xl border-l-4 border-brand-700 bg-slate-50 p-5"
    >
      <div className="flex items-center gap-2.5">
        <Icon name="shield" className="h-5 w-5 shrink-0 text-brand-700" />
        <h2 className="text-base font-semibold text-brand-900">
          {headings[variant]}
        </h2>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{notice}</p>
    </aside>
  );
}
