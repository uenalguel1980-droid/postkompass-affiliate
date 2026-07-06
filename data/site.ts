import type { SiteConfig } from "@/types";

/**
 * Globale Seitenkonfiguration — einzige Quelle für Marke, URLs, Navigation
 * und Tracking-Platzhalter.
 *
 * Marke: Tarvyo24 tritt eigenständig auf (Entscheidung vom 05.07.2026),
 * ohne sichtbaren Zusatz einer Dachmarke.
 *
 * v1-LEITPLANKEN:
 * - tracking: alle Werte null. GA4/GTM dürfen erst aktiviert werden, wenn
 *   eine funktionierende Consent-Lösung existiert (siehe app/layout.tsx).
 */
export const site: SiteConfig = {
  brandName: "Tarvyo24",
  claim: "Erst checken. Dann entscheiden.",
  baseUrl: "https://tarvyo24.de",
  defaultDescription:
    "Tarvyo24 hilft dir, Tarife, Angebote und Verträge verständlich zu prüfen, typische Kostenfallen zu erkennen und passende Vergleichsmöglichkeiten zu finden.",
  contactEmail: "info@tarvyo24.de",
  legalNotice:
    "Tarvyo24 bietet allgemeine Informationen und Orientierung. Wir erbringen keine individuelle Versicherungsberatung, Finanzberatung, Kreditberatung, Rechtsberatung oder Steuerberatung. Prüfung, Beratung und Vertragsabschluss erfolgen ausschließlich beim jeweiligen Anbieter, Vergleichspartner oder zugelassenen Partner.",
  // Kein "Start"-Eintrag — das Logo im Header verlinkt auf /.
  navigation: [
    { label: "Kategorien", href: "/kategorien" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Vertrauen", href: "/vertrauen" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footerNavLinks: [
    { label: "Kategorien", href: "/kategorien" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Vertrauen", href: "/vertrauen" },
  ],
  footerLegalLinks: [
    { label: "Affiliate-Hinweis", href: "/affiliate-hinweis" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  affiliateShortNotice:
    "Diese Seite finanziert sich über Partnerlinks (Werbung). Für dich entstehen dadurch keine Mehrkosten.",
  tracking: {
    // Google Search Console Meta-Tag-Verifikation (consent-frei, kein Tracking).
    // Eingetragen am 06.07.2026; gerendert über app/layout.tsx → metadata.verification.
    gscVerification: "GZ20BsQW7Cadiy-Zdl2ZKhmkn3wN9tSLCgAmol7Yafw",
    // GA4 / GTM: NIEMALS befüllen, bevor eine Consent-Lösung live ist.
    ga4Id: null,
    gtmId: null,
  },
};
