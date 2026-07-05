import Link from "next/link";
import type { Article } from "@/types";

/**
 * Ratgeber-Teaser-Karte (Server Component). Wird auf Kategorie-Detailseiten
 * und in der Ratgeber-Übersicht (Schritt 6) verwendet.
 * Datum wird zur Build-Zeit formatiert (statischer Export).
 */
export function ArticleCard({ article }: { article: Article }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/ratgeber/${article.slug}`}
      className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-brand-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
    >
      <p className="text-xs font-medium text-slate-500">
        <time dateTime={article.publishedAt}>{formattedDate}</time>
        {" · "}
        {article.readingMinutes} Min. Lesezeit
      </p>
      <h3 className="mt-2 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {article.metaDescription}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-brand-700 group-hover:text-brand-900">
        Weiterlesen
      </span>
    </Link>
  );
}
