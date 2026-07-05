/**
 * Umlautfester Slugify-Helfer für stabile Anker-IDs
 * (z. B. "Gebühren im Blick" → "gebuehren-im-blick").
 * Wird für die H2-Anker der Ratgeberartikel und das Inhaltsverzeichnis genutzt.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
