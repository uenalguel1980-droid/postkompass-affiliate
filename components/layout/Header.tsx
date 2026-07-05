import Link from "next/link";
import type { NavItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { MobileNav } from "@/components/layout/MobileNav";

/**
 * Seitenkopf (Server Component). Navigation kommt als Prop aus site.ts
 * (via app/layout.tsx) — keine Datenimporte in Komponenten.
 *
 * CTA "Angebote checken" verlinkt bewusst auf /kategorien; die Seite
 * entsteht in Schritt 5 (bis dahin 404 — akzeptierte Übergangsphase).
 */
const CTA = { label: "Angebote checken", href: "/kategorien" };

export function Header({ navigation }: { navigation: NavItem[] }) {
  return (
    <header className="relative border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
          aria-label="Tarvyo24 – zur Startseite"
        >
          <Wordmark className="text-2xl" />
        </Link>

        {/* Desktop-Navigation */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={CTA.href}>{CTA.label}</Button>
        </div>

        {/* Mobiles Burger-Menü (einzige Client-Komponente im Layout) */}
        <MobileNav navigation={navigation} ctaLabel={CTA.label} ctaHref={CTA.href} />
      </Container>
    </header>
  );
}
