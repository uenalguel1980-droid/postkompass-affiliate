import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { site } from "@/data/site";
import { getPartnerById, getPartnersByIds } from "@/lib/affiliate";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { ChecklistBox } from "@/components/content/ChecklistBox";
import { CostTrapBox } from "@/components/content/CostTrapBox";
import { ArticleCard } from "@/components/content/ArticleCard";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { OfferTile } from "@/components/affiliate/OfferTile";
import { PartnerCard } from "@/components/affiliate/PartnerCard";
import { LegalNoticeBox } from "@/components/legal/LegalNoticeBox";

/*
 * Kategorie-Detailseite — vollständig statisch generiert.
 * Alle Slugs kommen aus data/categories.ts; unbekannte Slugs sind 404
 * (dynamicParams = false, Pflicht für den statischen Export).
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: {
      canonical: `/kategorien/${category.slug}/`,
    },
  };
}

export default async function KategorieDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const partners = getPartnersByIds(category.partnerIds);
  const relatedArticles = articles.filter((article) =>
    category.relatedArticleSlugs.includes(article.slug),
  );

  return (
    <Container className="py-10 sm:py-14">
      {/* 1. Breadcrumb */}
      <Breadcrumbs
        baseUrl={site.baseUrl}
        items={[
          { label: "Start", href: "/" },
          { label: "Kategorien", href: "/kategorien" },
          { label: category.title },
        ]}
      />

      {/* 2. H1 + Intro */}
      <div className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          {category.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {category.intro}
        </p>
      </div>

      {/* 3. Rechtlicher Hinweis bei sensiblen Kategorien — VOR allen Partnerinhalten */}
      {category.sensitive && (
        <div className="mt-8">
          <LegalNoticeBox
            variant={category.sensitiveVariant ?? "default"}
            notice={category.sensitiveNotice ?? site.legalNotice}
          />
        </div>
      )}

      {/* 4. Transparenzhinweis — einmal pro Seite, VOR allen Werbeplätzen */}
      {(category.offerTiles.length > 0 || partners.length > 0) && (
        <div className="mt-8">
          <AffiliateDisclosure />
        </div>
      )}

      {/* 5. Angebots-/Vergleichs-Kacheln */}
      {category.offerTiles.length > 0 && (
        <section className="mt-8">
          <SectionHeading
            eyebrow="Vergleichsmöglichkeiten"
            title="Direkt vergleichen"
            subtitle="Prüfung, Beratung und Abschluss erfolgen ausschließlich beim jeweiligen Anbieter, Vergleichsportal oder zugelassenen Partner."
          />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.offerTiles.map((tile) => (
              <OfferTile
                key={tile.id}
                tile={tile}
                partner={tile.partnerId ? (getPartnerById(tile.partnerId) ?? null) : null}
                fallbackIcon={category.icon}
              />
            ))}
          </div>
        </section>
      )}

      {/* 6. Checkliste + 7. Kostenfallen */}
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <ChecklistBox items={category.checklist} />
        <CostTrapBox items={category.costTraps} />
      </div>

      {/* 8. Partnerkarten */}
      {partners.length > 0 && (
        <section className="mt-14">
          <SectionHeading
            eyebrow="Partner"
            title="Gekennzeichnete Partnerangebote"
            subtitle="Prüfung, Beratung und Abschluss erfolgen ausschließlich beim jeweiligen Anbieter, Vergleichsportal oder zugelassenen Partner."
          />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </section>
      )}

      {/* 9. Verwandte Ratgeber */}
      {relatedArticles.length > 0 && (
        <section className="mt-14">
          <SectionHeading
            eyebrow="Ratgeber"
            title="Passende Ratgeber zum Thema"
          />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 10. CTA */}
      <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row">
        <Button href="/kategorien" variant="secondary">
          Alle Kategorien ansehen
        </Button>
        <Button href="/ratgeber" variant="ghost">
          Zu den Ratgebern
        </Button>
      </div>
    </Container>
  );
}
