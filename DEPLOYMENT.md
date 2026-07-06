# Deployment: Tarvyo24 (statischer Export → Hostinger)

**Domain:** https://tarvyo24.de
**Artefakt:** Inhalt von `out/` nach `npm run build`
**Stand:** 06.07.2026 — **✅ LIVE.** Deployment erfolgreich, Nach-Go-Live-QA bestanden, Search Console verifiziert, Sitemap eingereicht.

---

## 🔴 Finale Go-Live-Checkliste

**Stand 06.07.2026: Alle Punkte abgearbeitet — die Seite ist live.** Die Checkliste bleibt als Referenz für künftige Deployments erhalten.

**Vor dem Deployment (Blocker):**

1. ☑ **Impressum vollständig** (§ 5 DDG) — **erledigt am 06.07.2026** mit echten Betreiberangaben: Marija Beisler (Einzelunternehmen), ladungsfähige Anschrift in Duingen, E-Mail, Telefon, Verantwortliche nach § 18 Abs. 2 MStV. Bewusst ohne USt-ID (nicht vorhanden) und ohne Steuernummer. Platzhalter-Banner entfernt.
   ⚠️ **Vom Betreiber zu bestätigen:** Die VSBG-Erklärung wurde mit der üblichen Standard-Formulierung eingesetzt („nicht bereit oder verpflichtet, an Streitbeilegungsverfahren teilzunehmen"). Falls stattdessen Teilnahmebereitschaft gewünscht ist, bitte melden — eine Zeile.
2. ☑ **Datenschutzerklärung eingepflegt** — **erledigt 06.07.2026**: vollständiger Text (19 Abschnitte, Stand 06.07.2026) in `app/datenschutz/page.tsx`, Platzhalter-Banner entfernt. Passt zum technischen Ist-Zustand (kein Tracking, keine Analytics, keine echten Affiliate-Links, kein Formular, kein Newsletter).
   ⚠️ **Empfehlung:** Betreiber sollte den Text vor dem Livegang final gegenlesen/prüfen (lassen). **Bei späteren Änderungen nachziehen:** Analytics-Einführung, aktive Affiliate-Netzwerke (Netzwerk-Tracking!), Kontaktformular, Newsletter (siehe Abschnitt 19 der Erklärung).
3. ☑ **info@tarvyo24.de funktioniert** — **erledigt 06.07.2026**: Postfach bei Hostinger eingerichtet, aktiv und erfolgreich getestet (Testmail + Rückantwort). Adresse wird auf /kontakt und im Impressum verwendet (zentrale Quelle: `data/site.ts`)
4. ☑ **Banner/noindex geprüft** — **erledigt 06.07.2026**: Beide Rechtsseiten sind final, beide PlaceholderNotice-Banner entfernt. **noindex-Entscheidung:** beide Rechtsseiten bleiben dauerhaft `noindex, follow` (kein SEO-Wert, über Footer erreichbar — Impressumspflicht dadurch unberührt); alle Inhaltsseiten indexierbar.
5. ☑ **Domain/SSL aktiv** — **erledigt**: tarvyo24.de liefert über https mit gültigem Zertifikat, http→https-Redirect (301) verifiziert. ⚠️ Offen als Kosmetik: www→non-www-Redirect (www liefert 200 statt 301; durch Canonical-Tags gemildert — bei Gelegenheit im Hostinger-Panel einrichten)
6. ☑ **GitHub Secrets eingetragen** — **erledigt** (FTP_SERVER als IP, FTP_USERNAME, FTP_PASSWORD; FTP_TARGET_DIR entfällt, server-dir fest `./`)

**Deployment:**

7. ☑ **Deployment ausgelöst** — **erledigt 06.07.2026**: manueller Workflow-Lauf erfolgreich, Upload direkt ins Webroot (nach zwei behobenen Anlaufproblemen: `security: loose` wegen FTP-über-IP, `server-dir: ./` wegen FTP-Login im Webroot)

**Nach dem Deployment:**

8. ☑ **Live-Seite geprüft** — **erledigt 06.07.2026**: alle 23 Seiten + Assets HTTP 200, 404-Status korrekt, Startseite/Impressum/Datenschutz inhaltlich verifiziert, Brotli-Kompression aktiv
9. ☑ **sitemap.xml erreichbar** — **erledigt**: echte XML-Sitemap, alle 19 URLs einzeln verifiziert
10. ☑ **robots.txt erreichbar** — **erledigt**: korrekte Textdatei mit Sitemap-Verweis
11. ☑ **PageSpeed geprüft** — **erledigt 06.07.2026**: Mobile Performance 100 / Accessibility 96 / Best Practices 100 / SEO 100 / Agentic Browsing 2/2; Desktop vollständig grün (100 %)
12. ☑ **Google Search Console** — **erledigt 06.07.2026**: Property per Meta-Tag verifiziert (Code in data/site.ts), **Sitemap erfolgreich eingereicht**

**Wichtiger Vorfall + Lösung (06.07.2026):** Die Hostinger-CDN-Bot-Protection (Sicherheitsstufe „Medium") lieferte an alle Nicht-Browser-Clients — auch Crawler, inklusive robots.txt/sitemap.xml — eine JS-Challenge-Seite mit noindex aus. **Behoben durch Umstellung der CDN-Sicherheitsstufe auf „Low"**; danach extern verifiziert, dass robots.txt, sitemap.xml und Seiteninhalte an Nicht-Browser-Clients korrekt ausgeliefert werden. Bei künftigen Änderungen an Hostinger-Sicherheitseinstellungen diesen Punkt erneut prüfen.

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
| `FTP_SERVER` | Hostinger-**FTP-IP** (der Domain-Hostname zeigt auf die Webserver und funktioniert für FTP nicht) | `152.239.125.180` |
| `FTP_USERNAME` | FTP-Benutzername | aus Hostinger → FTP-Konten |
| `FTP_PASSWORD` | FTP-Passwort | aus Hostinger → FTP-Konten |

**Hinweis (06.07.2026):** Das frühere Secret `FTP_TARGET_DIR` wird nicht mehr verwendet und kann in GitHub gelöscht werden. Der Hostinger-FTP-Login startet bereits im Webroot (`public_html`) — `server-dir` ist im Workflow fest auf `./` gesetzt (der Wert `public_html/` erzeugte fälschlich `public_html/public_html/`).

Es liegen **keine Zugangsdaten im Repository** — der Workflow funktioniert erst, wenn die Secrets in GitHub hinterlegt sind.

**Verwendete Action:** `SamKirkland/FTP-Deploy-Action@v4.3.5` — etablierte Standard-Action für statische FTP/FTPS-Deployments: inkrementeller Sync (lädt nur Änderungen), löscht per Default nichts, benötigt keine erweiterten Workflow-Rechte (`permissions: contents: read`), Version gepinnt.

### Zwei Deploy-Modi (seit 06.07.2026)

Beim manuellen Start (*Run workflow*) gibt es eine Checkbox **„Clean-Deploy"**:

- **Checkbox AUS (Standard):** normaler inkrementeller Sync gegen die serverseitige State-Datei (`.ftp-deploy-sync-state-v2.json`). Für alle regulären Deployments.
- **Checkbox AN (nur zur Reparatur):** `dangerous-clean-slate` — löscht **alle** Dateien in `public_html` und lädt den kompletten Export frisch hoch. Nur verwenden, wenn der inkrementelle Sync mit 550-Fehlern scheitert (beschädigter Serverbaum durch abgebrochene Läufe).

**Checkliste für einen Clean-Deploy:**

1. ☐ ZIP-Backup von `public_html` im Hostinger-Dateimanager anlegen (Rollback-Vorsorge)
2. ☐ Notieren, ob `.htaccess` und/oder `.well-known/` in `public_html` existieren — beide werden mitgelöscht!
3. ☐ Workflow mit Checkbox „Clean-Deploy" starten; Dauer: mehrere Minuten, **die Seite ist währenddessen nicht erreichbar**
4. ☐ Danach prüfen: Startseite, 2–3 Unterseiten, `robots.txt`, `sitemap.xml` (alle HTTP 200)
5. ☐ **http→https-Redirect testen** (`http://tarvyo24.de` muss 301 auf https liefern). Falls der Redirect über eine gelöschte `.htaccess` lief: im Hostinger-Panel „HTTPS erzwingen" erneut aktivieren
6. ☐ CDN-Sicherheitsstufe unverändert „Low"? (Nur relevant, falls im Panel gearbeitet wurde — nach Panel-Änderungen Crawler-Zugriff auf robots.txt/sitemap.xml erneut prüfen)

**Hintergrund (Vorfall 06.07.2026):** Mehrere abgebrochene FTP-Läufe (Ursache: 30-s-Default-Timeout) hinterließen unter `_next/static/` einen teilweise übertragenen, inkonsistenten Dateibaum und eine veraltete Sync-State-Datei. Folge: `FTPError 550` bei Folgeläufen. Der Timeout wurde auf 120 s erhöht, der State-Name auf v2 gewechselt und der Clean-Deploy-Modus als kontrollierter Reparaturweg ergänzt. Nicht betroffen von Clean-Deploys: E-Mail-Postfächer, SSL-Zertifikate, DNS, CDN-Einstellungen (liegen alle außerhalb von `public_html`).

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

## Webanalyse aktivieren (Plausible — vorbereitet, standardmäßig AUS)

**Stand 06.07.2026:** Die Plausible-Integration ist im Code vorbereitet, aber **deaktiviert**. Gate: `data/site.ts` → `tracking.plausibleDomain` (aktuell `null`). Solange der Wert `null` ist, rendert der Build **kein** externes Script — verifiziert im statischen Export.

Plausible ist cookielos und EU-gehostet; es wird ohne Cookies und ohne geräteübergreifende Identifier gemessen. Trotzdem gilt: **Die Datenschutzerklärung muss im selben Commit angepasst werden wie die Aktivierung** (Leitplanke „Datenschutz-Drift", PROJEKTPLAN/Bauabschnitt 2).

**Aktivierungs-Checkliste:**

1. ☐ **Plausible-Konto anlegen** (https://plausible.io, EU-Anbieter, kostenpflichtig ~9 €/Monat) und dort die Site `tarvyo24.de` hinzufügen
2. ☐ **`plausibleDomain` setzen:** in `data/site.ts` → `tracking.plausibleDomain: "tarvyo24.de"` (Wert = die in Plausible eingetragene Domain, ohne `https://`)
3. ☐ **Datenschutzerklärung Abschnitt 6 im selben Commit ausbauen** (`app/datenschutz/page.tsx`): Überschrift und Inhalt anpassen — Plausible als aktiver Dienst beschreiben (Anbieter Plausible Insights OÜ, Estland/EU; cookielos; keine Einwilligung über Banner, Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO / berechtigtes Interesse an reichweitenbezogener Statistik; verarbeitete Daten; Hinweis auf Plausible-Datenschutzinfos). „Stand“-Datum der Erklärung aktualisieren. **Empfehlung: Formulierung vor dem Deploy vom Betreiber prüfen lassen.**
4. ☐ **Build prüfen:** `npm run build` — danach stichprobenartig in `out/index.html` kontrollieren, dass das Script `plausible.io/js/script.js` mit korrektem `data-domain` im `<head>` liegt
5. ☐ **Commit + Push auf `main`** (ein Commit für Gate + Datenschutzerklärung)
6. ☐ **Deployment manuell auslösen:** GitHub → *Actions → „Deploy Tarvyo24" → Run workflow*
7. ☐ **Nach dem Deploy verifizieren:** Live-Seite aufrufen → im Plausible-Dashboard erscheint der Besuch; zusätzlich prüfen, dass `/datenschutz/` den neuen Abschnitt 6 zeigt

**Deaktivieren:** `plausibleDomain` wieder auf `null` setzen, Datenschutzerklärung zurückführen, Build, Commit, manueller Deploy.

## Rollback

- Manuell: gesicherte `public_html`-ZIP zurückspielen (siehe Variante A, Schritt 2)
- GitHub Action: vorherigen Commit auschecken bzw. per `git revert` zurücknehmen und Deployment erneut manuell auslösen; zusätzlich hält jeder Workflow-Lauf das gebaute `out/` 7 Tage als Artefakt vor
