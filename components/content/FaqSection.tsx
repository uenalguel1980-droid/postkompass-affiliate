import type { FaqItem } from "@/types";

/**
 * FAQ-Block (Server Component) — native <details>/<summary>-Elemente:
 * auf-/zuklappbar ohne Client-JS, von Haus aus tastatur- und
 * screenreader-tauglich. Bewusst KEINE Accordion-Client-Komponente.
 *
 * Das FAQPage-JSON-LD wird auf Seitenebene aus denselben Daten erzeugt —
 * sichtbarer Inhalt und strukturierte Daten sind damit immer identisch.
 */
export function FaqSection({
  items,
  id = "haeufige-fragen",
}: {
  items: FaqItem[];
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight text-brand-900">
        Häufige Fragen
      </h2>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-slate-200 bg-white"
          >
            <summary className="cursor-pointer rounded-xl px-5 py-4 text-base font-medium text-brand-900 transition-colors hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800">
              {item.question}
            </summary>
            <p className="px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
