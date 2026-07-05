/**
 * Consent-Banner-Platzhalter — RENDERT BEWUSST NICHTS.
 *
 * Ein sichtbares Cookie-Banner ohne echte Funktion wäre irreführend und
 * rechtlich heikel. Diese Komponente markiert nur die Stelle im Layout,
 * an der später eine echte Consent-Management-Lösung (CMP) eingebunden wird.
 *
 * Vertrag für die spätere Aktivierung (PROJEKTPLAN.md, Abschnitt 8):
 * 1. CMP-Lösung auswählen (z. B. Open Source wie klaro! oder ein Dienst
 *    wie Cookiebot/Usercentrics) und hier einbinden.
 * 2. GA4/GTM-Skripte im Layout dürfen ERST rendern, wenn
 *    (a) die jeweilige ID in data/site.ts → tracking gesetzt ist UND
 *    (b) die CMP eine aktive Einwilligung bestätigt hat.
 * 3. Bis dahin: keine Tracking-Skripte, auch nicht "kurz zum Testen".
 *    Die GSC-Verifikation (Meta-Tag) ist davon ausgenommen (consent-frei).
 */
export function ConsentBannerPlaceholder() {
  return null;
}
