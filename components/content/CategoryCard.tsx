import Link from "next/link";
import type { Category } from "@/types";
import { Icon, toIconName } from "@/components/ui/Icon";

/**
 * Kategorie-Kachel für das Übersichts-Grid (Server Component).
 * Die gesamte Karte ist ein Link auf die Detailseite — mit sichtbarem
 * Fokus-Zustand und klarem Linknamen (Kategorietitel).
 */
export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/kategorien/${category.slug}`}
      className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-brand-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
    >
      <span className="inline-flex rounded-lg bg-brand-100 p-2.5 text-brand-800">
        <Icon name={toIconName(category.icon)} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-brand-900">{category.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{category.teaser}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 group-hover:text-brand-900">
        Mehr erfahren
        <Icon name="arrow-right" className="h-4 w-4" />
      </span>
    </Link>
  );
}
