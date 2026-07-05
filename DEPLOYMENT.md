# Deployment: Tarvyo24 (statischer Export → Hostinger)

**Domain:** https://tarvyo24.de
**Artefakt:** Inhalt von `out/` nach `npm run build`
**Stand:** 06.07.2026 — Deployment vorbereitet, **noch nicht live geschaltet**

---

## 🔴 Go-Live-Blocker (zuerst erfüllen!)

Die Seite darf erst veröffentlicht werden, wenn (siehe auch PROJEKTPLAN.md):

1. ☐ Echte Betreiberangaben im **Impressum** eingepflegt und geprüft (§ 5 DDG)
2. ☐ Finale **Datenschutzerklärung** eingepflegt und geprüft (DSGVO)
3. ☐ **PlaceholderNotice-Banner** von beiden Rechtsseiten entfernt und die **noindex**-Entscheidung überprüft (Kommentare in `app/impressum/page.tsx` und `app/datenschutz/page.tsx`)
4. ☐ Postfach **info@tarvyo24.de** tatsächlich eingerichtet und getestet

---

## Variante A: Manuelles Deployment (FTP/Dateimanager)

1. Lokal bauen:
   ```bash
   npm ci
   npm run build
   ```
2. **Rollback-Vorsorge:** Vor dem ersten Upload (und vor jedem Update) den aktuellen Inhalt von `public_html` im Hostinger-Dateimanager als ZIP sichern bzw. herunterladen. Bei Problemen: Sicherung zurückspielen.
3. Den **Inhalt** von `out/` (nicht den Ordner selbst) per FTP-Programm oder Hostinger-Dateimanager nach `public_html/` hochladen — inklusive `_next/`, `sitemap.xml`, `robots.txt`, `og.png`, `404.html`.
4. Alte Dateien, die es im neuen Build nicht mehr gibt, aus `public_html` entfernen (bei manuellem Upload sonst Karteileichen).

## Variante B: Automatisch per GitHub Action (vorbereitet)

Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

**Verhalten:**
- Jeder Push auf `main` → **nur Build** (CI-Prüfung, Export als Artefakt, 7 Tage abrufbar)
- Deployment → **nur manuell** über GitHub: *Actions → „Deploy Tarvyo24" → Run workflow*
- Nach erfolgreichem Go-Live kann auf Auto-Deploy umgestellt werden (eine dokumentierte if-Zeile im Workflow)

**Diese GitHub Secrets musst du eintragen** (Repo → *Settings → Secrets and variables → Actions → New repository secret*):

| Secret | Inhalt | Beispiel |
|---|---|---|
| `FTP_SERVER` | FTP-Host aus dem Hostinger-Panel | `ftp.tarvyo24.de` o. Ä. |
| `FTP_USERNAME` | FTP-Benutzername | aus Hostinger → FTP-Konten |
| `FTP_PASSWORD` | FTP-Passwort | aus Hostinger → FTP-Konten |
| `FTP_TARGET_DIR` | Zielverzeichnis **mit** Slash am Ende | `public_html/` |

Es liegen **keine Zugangsdaten im Repository** — der Workflow funktioniert erst, wenn die Secrets in GitHub hinterlegt sind.

**Verwendete Action:** `SamKirkland/FTP-Deploy-Action@v4.3.5` — etablierte Standard-Action für statische FTP/FTPS-Deployments: inkrementeller Sync (lädt nur Änderungen), löscht per Default nichts, benötigt keine erweiterten Workflow-Rechte (`permissions: contents: read`), Version gepinnt.

## Hostinger-Hinweise

- Zielverzeichnis ist das Web-Root der Domain, üblicherweise `public_html/`
- `.htaccess`: für den statischen Export zunächst nicht nötig; `404.html` wird von Hostinger (LiteSpeed/Apache) automatisch als Fehlerseite verwendet — nach Go-Live mit einer Test-URL prüfen
- FTP-Zugang: im Hostinger-Panel unter *Dateien → FTP-Konten*; FTPS (explizites TLS) verwenden

## Domain-/SSL-Checkliste (Hostinger-Panel)

- ☐ Domain tarvyo24.de zeigt auf das Hosting (DNS/Nameserver)
- ☐ SSL-Zertifikat aktiv (Hostinger: kostenloses Let's-Encrypt aktivieren)
- ☐ HTTPS-Weiterleitung erzwingen (http → https)
- ☐ www → non-www Weiterleitung (oder umgekehrt — konsistent zu `baseUrl` in `data/site.ts`, aktuell **ohne** www: `https://tarvyo24.de`)

## Nach dem Go-Live prüfen

- ☐ Stichproben: `/`, `/kategorien/handyvertrag/`, `/ratgeber/handyvertrag-vergleichen/`, `/impressum/`, `/datenschutz/`, eine Fantasie-URL (→ 404-Seite)
- ☐ `https://tarvyo24.de/sitemap.xml` und `https://tarvyo24.de/robots.txt` erreichbar
- ☐ **PageSpeed Insights** auf die Live-URL laufen lassen (Ziel: alle Kategorien ≥ 90) — ersetzt die in der QA aufgeschobene Lighthouse-Messung
- ☐ Google Search Console einrichten: Property anlegen, Verifikations-Code in `data/site.ts` → `tracking.gscVerification` eintragen (consent-frei), neu deployen, Sitemap einreichen
- ☐ Social-Preview testen (z. B. Link in Messenger einfügen → OG-Bild/Titel prüfen)

## Rollback

- Manuell: gesicherte `public_html`-ZIP zurückspielen (siehe Variante A, Schritt 2)
- GitHub Action: vorherigen Commit auschecken bzw. per `git revert` zurücknehmen und Deployment erneut manuell auslösen; zusätzlich hält jeder Workflow-Lauf das gebaute `out/` 7 Tage als Artefakt vor
