import Link from "next/link";
import type { SiteConfig } from "@/types";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";

/**
 * Seitenfuß (Server Component). Alle Inhalte kommen aus site.ts (als Prop):
 * - Affiliate-Kurzhinweis (Ebene 1 der Hinweislogik) auf jeder Seite
 * - Beratungs-/Haftungsausschluss aus site.legalNotice (nicht neu getextet)
 * - zwei Linkgruppen: Entdecken + Rechtliches
 */
export function Footer({ site }: { site: SiteConfig }) {
  const linkStyles =
    "text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 rounded-sm";

  return (
    <footer className="bg-brand-950 text-slate-300">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marke + Kurzbeschreibung */}
          <div>
            <Wordmark className="text-2xl" inverted />
            <p className="mt-2 text-sm font-medium text-slate-300">{site.claim}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {site.defaultDescription}
            </p>
          </div>

          {/* Linkgruppe 1: Entdecken */}
          <nav aria-label="Footer-Navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Entdecken
            </h2>
            <ul className="mt-4 space-y-2">
              {site.footerNavLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkStyles}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Linkgruppe 2: Rechtliches */}
          <nav aria-label="Rechtliche Links">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Rechtliches
            </h2>
            <ul className="mt-4 space-y-2">
              {site.footerLegalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkStyles}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Affiliate-Kurzhinweis (Ebene 1) + rechtlicher Grundhinweis */}
        <div className="mt-10 space-y-3 border-t border-brand-800 pt-6">
          <p className="text-sm text-slate-400">
            {site.affiliateShortNotice}{" "}
            <Link
              href="/affiliate-hinweis"
              className="text-slate-300 underline underline-offset-2 hover:text-white"
            >
              Mehr dazu
            </Link>
          </p>
          <p className="text-sm leading-relaxed text-slate-400">{site.legalNotice}</p>
          <p className="pt-2 text-sm text-slate-500">
            © {new Date().getFullYear()} {site.brandName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
