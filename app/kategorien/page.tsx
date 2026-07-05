import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { CategoryCard } from "@/components/content/CategoryCard";

export const metadata: Metadata = {
  title: "Kategorien: Tarife, Verträge & Angebote im Überblick",
  description:
    "Alle Themen von Tarvyo24 im Überblick: Handyvertrag, Internet, Strom & Gas, Konto, Buchhaltung, Gewerbe-Tools, Versicherungen und Kredit – verständlich eingeordnet.",
  alternates: {
    canonical: "/kategorien/",
  },
};

export default function KategorienPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Kategorien
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          Tarife, Verträge und Angebote im Überblick
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Wähle ein Thema und erfahre, worauf es beim Vergleich ankommt, welche
          Kostenfallen typisch sind und welche Vergleichsmöglichkeiten es gibt.
          Alle Inhalte dienen der allgemeinen Orientierung – eine individuelle
          Empfehlung oder Beratung ersetzen sie nicht.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </Container>
  );
}
