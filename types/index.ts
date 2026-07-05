/**
 * Zentrale Typdefinitionen für die Tarvyo24-Datenschicht.
 *
 * Diese Typen sind der Vertrag zwischen den Datendateien (/data) und den
 * Komponenten (/components). Sie sind bewusst so modelliert, dass sie später
 * 1:1 auf Datenbank-Tabellen abbildbar sind (Webapp-Ausbaustufe).
 *
 * Befüllt werden die Daten in Schritt 2 — siehe PROJEKTPLAN.md, Abschnitt 5.
 */

/** Status eines Partners im Affiliate-Lebenszyklus. */
export type PartnerStatus = "placeholder" | "active" | "paused";

/**
 * Affiliate-Netzwerke bzw. Partnerprogramme, für die Platzhalter vorbereitet sind.
 * "direct" = Direktpartnerschaft ohne Netzwerk (z. B. Telekom-Partnerprogramm).
 */
export type PartnerNetwork =
  | "check24"
  | "awin"
  | "financeads"
  | "adcell"
  | "tarifcheck"
  | "telekom"
  | "direct";

/** Varianten der rechtlichen Hinweisbox für sensible Kategorien. */
export type SensitiveVariant = "versicherung" | "kredit";

export interface Partner {
  /** Stabile ID, z. B. "placeholder-handy-1". Ändert sich nie (spätere /go/-Redirects). */
  id: string;
  name: string;
  description: string;
  /** 3–4 Kernmerkmale für die PartnerCard. */
  features: string[];
  /**
   * v1-LEITPLANKE: Im ersten Commit IMMER null — keine echten Affiliate-Links.
   * Echte Links kommen später ausschließlich hier hinein, nie in Komponenten.
   */
  affiliateUrl: string | null;
  /** Ziel, solange kein echter Link existiert (v1: "#"). */
  fallbackUrl: string;
  /** Slugs der Kategorien, in denen der Partner erscheint. */
  categorySlugs: string[];
  status: PartnerStatus;
  network?: PartnerNetwork;
  /** true bei Kredit-/Versicherungspartnern → erzwingt LegalNoticeBox-Logik. */
  sensitive: boolean;
}

/**
 * Angebots-/Vergleichs-Kachel — themenbezogener Einstiegspunkt nach
 * Nutzerintention (z. B. "SIM-only Tarife prüfen") auf Kategorieseiten.
 *
 * partnerId verweist auf partners.ts (einzige Link-Quelle). Ohne partnerId
 * oder ohne aktiven Partner bleibt die Kachel ein nicht-interaktiver
 * Platzhalter. Keine Preise, keine erfundenen Angebote, keine Superlative.
 */
export interface OfferTile {
  /** Stabile ID, z. B. "handy-sim-only". */
  id: string;
  /** Handlungsorientiertes, nüchternes Label, z. B. "SIM-only Tarife prüfen". */
  title: string;
  /** Eine kurze, sachliche Einordnungszeile. */
  description: string;
  /** Icon-Name (Fallback: Kategorie-Icon). */
  icon?: string;
  /** Verweis auf partners.ts — null, solange kein passender Partner existiert. */
  partnerId: string | null;
}

export interface Category {
  /** URL-Slug, z. B. "handyvertrag" (kurz, deutsch, keine Umlaute). */
  slug: string;
  /** Anzeigename, z. B. "Handyvertrag". */
  title: string;
  /** SEO-Titel, Ziel ≤ 60 Zeichen. */
  metaTitle: string;
  /** SEO-Beschreibung, Ziel ≤ 155 Zeichen. */
  metaDescription: string;
  /** Kurztext für Kategorie-Kacheln. */
  teaser: string;
  /** Einleitungstext der Kategorieseite. */
  intro: string;
  /** "Worauf achten"-Checkliste. */
  checklist: string[];
  /** Typische Kostenfallen. */
  costTraps: string[];
  /** true bei versicherungen + kredit → automatische LegalNoticeBox. */
  sensitive: boolean;
  /** Variante der Hinweisbox, Pflicht wenn sensitive = true. */
  sensitiveVariant?: SensitiveVariant;
  /** Optionaler kategoriespezifischer Zusatzhinweis. */
  sensitiveNotice?: string;
  /** IDs der Partner aus partners.ts. */
  partnerIds: string[];
  /** Angebots-/Vergleichs-Kacheln (2–3 pro Kategorie). */
  offerTiles: OfferTile[];
  /** Slugs verwandter Ratgeberartikel aus articles.ts. */
  relatedArticleSlugs: string[];
  /** Icon-Referenz für die Kategorie-Kachel (Umsetzung in Schritt 3). */
  icon: string;
}

export interface ArticleSection {
  /** H2-Überschrift der Sektion (speist auch das Inhaltsverzeichnis). */
  heading: string;
  /** Fließtext der Sektion; Absätze durch Leerzeilen getrennt. */
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Article {
  /** URL-Slug, z. B. "handyvertrag-vergleichen". */
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** ISO-Datum (YYYY-MM-DD) — für Schema.org Article + Sitemap. */
  publishedAt: string;
  /** ISO-Datum (YYYY-MM-DD) — für dateModified + Sitemap lastModified. */
  updatedAt: string;
  readingMinutes: number;
  /** Zugehörige Kategorie (Slug aus categories.ts). */
  categorySlug: string;
  sections: ArticleSection[];
  faq: FaqItem[];
  /** Partner, auf die der Artikel kontextuell verweist. */
  relatedPartnerIds: string[];
  /** Erbt i. d. R. den Wert der Kategorie → AffiliateDisclosure/LegalNoticeBox. */
  sensitive: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Tracking-Konfiguration — v1-LEITPLANKE: alle Werte null.
 * GA4/GTM dürfen erst gerendert werden, wenn eine ID gesetzt ist UND eine
 * funktionierende Consent-Lösung die Einwilligung bestätigt (Layout-Kommentar).
 */
export interface TrackingConfig {
  /** Google Search Console Meta-Tag-Verifikation (consent-frei aktivierbar). */
  gscVerification: string | null;
  /** Google Analytics 4 Measurement-ID. */
  ga4Id: string | null;
  /** Google Tag Manager Container-ID. */
  gtmId: string | null;
}

export interface SiteConfig {
  /** "Tarvyo24" — die Marke tritt eigenständig auf, ohne Zusatz. */
  brandName: string;
  /** "Erst checken. Dann entscheiden." */
  claim: string;
  /** Produktions-URL für Canonical, Sitemap, Open Graph. */
  baseUrl: string;
  defaultDescription: string;
  contactEmail: string;
  /**
   * Rechtlicher Grundhinweis — erscheint u. a. im Footer und auf /vertrauen.
   * Kein Ersatz für Impressum/Datenschutz (echte Rechtstexte kommen extern).
   */
  legalNotice: string;
  /** Hauptnavigation (Header). Kein "Start"-Eintrag — das Logo verlinkt auf /. */
  navigation: NavItem[];
  /** Footer-Linkgruppe 1: Inhalte entdecken. */
  footerNavLinks: NavItem[];
  /** Footer-Linkgruppe 2: Rechtliches & Kontakt. */
  footerLegalLinks: NavItem[];
  /** Affiliate-Kurzhinweis (Ebene 1) — erscheint im Footer auf jeder Seite. */
  affiliateShortNotice: string;
  tracking: TrackingConfig;
}
