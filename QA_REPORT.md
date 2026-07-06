# QA-Report: Tarvyo24 v1 (Schritt 10)

**Datum:** 06.07.2026
**Stand:** nach Schritt 9 (SEO-Feinschliff), vor Schritt 11 (erster Commit)
**Geprüft:** statischer Export (`npm run build` → `out/`) + Live-Prüfung im Dev-Server (mobil 375px)

---

## Ergebnis in Kürze

**QA bestanden: JA** — bereit für Schritt 11 (Commit/Push nach Freigabe).
**Deployment (Schritt 12) bleibt blockiert**, bis die Go-Live-Blocker (unten) erfüllt sind.

---

## 1. Build & Export ✅

- `npm run build` fehlerfrei: 27 Routen, 23 HTML-Seiten statisch exportiert
- `out/sitemap.xml` vorhanden: 19 URLs, alle `https://tarvyo24.de/…` mit Trailing Slash, `lastmod` nur bei Artikeln
- `out/robots.txt` vorhanden: `Allow: /` + Sitemap-Verweis
- `out/og.png` (17 kB) und `out/icon.svg` vorhanden
- Frühere Marken- und Domain-Namen (Arbeitstitel vor dem Rebranding auf Tarvyo24): **0 Treffer** im gesamten Export
- Exportgröße gesamt: ~2,9 MB (überwiegend Next-Framework-Chunks und selbst gehostete Schrift)

## 2. Interner Linkcheck ✅

Skriptbasierte Prüfung aller 23 HTML-Dateien:

- 24 eindeutige interne Link-Ziele — **0 kaputte Links**
- Alle Anker-Links (Inhaltsverzeichnisse) lösen auf ihr Ziel auf — **0 tote Anker**
- **Keinerlei externe Dritt-Domains** im Export (alle absoluten URLs sind eigene Canonicals/JSON-LD)
- Einziger Nicht-HTTP-Link: `mailto:info@tarvyo24.de` (beabsichtigt)
- Navigation, Footer, Kategorie-, Ratgeber- und Rechtsseiten: alle Ziele existieren

## 3. Mobile QA (375×812) ✅

Geprüft: Startseite, Kategorie-Detail (handyvertrag), Artikel (handyvertrag-vergleichen), Impressum, Datenschutz:

- Kein horizontaler Overflow auf allen geprüften Seiten
- 0 abgeschnittene/überlappende Elemente (programmatische Bounding-Box-Prüfung aller Main-Elemente)
- OfferTiles einspaltig mit voller Breite (343px), Burger-Menü sichtbar und funktional (aria-expanded geprüft in Schritt 3)
- FAQ-`<summary>` mit 80px Tap-Höhe (großzügiges Touch-Ziel)
- Platzhalter-Banner auf beiden Rechtsseiten mobil sichtbar
- Hinweis: „Rechner-Seiten" existieren in v1 nicht (Kreditrechner/KV-Check sind Backlog) — kein Prüfgegenstand

## 4. SEO QA ✅

Alle 10 Seitentypen einzeln geprüft (Startseite, beide Übersichten, Kategorie-Detail, Artikel, Vertrauen, Affiliate-Hinweis, Kontakt, Impressum, Datenschutz):

- Individuelle `title` (mit `| Tarvyo24`-Template) und `description` überall vorhanden
- Canonicals korrekt mit Trailing Slash (`https://tarvyo24.de/…/`)
- `noindex, follow` **nur** auf /impressum und /datenschutz (+ 404-Seite, Next-Standard) — alle Inhaltsseiten indexierbar
- OpenGraph (type, locale de_DE, siteName, og:image absolut) + Twitter Card (`summary_large_image`) auf allen Seiten
- Strukturierte Daten: Organization + WebSite (Layout), BreadcrumbList (Kategorien + Artikel), Article + FAQPage (Artikel); FAQPage-Inhalt = sichtbares FAQ (gleiche Datenquelle); JSON-LD-URLs mit Trailing Slash konsistent
- Sitemap enthält keine noindex-Seiten (Impressum/Datenschutz dokumentiert ausgeschlossen)
- Genau **ein H1 pro Seite** (programmatisch über alle 23 Seiten geprüft)

## 5. Performance QA ✅ (mit Einschränkung)

