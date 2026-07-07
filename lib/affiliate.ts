import { partners } from "@/data/partners";
import type { Category, Partner, PartnerNetwork } from "@/types";

/**
 * Zentrale Affiliate-Logik — EINZIGE Stelle im Projekt, die Partnerlinks
 * ausgibt. Komponenten (v. a. PartnerButton) beziehen href und rel
 * ausschließlich von hier, niemals direkt aus Daten oder Hardcodes.
 *
 * v1-LEITPLANKEN (PROJEKTPLAN.md, Abschnitt 6):
 * - Alle Partner sind Platzhalter (affiliateUrl: null, status: "placeholder")
 *   → getPartnerLink() liefert in v1 immer die fallbackUrl.
 * - rel für Partnerlinks enthält immer "sponsored nofollow noopener".
 * - SubID-Tracking ist vorbereitet (appendSubId), wird aber in v1 nicht genutzt.
 */

/**
 * rel-Attribut für alle ausgehenden Partnerlinks: sponsored/nofollow
 * (Google-Vorgabe für Affiliate), noopener/noreferrer (Sicherheit bei
 * target="_blank"; Awin-Tracking läuft über URL-Parameter und braucht
 * keinen Referer). Seit 07.07.2026 inkl. noreferrer.
 */
export function buildRelAttribute(): string {
  return "sponsored nofollow noopener noreferrer";
}

/**
 * Liefert die Ziel-URL für einen Partner.
 * Echte Affiliate-URL nur, wenn der Partner aktiv ist UND eine URL gepflegt
 * ist — sonst immer die fallbackUrl. In v1 greift damit immer der Fallback.
 */
export function getPartnerLink(partner: Partner): string {
  if (partner.status === "active" && partner.affiliateUrl) {
    return partner.affiliateUrl;
  }
  return partner.fallbackUrl;
}

/**
 * true, wenn der Partner noch keinen echten, aktiven Link hat.
 * PartnerButton stellt solche Partner als Platzhalter dar
 * ("Partner folgt in Kürze") statt ins Leere zu verlinken.
 */
export function isPlaceholderPartner(partner: Partner): boolean {
  return partner.status !== "active" || !partner.affiliateUrl;
}

/** Alle Partner einer Kategorie, in der Reihenfolge der Datenpflege. */
export function getPartnersByCategory(categorySlug: string): Partner[] {
  return partners.filter((partner) => partner.categorySlugs.includes(categorySlug));
}

/** Einzelnen Partner anhand stabiler ID auflösen (z. B. offerTile.partnerId). */
export function getPartnerById(id: string): Partner | undefined {
  return partners.find((partner) => partner.id === id);
}

/** Partner anhand stabiler IDs auflösen (z. B. category.partnerIds). */
export function getPartnersByIds(ids: string[]): Partner[] {
  return ids
    .map((id) => partners.find((partner) => partner.id === id))
    .filter((partner): partner is Partner => partner !== undefined);
}

/** true bei Kredit-/Versicherungspartnern → LegalNoticeBox-Logik. */
export function isSensitivePartner(partner: Partner): boolean {
  return partner.sensitive;
}

/** true bei sensiblen Kategorien (v1: versicherungen, kredit). */
export function isSensitiveCategory(category: Category): boolean {
  return category.sensitive;
}

/**
 * VORBEREITET — IN v1 NICHT VERWENDEN.
 *
 * Hängt eine SubID an eine Affiliate-URL an, um Klicks später nach Platzierung
 * oder Kanal zuzuordnen (Parametername je nach Netzwerk unterschiedlich, z. B.
 * Awin "clickref", financeAds "subid"). Wird erst relevant, wenn echte
 * Affiliate-Links und ein Netzwerk-Setup existieren.
 */
export function appendSubId(
  url: string,
  subId: string,
  paramName: string = "subid",
): string {
  const parsed = new URL(url);
  parsed.searchParams.set(paramName, subId);
  return parsed.toString();
}

/**
 * SubID-Parametername je Netzwerk (VORBEREITET — Nutzung erst bei Aktivierung).
 *
 * Nur Netzwerke eintragen, deren Parametername VERIFIZIERT ist (Netzwerk-Doku
 * bzw. Partner-Backend). Fehlt ein Netzwerk hier, muss der Name bei der
 * Aktivierung im jeweiligen Backend nachgeschlagen werden — siehe PARTNER.md.
 */
export const SUBID_PARAM_BY_NETWORK: Partial<Record<PartnerNetwork, string>> = {
  awin: "clickref",
  financeads: "subid",
  adcell: "subid",
  // check24 / tarifcheck / telekom / direct: vor Aktivierung im
  // Partner-Backend verifizieren und hier ergänzen (PARTNER.md, Schritt 2).
};

/**
 * SubID-Konvention: tarvyo24_[kategorie]_[platzierung]
 * (nur Kleinbuchstaben/Ziffern/Bindestrich je Segment, Segmente durch "_").
 * Beispiele: tarvyo24_handyvertrag_partnercard · tarvyo24_internet-dsl_offertile
 * Platzierungswerte: siehe PARTNER.md (partnercard | offertile | ratgeber).
 */
export function buildSubId(categorySlug: string, placement: string): string {
  return `tarvyo24_${categorySlug}_${placement}`;
}
