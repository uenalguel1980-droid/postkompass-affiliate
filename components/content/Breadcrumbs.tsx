import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  /** Ohne href = aktuelle Seite (letztes Element). */
  href?: string;
}

/**
 * Sichtbare Breadcrumb-Navigation + BreadcrumbList-JSON-LD (Server Component).
 * baseUrl (aus site.ts, als Prop) wird nur für die absoluten URLs im
 * strukturierten Datensatz gebraucht. JSON-LD enthält ausschließlich
 * eigene, statische Daten — kein Injection-Risiko.
 */
export function Breadcrumbs({
  items,
  baseUrl,
}: {
  items: BreadcrumbItem[];
  baseUrl: string;
}) {
  // Trailing Slash erzwingen — konsistent zu trailingSlash: true und den Canonicals.
  const toAbsoluteUrl = (href: string) => {
    const url = `${baseUrl}${href}`;
    return url.endsWith("/") ? url : `${url}/`;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: toAbsoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <span aria-hidden="true" className="text-slate-400">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="rounded-sm transition-colors hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-brand-900">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
