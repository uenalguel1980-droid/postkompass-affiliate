import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wordmark } from "@/components/ui/Wordmark";
import { CategoryCard } from "@/components/content/CategoryCard";
import { ArticleCard } from "@/components/content/ArticleCard";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

/*
 * Startseite (Schritt 7): Hero → Vergleichsbereiche (8 Kategorien) →
 * Transparenz → Ratgeber-Preview → Abschluss-CTA.
 *
 * Die Kategorie-Kacheln sind INTERNE Links (keine Werbung) und tragen
 * bewusst KEINE "Anzeige"-Badge — Werbeplätze (OfferTiles, PartnerCards)
 * leben auf den Kategorieseiten mit vollständiger Hinweislogik.
 */
export default function HomePage() {
  const latestArticles = [...articles]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="flex flex-col items-center py-16 text-center sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Tarife · Angebote · Verträge
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
            Erst checken. Dann entscheiden.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            <Wordmark className="text-lg" /> hilft dir, Tarife, Angebote und
            Verträge verständlich zu prüfen, typische Kostenfallen zu erkennen
            und passende Vergleichsmöglichkeiten aufzurufen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/kategorien">
              Angebote checken
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
            <Button href="/ratgeber" variant="ghost">
              Ratgeber lesen
            </Button>
          </div>
        </Container>
      </section>

      {/* Vergleichsbereiche */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Vergleichsbereiche"
            title="Was möchtest du checken?"
            subtitle="Acht Themen, ein Prinzip: erst verstehen, worauf es ankommt – dann vergleichen."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* Vertrauen / Transparenz */}
      <section className="bg-brand-50">
        <Container className="py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
              Transparent statt versteckt
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {site.affiliateShortNotice} Jede Werbung ist bei uns klar
              gekennzeichnet.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {site.legalNotice}
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/vertrauen" variant="secondary">
                Wie wir arbeiten
              </Button>
              <Button href="/affiliate-hinweis" variant="ghost">
                Zum Affiliate-Hinweis
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Ratgeber-Preview */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Ratgeber"
            title="Verstehen, bevor du unterschreibst"
            subtitle="Checklisten, Kostenfallen und häufige Fragen – sachlich erklärt."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/ratgeber"
              className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
            >
              Alle Ratgeber ansehen
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Abschluss-CTA */}
      <section className="border-t border-slate-200">
        <Container className="flex flex-col items-center py-14 text-center sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            Bereit für den Überblick?
          </h2>
          <p className="mt-3 max-w-lg text-base text-slate-600">
            Wähle die passende Kategorie und sieh, worauf es beim Vergleich
            ankommt.
          </p>
          <div className="mt-6">
            <Button href="/kategorien">
              Jetzt passende Kategorie auswählen
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
