/**
 * Inhaltsverzeichnis für Ratgeberartikel (Server Component).
 * Reine Anker-Navigation — kein Client-JS; sanftes Scrollen kommt aus
 * globals.css (scroll-behavior), die Ziel-Überschriften tragen scroll-mt.
 */
export interface TocItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Inhaltsverzeichnis"
      className="rounded-xl border border-slate-200 bg-slate-50 p-5"
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-900">
        Inhalt
      </p>
      <ol className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li key={item.id} className="flex gap-2 text-sm">
            <span aria-hidden="true" className="font-medium text-slate-400">
              {index + 1}.
            </span>
            <a
              href={`#${item.id}`}
              className="rounded-sm text-brand-700 transition-colors hover:text-brand-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
