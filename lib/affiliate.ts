import { partners } from "@/data/partners";
import type { Category, Partner } from "@/types";

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

/** rel-Attribut für alle ausgehenden Partnerlinks (Google-Vorgabe für Affiliate). */
export function buildRelAttribute(): string {
  return "sponsored nofollow noopener";
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
