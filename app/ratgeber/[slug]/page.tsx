import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { getPartnersByIds } from "@/lib/affiliate";
import { slugify } from "@/lib/slugify";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { TableOfContents } from "@/components/content/TableOfContents";
import { FaqSection } from "@/components/content/FaqSection";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { PartnerCard } from "@/components/affiliate/PartnerCard";
import { LegalNoticeBox } from "@/components/legal/LegalNoticeBox";

/*
 * Ratgeber-Detailseite — vollständig statisch generiert.
 * Alle Slugs kommen aus data/articles.ts; unbekannte Slugs sind 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/ratgeber/${article.slug}/`,
    },
  };
}

const FAQ_ANCHOR = "haeufige-fragen";

export default async function RatgeberDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const category = categories.find((c) => c.slug === article.categorySlug);
  const partners = getPartnersByIds(article.relatedPartnerIds);
  // LegalNoticeBox: Artikel selbst sensibel ODER zugehörige Kategorie sensibel.
  // In v1 trifft das auf keinen der 5 Artikel zu — Logik greift bei künftigen
  // Artikeln in den Kategorien versicherungen/kredit automatisch.
  const isSensitive = article.sensitive || category?.sensitive === true;

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const sectionsWithIds = article.sections.map((section) => ({
    ...section,
    id: slugify(section.heading),
  }));

  const tocItems = [
    ...sectionsWithIds.map((section) => ({ id: section.id, label: section.heading })),
    ...(article.faq.length > 0 ? [{ id: FAQ_ANCHOR, label: "Häufige Fragen" }] : []),
  ];

  const articleUrl = `${site.baseUrl}/ratgeber/${article.slug}/`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "de",
    mainEntityOfPage: articleUrl,
    // Autorenkennzeichnung noch offen (PROJEKTPLAN.md, Frage 9) —
    // bis zur Entscheidung Organisation als Autor und Herausgeber.
    author: { "@type": "Organization", name: site.brandName, url: site.baseUrl },
    publisher: { "@type": "Organization", name: site.brandName, url: site.baseUrl },
  };

  // Aus denselben Daten wie das sichtbare FAQ — immer 1:1 identisch.
  const faqJsonLd =
    article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <Container className="py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* 1. Breadcrumb */}
      <Breadcrumbs
        baseUrl={site.baseUrl}
        items={[
          { label: "Start", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: article.title },
        ]}
      />

      {/* 2. Artikelkopf */}
      <header className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {article.metaDescription}
        </p>
        <p className="mt-3 text-sm text-slate-500">
          <time dateTime={article.publishedAt}>{formattedDate}</time>
          {" · "}
          {article.readingMinutes} Min. Lesezeit
        </p>
      </header>

      {/* 3. Transparenzhinweis, wenn der Artikel auf Partner verweist */}
      {partners.length > 0 && (
        <div className="mt-8 max-w-3xl">
          <AffiliateDisclosure />
        </div>
      )}

      {/* 4. Rechtlicher Hinweis bei sensiblen Artikeln/Kategorien */}
      {isSensitive && (
        <div className="mt-6 max-w-3xl">
          <LegalNoticeBox
            variant={category?.sensitiveVariant ?? "default"}
            notice={category?.sensitiveNotice ?? site.legalNotice}
          />
        </div>
      )}

      {/* 5. Inhaltsverzeichnis */}
      {tocItems.length > 0 && (
        <div className="mt-8 max-w-3xl">
          <TableOfContents items={tocItems} />
        </div>
      )}

      {/* 6. Artikelabschnitte */}
      <div className="mt-10 max-w-3xl space-y-10">
        {sectionsWithIds.map((section) => (
          <section key={section.id}>
            <h2
              id={section.id}
              className="scroll-mt-24 text-2xl font-bold tracking-tight text-brand-900"
            >
              {section.heading}
            </h2>
            {section.body.split("\n\n").map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-base leading-relaxed text-slate-700"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* 7. FAQ */}
      {article.faq.length > 0 && (
        <div className="mt-14 max-w-3xl">
          <FaqSection items={article.faq} id={FAQ_ANCHOR} />
        </div>
      )}

      {/* 8. Partnerkarten (nur Platzhalter) */}
      {partners.length > 0 && (
        <section className="mt-14">
          <SectionHeading
            eyebrow="Vergleichsmöglichkeiten"
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

      {/* 9. + 10. Kategorie-Verlinkung und CTA */}
      <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row">
        {category && (
          <Button href={`/kategorien/${category.slug}`} variant="secondary">
            Zur Kategorie {category.title}
          </Button>
        )}
        <Button href="/ratgeber" variant="ghost">
          Alle Ratgeber ansehen
        </Button>
      </div>
    </Container>
  );
}
