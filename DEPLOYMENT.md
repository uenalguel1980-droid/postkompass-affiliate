# Deployment: Tarvyo24 (statischer Export → Hostinger)

**Domain:** https://tarvyo24.de
**Artefakt:** Inhalt von `out/` nach `npm run build`
**Stand:** 06.07.2026 — Deployment vorbereitet, **noch nicht live geschaltet**

---

## 🔴 Finale Go-Live-Checkliste

**Stand der Vorbereitung (06.07.2026):** Technisch ist alles bereit; die Punkte 1–3 sind offene Blocker, die nur der Betreiber liefern kann. Reihenfolge einhalten — erst wenn 1–6 erledigt sind, darf deployed werden.

**Vor dem Deployment (Blocker):**

1. ☑ **Impressum vollständig** (§ 5 DDG) — **erledigt am 06.07.2026** mit echten Betreiberangaben: Marija Beisler (Einzelunternehmen), ladungsfähige Anschrift in Duingen, E-Mail, Telefon, Verantwortliche nach § 18 Abs. 2 MStV. Bewusst ohne USt-ID (nicht vorhanden) und ohne Steuernummer. Platzhalter-Banner entfernt.
   ⚠️ **Vom Betreiber zu bestätigen:** Die VSBG-Erklärung wurde mit der üblichen Standard-Formulierung eingesetzt („nicht bereit oder verpflichtet, an Streitbeilegungsverfahren teilzunehmen"). Falls stattdessen Teilnahmebereitschaft gewünscht ist, bitte melden — eine Zeile.
2. ☑ **Datenschutzerklärung eingepflegt** — **erledigt 06.07.2026**: vollständiger Text (19 Abschnitte, Stand 06.07.2026) in `app/datenschutz/page.tsx`, Platzhalter-Banner entfernt. Passt zum technischen Ist-Zustand (kein Tracking, keine Analytics, keine echten Affiliate-Links, kein Formular, kein Newsletter).
   ⚠️ **Empfehlung:** Betreiber sollte den Text vor dem Livegang final gegenlesen/prüfen (lassen). **Bei späteren Änderungen nachziehen:** Analytics-Einführung, aktive Affiliate-Netzwerke (Netzwerk-Tracking!), Kontaktformular, Newsletter (siehe Abschnitt 19 der Erklärung).
3. ☐ **info@tarvyo24.de funktioniert** — Postfach bei Hostinger einrichten und Testmail senden/empfangen (Adresse wird auf /kontakt und im Impressum verwendet; zentrale Quelle: `data/site.ts`)
4. ☑ **Banner/noindex geprüft** — **erledigt 06.07.2026**: Beide Rechtsseiten sind final, beide PlaceholderNotice-Banner entfernt. **noindex-Entscheidung:** beide Rechtsseiten bleiben dauerhaft `noindex, follow` (kein SEO-Wert, über Footer erreichbar — Impressumspflicht dadurch unberührt); alle Inhaltsseiten indexierbar.
5. ☐ **Domain/SSL aktiv** — tarvyo24.de zeigt aufs Hosting, Let's-Encrypt aktiv, https erzwungen, www→non-www
6. ☐ **GitHub Secrets eingetragen** (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD, FTP_TARGET_DIR)

**Deployment:**

7. ☐ **Deployment manuell auslösen** — GitHub → Actions → „Deploy Tarvyo24" → Run workflow

**Nach dem Deployment:**

8. ☐ **Live-Seite geprüft** — Stichproben: /, /kategorien/handyvertrag/, /ratgeber/handyvertrag-vergleichen/, /impressum/, /datenschutz/, Fantasie-URL (→ 404)
9. ☐ **sitemap.xml erreichbar** — https://tarvyo24.de/sitemap.xml
10. ☐ **robots.txt erreichbar** — https://tarvyo24.de/robots.txt
11. ☐ **PageSpeed geprüft** — PageSpeed Insights auf Live-URL, Ziel ≥ 90 in allen Kategorien
12. ☐ Google Search Console einrichten + Sitemap einreichen (siehe unten)

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
