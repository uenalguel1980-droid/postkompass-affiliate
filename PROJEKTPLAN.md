# Projektplan: Tarvyo24 Affiliate

**Marke:** Tarvyo24 (eigenständiger Auftritt, ohne sichtbaren PostKompass-Bezug)
**Claim:** Erst checken. Dann entscheiden.
**Domain:** https://tarvyo24.de (final, aktiv)
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · statischer Export für Hostinger · SEO-optimiert · mobile-first

**Stand:** 05.07.2026 — Plan freigegeben, Deployment-Strategie für v1 entschieden (Abschnitt 9), Marke von KlarKompass auf Tarvyo24 umgestellt.

---

## Verbindliche v1-Leitplanken (entschieden)

- Next.js mit **statischem Export** (`output: "export"`)
- **Keine** API-Routen, **keine** Server Actions, **kein** Login, **keine** Datenbank
- **Keine echten Affiliate-Links** im ersten Commit — alle Partner als Platzhalter (`affiliateUrl: null`)
- **Kein aktives GA4/GTM/Tracking** ohne funktionierende Consent-Lösung — alle Tracking-IDs `null`
- Architektur bleibt **Node.js-/Webapp-erweiterbar**: App Router, TypeScript, Tailwind, saubere Datenschicht; der Wechsel zu Node-Deployment ist später nur eine Config-/Hosting-Änderung

---

## 1. Projektziel

Eine hochwertige, deutschsprachige Affiliate- und Vergleichsseite, die:

- Nutzern hilft, Verträge, Tarife und Angebote **verständlich einzuordnen** (Orientierung statt Beratung),
- typische **Kostenfallen** erklärt,
- transparent zu **Partnerangeboten und Vergleichsrechnern** weiterleitet,
- über **Ratgeberartikel organischen SEO-Traffic** aufbaut,
- technisch so aufgesetzt ist, dass sie später zur Webapp (Login, Datenbank, personalisierte Features) ausgebaut werden kann — **ohne Rewrite**.

**Ausdrücklich nicht im Scope der ersten Version:** Login, Datenbank, Backend-API, CMS, aktives Tracking, echte Affiliate-Links.

**Erfolgskriterien v1:**
- Alle geplanten Seiten live, mobil einwandfrei, Lighthouse-Scores (Performance/SEO/Accessibility) ≥ 90
- Rechtstexte und Affiliate-Kennzeichnung vollständig
- Inhalte zentral über `/data`-Dateien pflegbar, ohne Komponenten anzufassen

---

## 2. Zielgruppe

**Primär:**
- Privatpersonen (25–55), die Verträge wechseln oder neu abschließen wollen (Handy, Internet, Strom/Gas, Konto/Kreditkarte) und sich vor dem Abschluss orientieren möchten
- Selbstständige, Freiberufler und Kleingewerbetreibende (Buchhaltungssoftware, Gewerbe-Tools, Geschäftskonto)

**Sekundär:**
- Preisbewusste Wechsler, die gezielt nach „X vergleichen" oder „X Kostenfalle" suchen (SEO-Longtail)

**Nutzererwartung:** schnelle, verständliche Antworten ohne Fachchinesisch, klare Checklisten, ehrliche Kennzeichnung von Werbung. Mobile-Anteil voraussichtlich 60–75 % → mobile-first ist Pflicht, nicht Kür.