- **First Load JS: 103–106 kB** (gzip) — einzige Client-Komponente ist das Burger-Menü
- Keine externen Requests: Schrift selbst gehostet (woff2, 83 kB), keine CDNs, keine Tracking-Skripte, keine Drittanbieter-Assets
- Größtes Asset im Export: Next-Framework-Chunk 185 kB (ungezippt; Standard)
- OG-Bild 17 kB (wird nur von Crawlern geladen), Favicon SVG < 1 kB, keine weiteren Bilder
- **Lighthouse wurde nicht ausgeführt** — Begründung: kein Lighthouse im Setup vorhanden; `npx lighthouse` würde ein neues Paket installieren (verstößt gegen die Vorgabe „keine neuen Pakete"). **Manuelle Ersatzprüfung:** vollständig statisches HTML (schnellste TTFB-Klasse), ~106 kB JS, eine Schrift mit `display: swap`, keine Layout-Shift-Quellen (keine dynamischen Inhalte, keine Bilder im Content), dokumentierte WCAG-AA-Kontraste (tailwind.config.ts), Fokus-Zustände, aria-Attribute, semantische Struktur. Erwartung: alle vier Lighthouse-Kategorien ≥ 90. **Empfehlung: echte Lighthouse-Messung nach Deployment auf der Live-URL nachholen** (z. B. via PageSpeed Insights, ohne lokale Installation).

## 6. Rechtliche Prüfung / Go-Live-Blocker ✅ (QA) / 🔴 (Go-Live)

**In der QA bestanden:**
- /impressum und /datenschutz vorhanden, deutlich als Entwurf markiert, keine erfundenen Angaben
- Keine echten Affiliate-Links: 0× `rel="sponsored"`, 0× `href="#"`; alle 16 Partner `affiliateUrl: null` + `status: "placeholder"`
- Keine Tracking-Skripte (0 Treffer auf gtag/GTM/Analytics/Plausible/Matomo/Hotjar u. a.); Tracking-IDs in site.ts alle `null`
- Keine Fake-Social-Profile (kein `sameAs` im JSON-LD), keine Fake-Bewertungen, keine erfundenen Nutzerzahlen
- Keine Superlative/Garantie-Formulierungen („beste", „garantiert", „sicherer Kredit") in den Inhalten
- Werbekennzeichnung: „Anzeige"-Badge an jedem Werbeplatz, AffiliateDisclosure vor Werbeblöcken, LegalNoticeBox vor Partnerinhalten bei Kredit/Versicherungen

**🔴 Offene Go-Live-Blocker (Stand 06.07.2026, siehe DEPLOYMENT.md):**
1. ~~Echte Betreiberangaben ins Impressum~~ — **erledigt 06.07.2026** (Marija Beisler, Einzelunternehmen, Duingen; ohne USt-ID/Steuernummer; VSBG-Standarderklärung zur Bestätigung durch Betreiber)
2. Finale Datenschutzerklärung (DSGVO) — weiterhin Platzhalter, **offen**
3. Datenschutz-Banner entfernen nach finalem Text (Impressum-Banner bereits entfernt; noindex-Entscheidung getroffen: Rechtsseiten dauerhaft noindex)
4. Postfach info@tarvyo24.de einrichten und testen — **offen**

## Gefundene & behobene Fehler

In dieser QA-Runde wurden **keine neuen Fehler** gefunden. Während der Entwicklung bereits behoben (dokumentiert in den Schritt-Zusammenfassungen): JSON-LD-Breadcrumb-URLs ohne Trailing Slash (Schritt 5).

## Offene Risiken (keine Blocker für Schritt 11)

| Risiko | Einordnung |
|---|---|
| Lighthouse nicht lokal gemessen | nach Deployment auf Live-URL nachholen (PageSpeed Insights) |
| Markenrecherche „Tarvyo24" (DPMA/EUIPO, Klassen 35/36/38) | Empfehlung vor größerem Invest, Entscheidung beim Betreiber |
| Kategorie „Versicherungen" ohne Ratgeber-Artikel | SEO-Backlog, kein technisches Problem |
| 4 OfferTiles ohne Partner-Zuordnung (Hosting, POS, Kfz, Rechtsschutz) | beabsichtigt; Aktivierung per Datenpflege |

---

## Empfehlung

**Bereit für Schritt 11 (erster Commit + Push) — Freigabe durch den Betreiber vorausgesetzt.**
Nicht bereit für Schritt 12 (Deployment), bis die vier Go-Live-Blocker erfüllt sind.
