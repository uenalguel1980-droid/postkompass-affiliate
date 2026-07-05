# Tarvyo24

Affiliate- und Vergleichsseite unter [tarvyo24.de](https://tarvyo24.de).

**Claim:** Erst checken. Dann entscheiden.

## Projektziel

Eine hochwertige deutsche Affiliate-Webseite für Verträge, Tarife, Angebote und digitale Partnerprogramme.

## Positionierung

Tarvyo24 hilft Nutzern, Tarife, Angebote und Verträge verständlich zu prüfen, typische Kostenfallen zu erkennen und passende Vergleichsmöglichkeiten oder Partnerangebote aufzurufen. Die Marke tritt eigenständig auf.

## Rechtlicher Hinweis

Die Webseite bietet allgemeine Informationen und Orientierung. Sie erbringt keine individuelle Versicherungsberatung, Finanzberatung, Kreditberatung, Rechtsberatung oder Steuerberatung.

## Tech-Stack

- Next.js (App Router) · TypeScript · Tailwind CSS
- v1: **statischer Export** (`output: "export"`) — läuft ohne Node-Prozess auf jedem Hosting (Ziel: Hostinger)
- Später erweiterbar zur Node.js-/Webapp-Version (siehe [PROJEKTPLAN.md](PROJEKTPLAN.md))

## Entwicklung

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Dev-Server auf http://localhost:3000
npm run build      # Produktions-Build + statischer Export nach out/
npm run lint       # ESLint
npm run format     # Prettier
```

Der Inhalt von `out/` ist das deploybare Artefakt (z. B. per FTP nach `public_html` auf Hostinger). `out/` und `.next/` sind nicht Teil des Repositories.

## Projektstruktur

```
app/          Routen (App Router), Layout, globale Styles
components/   UI-, Layout-, Affiliate-, Legal- und Content-Komponenten
data/         Zentrale Inhalte: site.ts, categories.ts, partners.ts, articles.ts
lib/          Logik, u. a. affiliate.ts (einzige Quelle für Partnerlink-Ausgabe)
types/        Zentrale TypeScript-Typen der Datenschicht
public/       Statische Assets (Favicon, OG-Bild)
```

## Verbindliche v1-Leitplanken

- Keine echten Affiliate-Links (alle Partner `affiliateUrl: null`, Status `placeholder`)
- Kein aktives Tracking (GA4/GTM/GSC-IDs sind `null`); GA4/GTM niemals ohne Consent-Lösung
- Keine API-Routen, keine Server Actions, kein Login, keine Datenbank
- Keine individuellen Empfehlungen bei Kredit/Versicherung; sensible Kategorien erhalten automatische Hinweisboxen

Details und Umsetzungsschritte: [PROJEKTPLAN.md](PROJEKTPLAN.md)
