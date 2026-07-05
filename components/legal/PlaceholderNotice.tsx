import { Icon } from "@/components/ui/Icon";

/**
 * Deutlich sichtbarer Entwurfs-/Platzhalter-Banner für Rechtsseiten
 * (Server Component). Kennzeichnung über Icon + Überschrift + Text,
 * nicht nur farblich.
 *
 * ENTFERNEN, sobald der finale, geprüfte Rechtstext eingepflegt ist —
 * zusammen mit dem noindex der jeweiligen Seite (dort dokumentiert).
 * Solange diese Komponente auf /impressum oder /datenschutz sichtbar ist,
 * gilt: HARTER GO-LIVE-BLOCKER (siehe PROJEKTPLAN.md).
 */
export function PlaceholderNotice() {
  return (
    <aside
      role="note"
      aria-label="Hinweis: Diese Seite ist ein Platzhalter"
      className="rounded-xl border-2 border-accent-400 bg-accent-50 p-5"
    >
      <div className="flex items-center gap-2.5">
        <Icon name="alert" className="h-5 w-5 shrink-0 text-accent-700" />
        <h2 className="text-base font-bold text-accent-900">
          Entwurf – noch kein finaler Rechtstext
        </h2>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        Diese Seite ist eine Struktur-Vorlage. Die endgültigen Angaben und
        Texte müssen vor der Veröffentlichung der Webseite ergänzt und
        rechtlich geprüft werden (z. B. über einen Generator oder eine
        anwaltliche Prüfung). Einträge in eckigen Klammern sind Platzhalter.
      </p>
    </aside>
  );
}