**Tonalität:** sachlich, klar, auf Augenhöhe. Keine Superlative („bester Kredit"), keine Heilsversprechen, keine Dringlichkeitsrhetorik. Das ist Markenkern *und* rechtliche Absicherung zugleich.

---

## 3. Seitenstruktur

```
/                                  Startseite
/kategorien                        Kategorien-Übersicht
/kategorien/[slug]                 Kategorie-Detailseite (dynamische Route)
    handyvertrag
    internet-dsl
    strom-gas
    konto-kreditkarte
    buchhaltungssoftware
    gewerbe-tools
    versicherungen                 ← sensible Kategorie
    kredit                         ← sensible Kategorie
/ratgeber                          Ratgeber-Übersicht
/ratgeber/[slug]                   Artikel-Detailseite (dynamische Route)
    handyvertrag-vergleichen
    internetvertrag-worauf-achten
    strom-gas-wechseln
    kreditkarte-vergleichen
    buchhaltungssoftware-selbststaendige
/vertrauen                         Transparenz: Wie wir arbeiten, wie wir uns finanzieren
/affiliate-hinweis                 Ausführliche Affiliate-Erklärung
/datenschutz                       Datenschutzerklärung
/impressum                         Impressum
/kontakt                           Kontaktseite (v1: E-Mail-Link, kein Formular-Backend)
```

**Routing-Entscheidung:** `/kategorien/[slug]` und `/ratgeber/[slug]` als **dynamische Routen mit `generateStaticParams`** — alle Seiten werden zur Build-Zeit statisch generiert (SSG). Neue Kategorie/Artikel = ein Eintrag in der Datendatei, keine neue Route-Datei.

**Seitentypen im Detail:**

| Seite | Inhalt / Aufbau |
|---|---|
| Startseite | Hero mit Claim, Kategorie-Grid, 3 aktuelle Ratgeber, Vertrauens-Sektion, Affiliate-Kurzhinweis |
| Kategorie-Detail | Intro-Text (Einordnung), „Worauf achten"-Checkliste, Kostenfallen-Box, Partnerkarten mit PartnerButton, verlinkte Ratgeber, LegalNoticeBox bei sensiblen Kategorien |
| Ratgeber-Artikel | Strukturierter Longform-Text mit H2/H3, Inhaltsverzeichnis, FAQ-Block, kontextuelle Partner-Verweise, AffiliateDisclosure |
| /vertrauen | Redaktionsprinzipien, Finanzierungsmodell, was Tarvyo24 NICHT ist |
| Rechtsseiten | Statischer Text, von echten Vorlagen/Anwalt zu befüllen (Platzhalter-Struktur) |

Zusätzlich (technisch, kein Menüpunkt): `sitemap.ts`, `robots.ts`, `not-found.tsx` (404), Open-Graph-Defaultbild.

---

## 4. Komponentenstruktur

```
/app
  layout.tsx                Root-Layout: Header, Footer, Metadata-Defaults, Consent-Platzhalter
  page.tsx                  Startseite
  kategorien/page.tsx
  kategorien/[slug]/page.tsx
  ratgeber/page.tsx
  ratgeber/[slug]/page.tsx
  vertrauen/page.tsx
  affiliate-hinweis/page.tsx
  datenschutz/page.tsx
  impressum/page.tsx
  kontakt/page.tsx
  sitemap.ts
  robots.ts
  not-found.tsx

/components
  layout/
    Header.tsx              Logo, Hauptnavigation, mobiles Burger-Menü
    Footer.tsx              Rechtslinks, Markenzeile Tarvyo24, Affiliate-Kurzhinweis
    MobileNav.tsx           Slide-in-Navigation (einzige Client-Komponente im Layout)
  ui/
    Container.tsx           Einheitliche max-width + Padding
    Button.tsx              Basis-Button (Varianten: primary, secondary, ghost)
    Card.tsx                Basis-Karte
    Badge.tsx               Label z. B. „Werbung", „Partnerlink", Kategorie-Tags
    SectionHeading.tsx      Einheitliche H2-Sektionen mit optionalem Untertitel
  affiliate/
    PartnerButton.tsx       → Abschnitt 6
    PartnerCard.tsx         Partner-Darstellung: Name, Kurzbeschreibung, Merkmale, PartnerButton
    OfferTile.tsx           Angebots-/Vergleichs-Kachel je Nutzerintention (Schritt 6.5); partnerId optional, sonst Platzhalter
    AffiliateDisclosure.tsx → Abschnitt 7
  legal/
    LegalNoticeBox.tsx      → Abschnitt 7
  content/
    CategoryCard.tsx        Kategorie-Kachel fürs Grid (Icon, Titel, Teaser)
    ArticleCard.tsx         Ratgeber-Teaser (Titel, Beschreibung, Datum, Lesezeit)
    ChecklistBox.tsx        „Worauf achten"-Checkliste
    CostTrapBox.tsx         Kostenfallen-Hinweisbox (visuell abgesetzt)
    FaqAccordion.tsx        FAQ mit FAQPage-Schema.org-Markup
    TableOfContents.tsx     Inhaltsverzeichnis für Artikel
  consent/
    ConsentBannerPlaceholder.tsx  → Abschnitt 8/Tracking
```

**Architekturprinzipien:**
- **Server Components als Default.** Client Components (`"use client"`) nur wo nötig: MobileNav, FaqAccordion, später Consent-Banner. Hält das JS-Bundle klein → Core Web Vitals.
- Komponenten erhalten Daten **ausschließlich als Props** aus den `/data`-Dateien — keine Komponente importiert direkt aus `/data`. Das macht den späteren Umstieg auf DB/CMS trivial (nur die Page-Ebene ändert sich).
- Alle Texte deutsch, `lang="de"` im Root-Layout.

---

## 5. Datenstruktur

Zentrale, typsichere Inhaltsverwaltung — vier Dateien in `/data`, Typdefinitionen in `/types`:

### `/data/site.ts` — globale Seitenkonfiguration
```
brandName            "Tarvyo24"
claim                "Erst checken. Dann entscheiden."
baseUrl              Produktions-URL (für Canonical, Sitemap, OG)
defaultDescription   SEO-Default
contactEmail
navigation           Hauptmenü-Einträge
footerLinks          Rechtsseiten-Links
tracking             { gscVerification: null, ga4Id: null, gtmId: null }  ← Platzhalter, alle null
```

### `/data/categories.ts` — Kategorien
```
Category:
  slug                 "handyvertrag" …
  title                Anzeigename
  metaTitle            SEO-Titel (≤ 60 Zeichen)
  metaDescription      SEO-Beschreibung (≤ 155 Zeichen)
  teaser               Kurztext für Karten
  intro                Einleitungstext der Kategorieseite
  checklist            string[]  „Worauf achten"
  costTraps            string[]  typische Kostenfallen
  sensitive            boolean   ← true bei versicherungen, kredit
  sensitiveNotice?     string    kategoriespezifischer Pflichthinweis
  partnerIds           string[]  Verweis auf partners.ts
  offerTiles           OfferTile[]  2–3 Angebots-Kacheln je Kategorie (Schritt 6.5); partnerId optional/null
  relatedArticleSlugs  string[]  Verweis auf articles.ts
  icon                 Icon-Referenz für die Kachel
```

### `/data/partners.ts` — Partner (v1: nur Platzhalter)
```
Partner:
  id                   "placeholder-handy-1" …
  name                 "Beispiel-Vergleichsportal" (v1: neutrale Platzhalternamen)
  description          Kurzbeschreibung
  features             string[]  3–4 Merkmale
  affiliateUrl         null      ← v1 IMMER null, niemals echte Links
  fallbackUrl          "#"       Ziel solange kein echter Link existiert
  categoryIds          string[]
  status               "placeholder" | "active" | "paused"
  network?             später: "awin" | "financeads" | "adcell" | …
  sensitive            boolean   erbt Pflichthinweis-Logik
```

### `/data/articles.ts` — Ratgeberartikel
```
Article:
  slug, title, metaTitle, metaDescription
  publishedAt, updatedAt     (ISO-Datum, für Schema.org + Sitemap)
  readingMinutes
  categorySlug               Zuordnung
  sections                   { heading, body }[]  strukturierter Inhalt
  faq                        { question, answer }[]
  relatedPartnerIds          string[]
  sensitive                  boolean (erbt von Kategorie)
```

**Warum strukturierte Objekte statt Markdown/MDX in v1:** volle Typsicherheit, kein zusätzliches Tooling, identisches Datenmodell wie später eine DB-Tabelle. (Wechsel zu MDX bleibt möglich, wenn die Artikelzahl wächst.)

---

## 6. Affiliate-Link-Verwaltung

**Grundprinzip: Kein Affiliate-Link steht jemals hart in einer Komponente oder Seite.** Einzige Quelle ist `partners.ts`, einzige Ausgabelogik ist `/lib/affiliate.ts`.

### `/lib/affiliate.ts`
- `getPartnerLink(partner)` → gibt `affiliateUrl` zurück, wenn `status === "active"` und URL vorhanden; sonst `fallbackUrl`. **In v1 liefert das immer den Fallback** — die Logik ist fertig, die Links kommen später nur als Datenänderung.
- `getPartnersByCategory(categorySlug)` → gefilterte, sortierte Partnerliste
- `isSensitivePartner(partner)` / `isSensitiveCategory(category)` → speist Hinweislogik
- `buildRelAttribute()` → liefert konstant `"sponsored nofollow noopener"`
- Vorbereitet, aber v1 inaktiv: `appendSubId(url, subId)` für spätere SubID-/Channel-Zuordnung der Netzwerke

### `PartnerButton.tsx`
- Rendert `<a>` mit `href` aus `getPartnerLink()`, `rel="sponsored nofollow noopener"`, `target="_blank"`
- Zeigt **immer** sichtbares Label „Anzeige" oder „Partnerlink*" direkt am Button (Badge)
- Bei `status === "placeholder"`: visuell erkennbar deaktiviert bzw. mit Hinweis „Partner folgt in Kürze" — kein toter Klick ins Leere
- Kein onClick-Tracking in v1 (optionale Tracking-Hook-Stelle nur als Kommentar dokumentiert)

### Später (nicht v1, aber im Design berücksichtigt):
- Optionale Redirect-Route `/go/[partnerId]` für zentrales, serverseitiges Link-Management und Klickzählung — die Datenstruktur (stabile Partner-IDs) ist dafür bereits ausgelegt. Erfordert Node-Deployment (Variante B).

**Harte Regel für den ersten Commit:** `affiliateUrl` ist bei allen Partnern `null`, alle `status: "placeholder"`. Vor jedem Commit: manueller Check „kein http in partners.ts".

---

## 7. Rechtliche Hinweislogik

Drei Ebenen, jede mit klarer Zuständigkeit:

### Ebene 1 — global (jede Seite)
- **Footer:** Kurzhinweis „Diese Seite finanziert sich über Partnerlinks (Werbung). Für dich entstehen keine Mehrkosten." + Link auf `/affiliate-hinweis`
- Markenzeile „Tarvyo24"

### Ebene 2 — kontextuell: `AffiliateDisclosure.tsx`
- Kompakte, gut sichtbare Box **oberhalb** von Partnerlisten und am Artikelanfang, wenn der Inhalt Partnerlinks enthält
- Text sinngemäß: „Transparenz: Links mit * oder ‚Anzeige' sind Partnerlinks. Erhalten wir eine Vergütung, beeinflusst das nicht unsere Inhalte. Mehr dazu →"
- Wird **automatisch** gerendert, sobald eine Seite Partner aus `partners.ts` einbindet — nicht vom Redakteur manuell zu setzen (Vergessen ausgeschlossen)

### Ebene 3 — sensible Kategorien: `LegalNoticeBox.tsx`
- Wird automatisch gerendert, wenn `category.sensitive === true` (v1: **versicherungen, kredit**)
- Deutlich abgesetzte Box, Inhalt sinngemäß:
  - Tarvyo24 ist **kein** Versicherungs-, Kredit-, Finanz-, Rechts- oder Steuerberater
  - Inhalte sind allgemeine Information, **keine individuelle Empfehlung**
  - Prüfung, Beratung und Abschluss erfolgen ausschließlich beim Anbieter/zugelassenen Partner
  - Bei Kredit zusätzlich: Platzhalter-Absatz für Pflichtangaben nach § 6a PAngV (repräsentatives Beispiel) — wird erst befüllt, wenn echte Kreditpartner live gehen
- Variante `variant="versicherung" | "kredit"` mit angepasstem Text

### Redaktionelle Leitplanken (verbindlich):
- **Keine individuellen Empfehlungen** bei Kredit/Versicherung — Formulierungen wie „für dich am besten" sind tabu; stattdessen „Kriterien, auf die man achten kann"
- Keine Superlative, keine Zins-/Preisversprechen, keine Dringlichkeit
- Ratgeber zu sensiblen Themen enden mit Verweis auf unabhängige Stellen (z. B. Verbraucherzentrale)
- `/vertrauen` erklärt das Finanzierungsmodell offensiv statt es zu verstecken

**Wichtig:** Impressum und Datenschutzerklärung werden strukturell angelegt, aber mit deutlich markierten Platzhaltern — die finalen Texte kommen aus einem Generator/vom Anwalt (siehe offene Fragen).

---

## 8. SEO-Struktur

### Technisch
- **SSG für alles** (`generateStaticParams` + statischer Export) → schnellste TTFB, perfekt crawlbar
- **Metadata API** pro Seite: `title` (Template: `%s | Tarvyo24`), `description`, `canonical`, Open Graph + Twitter Cards aus den Datendateien
- `sitemap.ts` — generiert automatisch aus categories + articles (inkl. `lastModified` aus `updatedAt`)
- `robots.ts` — alles erlaubt, Verweis auf Sitemap
- **Strukturierte Daten (JSON-LD):**
  - `Organization` + `WebSite` im Root-Layout
  - `FAQPage` auf Artikeln mit FAQ-Block
  - `Article` (mit `datePublished`/`dateModified`) auf Ratgeberseiten
  - `BreadcrumbList` auf Kategorie- und Artikelseiten
- Saubere Heading-Hierarchie (genau ein H1 pro Seite), semantisches HTML, `next/image` mit Alt-Texten (im Export-Modus `unoptimized`), `next/font` für Google-Font ohne externen Request (DSGVO + Performance)
- Alle ausgehenden Partnerlinks: `rel="sponsored nofollow"` (Google-Vorgabe für Affiliate)

### Inhaltlich
- **Kategorieseiten** zielen auf Haupt-Keywords („Handyvertrag Vergleich"), **Ratgeber** auf Longtail („Handyvertrag vergleichen worauf achten") → interne Verlinkung Ratgeber ↔ Kategorie in beide Richtungen ist Pflichtbestandteil beider Templates
- Breadcrumbs sichtbar + als Schema
- URL-Konvention: kurz, deutsch, Bindestriche, keine Umlaute in Slugs

### Tracking — nur vorbereitet, nicht aktiv
- `site.ts` → `tracking`-Objekt mit `gscVerification`, `ga4Id`, `gtmId` — **alle `null`**
- Root-Layout enthält die bedingte Einbindungsstelle: Skripte werden **nur gerendert, wenn ID gesetzt UND Consent erteilt** — in v1 also nie
- **GSC-Verifikation** (Meta-Tag) ist consent-frei möglich → kann als erstes aktiviert werden, sobald die Domain steht
- `ConsentBannerPlaceholder.tsx`: dokumentierte Leerstelle mit klarem Kommentar-Vertrag („hier kommt CMP-Lösung hin; bis dahin dürfen keine Tracking-Skripte laden")
- **Harte Regel: kein GA4/GTM ohne funktionierende Consent-Lösung** — auch nicht „kurz zum Testen"

---

## 9. Hostinger-Deployment — ENTSCHIEDEN: Statischer Export

**v1 läuft als statischer Export (Variante A):**
- `output: "export"` in `next.config.ts` → reines HTML/CSS/JS-Verzeichnis (`out/`)
- `images: { unoptimized: true }` (Export-Kompatibilität; geringer Bildbedarf macht das unkritisch)
- Läuft auf **jedem** Hostinger-Paket (auch Shared Webhosting), kein Node-Prozess nötig
- Keine API-Routen, keine Server Actions, keine Middleware — v1 verwendet **kein Feature, das den Export bricht**
- Deploy: `next build` lokal (oder später via GitHub Action) → Inhalt von `out/` per FTP/Hostinger-Git-Deploy nach `public_html`
- Zusätzlich: Domain + SSL über Hostinger, `www`/non-`www`-Redirect, eigene 404-Seite (`not-found.tsx` → `404.html` im Export)

**Spätere Migration zu Node.js (Variante B), wenn Webapp-Features kommen:**
- `output: "export"` entfernen, `next start`/Standalone auf Hostinger VPS bzw. Node-fähigem Paket
- Erst dann möglich/nötig: `/go/[partnerId]`-Redirects, API-Routen, Login, Datenbank
- Der Code bleibt durchgehend beides-kompatibel; die Migration ist eine Config- und Hosting-Änderung, kein Rewrite

---

## 10. Umsetzungsschritte

| # | Schritt | Inhalt | Ergebnis |
|---|---|---|---|
| 1 | Projekt-Setup | Next.js + TS + Tailwind initialisieren, statischer Export konfiguriert, Ordnerstruktur, ESLint/Prettier, `.gitignore` | lauffähiges Grundgerüst |
| 2 | Datenschicht | Typen + `site.ts`, `categories.ts` (8 Kategorien), `partners.ts` (Platzhalter), `articles.ts` (5 Artikel-Gerüste), `lib/affiliate.ts` | Inhalte zentral pflegbar |
| 3 | Design-Basis | Tailwind-Theme (Farben, Typo, Abstände), Container/Button/Card/Badge, Header/Footer/MobileNav | konsistentes UI-Fundament |
| 4 | Affiliate-/Legal-Komponenten | PartnerButton, PartnerCard, AffiliateDisclosure, LegalNoticeBox, ConsentBannerPlaceholder | Kernlogik steht, bevor Seiten gebaut werden |
| 5 | Seiten: Kategorien | `/kategorien` + `[slug]`-Template mit Checkliste, Kostenfallen, Partnern, Hinweislogik | 9 Seiten aus Daten generiert |
| 6 | Seiten: Ratgeber | `/ratgeber` + `[slug]`-Template mit TOC, FAQ, interner Verlinkung | 6 Seiten aus Daten generiert |
| 7 | Start- & Vertrauensseiten | `/`, `/vertrauen`, `/affiliate-hinweis`, `/kontakt` | Marke erlebbar |
| 8 | Rechtsseiten | `/impressum`, `/datenschutz` mit markierten Platzhaltern (noindex bis finale Texte) | Struktur fertig, Texte folgen extern |
| 9 | SEO-Feinschliff | Metadata überall, JSON-LD, `sitemap.ts`, `robots.ts`, OG-Bild, 404 | technisches SEO komplett |
| 10 | QA | Mobile-Check (360px aufwärts), Lighthouse ≥ 90, Linkcheck, „kein-echter-Affiliate-Link"-Check, Export-Build-Test | release-fähig |
| 11 | Erster Commit + Push | Nur nach ausdrücklicher Freigabe | Repo aktuell |
| 12 | Deployment | Statischer Export auf Hostinger, Domain, SSL | Seite live |

---

## 11. Risiken

| Risiko | Einschätzung | Gegenmaßnahme |
|---|---|---|
| Fehlende/falsche Affiliate-Kennzeichnung (Abmahnrisiko Schleichwerbung) | hoch, wenn unsauber | Automatische Disclosure-Logik, Badge direkt am Button, Footer-Hinweis — kein manuelles „Dran-Denken" nötig |
| Beratungsnähe bei Kredit/Versicherung (GewO-Grauzonen) | hoch | LegalNoticeBox automatisch, redaktionelle Leitplanken, keine individuellen Empfehlungen |
| Tracking ohne Consent (DSGVO/TTDSG) | hoch | v1 komplett trackingfrei; Skripte technisch an Consent-Gate gebunden, IDs `null` |
| Impressum/Datenschutz unvollständig | mittel | Blocker vor Go-Live, Platzhalter deutlich gekennzeichnet |
| SEO: dünner Content (5 Artikel) | mittel | Datenstruktur macht Artikel-Nachschub billig; Redaktionsplan nach Launch |
| SEO: YMYL-Kategorien (Kredit/Versicherung → hohe E-E-A-T-Anforderungen) | mittel | /vertrauen-Seite, Quellenverweise, Autorenangabe erwägen; Rankings dort dauern |
| Scope Creep Richtung Webapp | mittel | Harte v1-Abgrenzung; Erweiterbarkeit ist Architektur-, nicht Feature-Thema |
| Partnernetzwerk-Ablehnung (Awin & Co. lehnen Seiten ohne Content ab) | mittel | Erst Content live, dann Netzwerk-Bewerbung — Platzhalter-Strategie passt |

---

## Go-Live-Blocker (verbindlich)

**Impressum und Datenschutzerklärung sind harte Go-Live-Blocker, solange sie nur Platzhalter sind.** Die Seiten `/impressum` und `/datenschutz` existieren seit Schritt 8 als deutlich markierte Struktur-Vorlagen (PlaceholderNotice-Banner, `noindex, follow`). Vor der Veröffentlichung müssen:

1. echte Betreiberangaben (§ 5 DDG) und der finale Datenschutztext (DSGVO) ergänzt werden — aus Generator oder anwaltlicher Prüfung, nicht von Claude erfunden,
2. beide Texte geprüft werden,
3. die PlaceholderNotice-Banner entfernt und die noindex-Entscheidung überprüft werden,
4. das Postfach info@tarvyo24.de tatsächlich eingerichtet sein.

Schritt 12 (Deployment) darf erst nach Erfüllung dieser Punkte erfolgen.

---

## Backlog: spätere Ausbaustufen (nach v1)

### Kredit-Orientierungsrechner mit Tageszins
- kein echtes Kreditangebot, keine Bonitätsprüfung, keine konkrete Empfehlung
- keine personenbezogenen Daten, keine Speicherung — Rechnung ausschließlich im Browser
- nur allgemeine Beispielrechnung: Monatsrate, Gesamtkosten, Zinskosten und vereinfachter Tageszins
- Pflichthinweis: tatsächliche Konditionen nur beim Anbieter oder zugelassenen Partner
- technisch: voraussichtlich Client-Komponente, aber export-kompatibel (keine Server-Verarbeitung)
- rechtlich beachten: sobald der Rechner mit konkreter Kreditwerbung kombiniert wird, greifen Pflichtangaben nach § 17 PAngV

### Krankenversicherungs-Orientierungscheck
- kein verbindlicher Beitragsrechner, keine konkrete Tarifempfehlung
- keine Gesundheitsdaten, keine Diagnosen — keinerlei sensible Daten erheben oder speichern
- keine individuelle Versicherungsberatung, keine Vermittlung im eigenen Namen
- nur allgemeine Orientierung zu GKV, PKV und Zusatzversicherung
- Abschluss, Beratung und Prüfung ausschließlich beim Anbieter oder zugelassenen Partner
- technisch: voraussichtlich Client-Komponente, aber export-kompatibel (keine Server-Verarbeitung)

### Analytics / Besuchertracking (nach Go-Live planen)

**In v1 ist kein Tracking aktiv:** keine GA-ID eingebaut, keine Tracking-Skripte geladen — die Einbindungsstelle im Layout bleibt inaktiv (alle IDs in site.ts null). Eine DSGVO-/TTDSG-konforme Einbindung erfolgt erst nach bewusster Entscheidung.

**Messziele nach Go-Live:**
- tägliche Besucher und Seitenaufrufe
- Traffic-Quellen
- meistbesuchte Kategorien und Ratgeber
- später: Partner-Klicks (SubID-Logik in lib/affiliate.ts ist vorbereitet)

**Optionen (Entscheidung offen):**
1. **Google Search Console** — consent-frei (Meta-Tag-Verifikation vorbereitet in site.ts → tracking.gscVerification); liefert Suchanfragen, Klicks, Indexierung. Erster Schritt nach Go-Live.
2. **Plausible Analytics oder Simple Analytics** — cookielose Analyse, datenschutzfreundlich, je nach Konfiguration ohne Consent-Banner betreibbar (Einschätzung vor Einsatz prüfen).
3. **Später optional GA4** — nur mit funktionierender Consent-Lösung (CMP), niemals ohne (siehe ConsentBannerPlaceholder).

---

## 12. Offene Fragen vor dem Coding

1. ~~Hostinger-Paket / Deployment-Variante~~ → **entschieden: statischer Export (läuft auf jedem Paket)**
2. ~~Domain~~ → **entschieden: https://tarvyo24.de (aktiv, in site.ts als baseUrl hinterlegt)**
3. **Design:** Vorgaben zu Farben/Logo, oder eigenständiges seriöses Farbschema für Tarvyo24 (Vorschlag: Blau/Petrol + warme Akzentfarbe)?
4. **Rechtstexte:** Quelle für Impressum + Datenschutzerklärung (Generator z. B. eRecht24 oder Anwalt)? Wer ist Impressums-Verantwortlicher (Name/Anschrift)?
5. **Kontaktseite:** v1 E-Mail-Link (kein Backend nötig) oder externer Formular-Dienst (z. B. Formspree)?
6. **Artikel-Inhalte:** Ausformulierte Erstversionen von Claude zum Redigieren, oder Rohtexte vom Betreiber?
7. **Partnernetzwerke:** Welche Netzwerke (Awin, financeAds, ADCELL, TARIFCHECK, CHECK24 …)? Kann später entschieden werden.
8. **Consent-Lösung (später):** CMP kostenpflichtig (Cookiebot, Usercentrics) oder Open-Source (klaro!)? Erst bei GA4-Aktivierung nötig.
9. **Autorenkennzeichnung:** „Redaktion Tarvyo24" oder Klarname (besser für E-E-A-T/YMYL)?
