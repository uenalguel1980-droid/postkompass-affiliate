import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

/**
 * Transparenzbox (Ebene 2 der Hinweislogik, Server Component).
 *
 * Erscheint oberhalb von Partnerlisten und am Anfang von Artikeln mit
 * Partnerverweisen. Wird vom Seiten-Template automatisch gerendert, sobald
 * Partner eingebunden sind — nicht manuell zu setzen (Vergessen ausgeschlossen).
 *
 * Bewusst gut lesbar (Standard-Textgröße, klarer Rahmen) — eine versteckte
 * oder verkleinerte Kennzeichnung wäre wettbewerbsrechtlich angreifbar.
 */
export function AffiliateDisclosure() {
  return (
    <aside
      role="note"
      aria-label="Transparenzhinweis zu Partnerlinks"
      className="rounded-xl border border-brand-200 bg-brand-50 p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-start gap-3">
        <Badge variant="ad" className="mt-0.5 shrink-0">
          Anzeige
        </Badge>
        <p className="min-w-0 flex-1 text-sm leading-relaxed text-slate-700">
          <span className="font-semibold text-brand-900">Transparenz:</span>{" "}
          Diese Seite enthält Partnerlinks. Wenn du über einen Partnerlink ein
          Angebot aufrufst oder abschließt, können wir eine Provision erhalten.
          Für dich entstehen dadurch keine zusätzlichen Kosten – und es
          beeinflusst nicht, wie wir Themen einordnen.{" "}
          <Link
            href="/affiliate-hinweis"
            className="font-medium text-brand-800 underline underline-offset-2 hover:text-brand-900"
          >
            Mehr dazu
          </Link>
        </p>
      </div>
    </aside>
  );
}
