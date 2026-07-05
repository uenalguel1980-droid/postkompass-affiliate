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

Der Inhalt von `out/` ist das deploybare Artefakt (z. B. per FTP nach `public_html` auf Hostinger). `out/` und `.next/` sind nicht Teil des Repositories. Deployment-Anleitung, GitHub-Action-Setup und Go-Live-Checkliste: [DEPLOYMENT.md](DEPLOYMENT.md)

## Projektstruktur

```
app/          Routen (App Router), Layout, globale Styles
components/   UI-, Layout-, Affiliate-, Legal- und Content-Komponenten
data/         Zentrale Inhalte: site.ts, categories.ts, partners.ts, articles.ts
lib/          Logik, u. a. affiliate.ts (einzige Quelle für Partnerlink-Ausgabe)
types/        Zentrale TypeScript-Typen der Datenschicht
public/       Statische Assets (Favicon, OG-Bild)
```

## Hinweis zu Ordner- und Repository-Namen

Historisch bedingt heißen der lokale Projektordner und das GitHub-Repository noch `postkompass-affiliate` — dies ist die einzige verbleibende technische Nennung des alten Arbeitstitels und hat keinerlei Auswirkung auf die Website (Marke, Code, Export und Metadaten verwenden ausschließlich Tarvyo24).

Empfehlung für später (manuell, außerhalb der laufenden Entwicklungsumgebung):
- GitHub-Repository umbenennen in **`tarvyo24-affiliate`** (GitHub leitet alte URLs automatisch weiter; danach lokal `git remote set-url` anpassen)
- Lokalen Ordner bei Gelegenheit in **`tarvyo24-affiliate`** umbenennen (nicht während einer laufenden Session/IDE-Anbindung)
- Ein späteres Hosting-/Deployment-Projekt (Hostinger, ggf. Vercel) direkt **`tarvyo24-affiliate`** nennen

## Verbindliche v1-Leitplanken

- Keine echten Affiliate-Links (alle Partner `affiliateUrl: null`, Status `placeholder`)
- Kein aktives Tracking (GA4/GTM/GSC-IDs sind `null`); GA4/GTM niemals ohne Consent-Lösung
- Keine API-Routen, keine Server Actions, kein Login, keine Datenbank
- Keine individuellen Empfehlungen bei Kredit/Versicherung; sensible Kategorien erhalten automatische Hinweisboxen

Details und Umsetzungsschritte: [PROJEKTPLAN.md](PROJEKTPLAN.md)
