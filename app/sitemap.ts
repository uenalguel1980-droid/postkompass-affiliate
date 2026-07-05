import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";

/*
 * Sitemap — wird beim statischen Export als out/sitemap.xml erzeugt.
 *
 * Enthält NUR öffentliche, indexierbare Seiten:
 * - /impressum/ und /datenschutz/ sind bewusst AUSGESCHLOSSEN, solange sie
 *   noindex-Platzhalter sind (eine noindex-URL in der Sitemap wäre ein
 *   Widerspruchssignal und erzeugt Fehler in der Search Console).
 *   Aufnehmen erst, wenn finale Rechtstexte eingepflegt sind und die
 *   noindex-Entscheidung überprüft/entfernt wurde.
 *
 * lastModified: nur wo echte Pflege-Daten existieren (article.updatedAt).
 * Kategorien und statische Seiten haben keine Pflege-Daten — dort wird
 * lastModified bewusst weggelassen statt ein Datum zu faken.
 *
 * Alle URLs mit Trailing Slash — konsistent zu trailingSlash: true und
 * den Canonicals.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/kategorien/",
    "/ratgeber/",
    "/vertrauen/",
    "/affiliate-hinweis/",
    "/kontakt/",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${site.baseUrl}${path}`,
    })),
    ...categories.map((category) => ({
      url: `${site.baseUrl}/kategorien/${category.slug}/`,
    })),
    ...articles.map((article) => ({
      url: `${site.baseUrl}/ratgeber/${article.slug}/`,
      lastModified: article.updatedAt,
    })),
  ];
}
