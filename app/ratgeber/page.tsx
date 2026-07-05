import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "@/components/content/ArticleCard";

export const metadata: Metadata = {
  title: "Ratgeber: Tarife, Verträge & Angebote verständlich erklärt",
  description:
    "Praxisnahe Ratgeber von Tarvyo24: Handyvertrag, Internet, Strom & Gas, Kreditkarte und Buchhaltungssoftware – mit Checklisten und typischen Kostenfallen.",
  alternates: {
    canonical: "/ratgeber/",
  },
};

export default function RatgeberPage() {
  // Neueste zuerst (bei gleichem Datum bleibt die Pflege-Reihenfolge stabil).
  const sortedArticles = [...articles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Ratgeber
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          Tarife und Verträge verständlich erklärt
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Unsere Ratgeber zeigen dir, worauf es beim Vergleichen wirklich
          ankommt – mit Checklisten, typischen Kostenfallen und häufigen
          Fragen. Alle Inhalte dienen der allgemeinen Orientierung und
          ersetzen keine individuelle Beratung.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Du suchst direkt Vergleichsmöglichkeiten? Dann wirf einen Blick auf
          unsere{" "}
          <Link
            href="/kategorien"
            className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
          >
            Kategorien
          </Link>
          .
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {sortedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}
