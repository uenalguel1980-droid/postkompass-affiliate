# PARTNER.md — Affiliate-Aktivierungs-Runbook (Tarvyo24)

**Stand:** 09.07.2026 · **Status:** 8 aktive Partner-Einträge (7 Programme), alle über Awin — `buchhaltung-cloud` = **Lexware Office** (Programm 13787, Pilot), `gewerbe-pdf-tool` = **Wondershare PDFelement** (Programm 20202, Nebenpartner, nur gewerbe-tools), `gewerbe-it-hardware` = **it-versand.com** (Programm 121708, Nebenpartner, nur gewerbe-tools), `tarif-tarifcheck` = **Tarifcheck.de** (Programm 11202, nur unkritische Tarifkategorien: strom-gas, internet-dsl, handyvertrag — nicht auf Versicherungs-/Kredit-/Kontoseiten ohne separate Prüfung), `energie-check24` + `dsl-check24` = **CHECK24 Partnerprogramm** (Programm 9364, zwei Einträge wegen kategoriespezifischer Deeplinks/Clickrefs; NUR strom-gas und internet-dsl — Mobilfunk, Versicherung, Kredit, Konto, Reise und Mietwagen bewusst nicht aktiviert, Provisionsprüfung liegt nur für Strom/Gas/DSL vor), `handy-congstar` = **congstar DE** (Programm 11938, NUR handyvertrag — DSL-/Zuhause-Angebote nicht aktiviert; Auflagen: kein Brand-Bidding/SEM, keine Gutschein-/Cashback-Versprechen, keine E-Mail-Werbung, kein eBay-Vertrieb), `dsl-netcologne` = **NetCologne DE** (Programm 13664, NUR internet-dsl — regionaler Anbieter Köln/Bonn/Aachen und Umgebung, nie als bundesweit darstellen; Auflagen: kein Paid Search/Social Advertising ohne Freigabe, „NetCologne"/„NetAachen" bei Paid Ads ausschließen, keine Bonus-/Klickzwang-Modelle, keine Garantieaussagen). Die übrigen 15 Partner bleiben Platzhalter (`affiliateUrl: null`, `status: "placeholder"`).

Dieses Dokument ist der verbindliche Prozess, um später echte Partnerprogramme zu aktivieren — ohne rechtliche oder technische Fehler. Es ergänzt [PROJEKTPLAN.md](PROJEKTPLAN.md) (Architektur) und [DEPLOYMENT.md](DEPLOYMENT.md) (Deploy-Runbook).

---

## 1. Grundregeln (gelten immer, keine Ausnahmen)

1. **Einzige Link-Quelle:** Echte Affiliate-URLs stehen ausschließlich in `data/partners.ts` (Feld `affiliateUrl`), niemals in Komponenten, Artikeln oder sonstigen Dateien. Komponenten beziehen Links nur über `lib/affiliate.ts`.
2. **rel-Attribut:** Jeder ausgehende Partnerlink trägt `rel="sponsored nofollow noopener noreferrer"` — zentral erzeugt durch `buildRelAttribute()` in `lib/affiliate.ts`. Nicht überschreiben.
3. **Werbekennzeichnung:** Badge `variant="ad"` an jedem Werbeplatz und `AffiliateDisclosure` vor Werbeblöcken bleiben bestehen. Ein aktivierter Partner ändert daran nichts — die Kennzeichnung existiert bereits.
4. **Datenschutz im selben Commit:** Jede Aktivierung, die Datenflüsse ändert (erster echter Link eines Netzwerks), wird im **selben Commit** mit der Anpassung der Datenschutzerklärung (Abschnitt 7) committet. Niemals „Link zuerst, Datenschutz später".
5. **Deployment bleibt manuell:** Push auf `main` baut nur (CI). Live geht eine Aktivierung erst durch *Actions → „Deploy Tarvyo24" → Run workflow* (Betreiberin).
6. **Sensible Kategorien zuletzt:** `versicherungen` und `kredit` werden als letzte aktiviert (siehe Abschnitt 6). Pilot-Aktivierung erfolgt in einer unkritischen Kategorie (beschlossen: `buchhaltungssoftware`).
7. **Nur https:** In `affiliateUrl` kommen ausschließlich `https://`-URLs. Während der Platzhalter-Phase gilt weiterhin: kein `http` in `partners.ts`.
8. **Namens-/Logonutzung:** Echte Partnernamen und Logos erst nach schriftlicher Programmfreigabe des Netzwerks verwenden (bis dahin bleiben die neutralen Platzhalternamen).

## 2. Netzwerke & Bewerbungsreihenfolge

Beschlossene Prioritätenreihenfolge für Bewerbungen (Nutzer-/Betreiberaufgabe):

| Prio | Netzwerk | `network`-Wert | SubID-Parameter | Hinweis |
|---|---|---|---|---|
| 1 | ADCELL | `adcell` | `subid` | Einstiegsfreundlich, Software/Tools gut vertreten |
| 2 | Awin | `awin` | `clickref` | Auch Telekom-Programm läuft üblicherweise hier — bei Zusage prüfen |
| 3 | TARIFCHECK | `tarifcheck` | ⚠️ im Backend prüfen | Tarif-/Versicherungsvergleiche |
| 4 | financeAds | `financeads` | `subid` | Finanzprodukte — § 17 PAngV bei Kreditwerbung beachten |
| 5 | CHECK24 Partnerprogramm | `check24` | ⚠️ im Backend prüfen | Eigenes Programm, strengere Freigaben üblich |
| — | Direktpartnerschaften | `direct` / `telekom` | ⚠️ je Programm prüfen | Nur mit schriftlicher Vereinbarung |

Die verifizierten SubID-Parameter sind in `lib/affiliate.ts` → `SUBID_PARAM_BY_NETWORK` hinterlegt. **Mit ⚠️ markierte Werte vor der ersten Aktivierung in der Netzwerk-Doku bzw. im Partner-Backend verifizieren und dort ergänzen.**

## 3. SubID-Konvention

**Format:** `tarvyo24_[kategorie]_[platzierung]`

- Segmente durch `_` getrennt; innerhalb eines Segments nur Kleinbuchstaben, Ziffern, Bindestrich (Kategorie-Slugs wie `internet-dsl` bleiben unverändert).
- `[kategorie]` = Kategorie-Slug aus `data/categories.ts`.
- `[platzierung]` = einer dieser Werte:
  - `partnercard` — PartnerCard auf der Kategorieseite
  - `offertile` — OfferTile-Kachel auf der Kategorieseite
  - `ratgeber` — kontextueller Verweis aus einem Ratgeberartikel

**Beispiele:** `tarvyo24_buchhaltungssoftware_partnercard` · `tarvyo24_internet-dsl_offertile` · `tarvyo24_handyvertrag_ratgeber`

**Technik:** `buildSubId(categorySlug, placement)` erzeugt die SubID, `appendSubId(url, subId, paramName)` hängt sie mit dem netzwerkspezifischen Parameternamen an (beides in `lib/affiliate.ts`, vorbereitet, bisher unbenutzt). Ob die SubID im Deeplink fest hinterlegt oder zur Laufzeit angehängt wird, wird bei der ersten Aktivierung entschieden — für den statischen Export ist der fest im `affiliateUrl` hinterlegte Deeplink inkl. SubID der einfachste Weg.

**Zweck:** Auswertung im Netzwerk-Backend nach Kategorie und Platzierung — ohne eigenes Tracking, ohne personenbezogene Daten auf unserer Seite.

## 4. Aktivierungs-Checkliste je Partner

Für **jeden einzelnen Partner** vollständig abarbeiten. Keine Sammel-Aktivierungen ohne Einzelprüfung.

**Voraussetzungen:**

1. ☐ **Netzwerk-Zusage liegt vor** — Programmaufnahme schriftlich bestätigt (E-Mail/Backend-Status „freigegeben"). Auflagen aus der Freigabe notieren → Feld `activationNote` am Partner in `data/partners.ts`.
2. ☐ **Echter Deeplink vorhanden** — aus dem Netzwerk-Backend generiert, `https://`, führt auf die fachlich passende Zielseite (nicht nur Startseite). SubID nach Konvention (Abschnitt 3) eingebaut; Parametername gegen `SUBID_PARAM_BY_NETWORK` bzw. Netzwerk-Doku verifiziert.

**Datenpflege (`data/partners.ts` — einzige Änderungsstelle):**

3. ☐ **Partnername korrekt** — Platzhaltername durch echten Programm-/Anbieternamen ersetzen („(Platzhalter)" entfernen); Beschreibung und `features` fachlich gegen das echte Angebot prüfen; Namens-/Logo-Auflagen des Netzwerks beachten.
4. ☐ **Kategoriezuordnung korrekt** — `categorySlugs` passt zum echten Angebot; Partner erscheint auf keiner unpassenden Kategorieseite. Falls eine OfferTile auf den Partner zeigen soll: `partnerId` in `data/categories.ts` setzen.
5. ☐ **Felder setzen:** `affiliateUrl` (Deeplink inkl. SubID), `status: "active"`, `network` korrekt, `activationNote` mit Netzwerk-Auflagen befüllt.

**Rechtliche Prüfung:**

6. ☐ **Affiliate-Hinweis sichtbar** — auf der betroffenen Kategorieseite (und ggf. Ratgeberseite) lokal prüfen: Badge „Anzeige" am Werbeplatz + `AffiliateDisclosure` vor dem Werbeblock werden gerendert.
7. ☐ **rel geprüft** — der gerenderte Link trägt `rel="sponsored nofollow noopener noreferrer"` (im Build-Output bzw. Browser-DevTools nachsehen, nicht nur im Code).
8. ☐ **Datenschutz Abschnitt 7 geprüft/ergänzt** — `app/datenschutz/page.tsx`: Beim **ersten echten Link überhaupt** muss die Aussage „keine echten Affiliate-Links aktiv" ersetzt werden durch die Beschreibung des tatsächlichen Zustands (welche Netzwerke, was beim Klick passiert, Verantwortlichkeit des Netzwerks). Bei jedem **weiteren Netzwerk**: prüfen, ob es bereits abgedeckt ist, sonst ergänzen. „Stand"-Datum aktualisieren. **Im selben Commit wie die Link-Aktivierung.** Empfehlung: Formulierung von der Betreiberin freigeben lassen.
9. ☐ **Bei Kredit-Partnern: § 17 PAngV / Pflichtangaben** — siehe Abschnitt 6. Ohne diese Prüfung wird kein Kredit-Partner aktiv.

**Technische Prüfung & Release:**

10. ☐ **Build prüfen** — `npm run build` grün; danach im `out/`-Export stichprobenartig: Link vorhanden, `rel` korrekt, keine `http://`-URL, SubID im Link.
11. ☐ **Commit/Push** — ein Commit pro Aktivierung (Datenpflege + Datenschutz zusammen), nachvollziehbare Message, Push auf `main` (nur nach Freigabe im Prompt, falls Claude ausführt).
12. ☐ **Manuelles Deployment** — GitHub → *Actions → „Deploy Tarvyo24" → Run workflow* (Betreiberin).
13. ☐ **Live-Test des Links** — auf tarvyo24.de: Link klicken → Zielseite korrekt, Weiterleitung über das Netzwerk funktioniert; im Netzwerk-Backend prüfen, dass der Klick mit korrekter SubID ankommt. Rechtsseiten-Stichprobe: `/datenschutz/` zeigt den neuen Abschnitt-7-Stand.

## 5. Status-Lebenszyklus

`placeholder` → `active` → ggf. `paused`

- **`paused`** (Programm gekündigt, Konditionen geändert, Auflagenverstoß): `status: "paused"` setzen — `getPartnerLink()` liefert dann automatisch wieder die `fallbackUrl`, der Partner wird als Platzhalter dargestellt. `affiliateUrl` kann zur Dokumentation stehen bleiben, **muss** aber entfernt werden, wenn das Netzwerk die Löschung der Links verlangt.
- Datenschutzerklärung prüfen, wenn das **letzte** aktive Programm eines Netzwerks pausiert wird (Abschnitt 7 ggf. zurückführen).
- Deaktivierung folgt demselben Weg: Datenpflege → Build → Commit/Push → manuelles Deployment.

## 6. Sonderregeln Kredit & Versicherung (SENSIBEL)

Diese Kategorien werden **zuletzt** aktiviert. Zusätzlich zur Checkliste in Abschnitt 4:

- **Technisch erzwungen (nicht entfernen):** `sensitive: true` am Partner/an der Kategorie rendert die `LegalNoticeBox` VOR allen Partnerinhalten.
- **Kredit — § 17 PAngV:** Sobald Kreditwerbung mit Zinssätzen/Konditionen erscheint, sind Pflichtangaben mit repräsentativem Beispiel (2/3-Regel) erforderlich. Solange unsere Seite **keine konkreten Konditionen** nennt, sondern neutral auf den Vergleich verlinkt, entsteht die Pflicht i. d. R. beim Portal/der Bank — **jede** Formulierung mit Zahlen (Zinssatz, „ab x %", Beispielraten) auf unserer Seite löst die Pflichtangaben-Prüfung aus. Im Zweifel: keine Zahlen nennen. ⚠️ Vor der ersten Kredit-Aktivierung Formulierungen rechtlich prüfen lassen — das ist Betreiber-Entscheidung, keine Claude-Entscheidung.
- **Keine individuellen Empfehlungen, keine Superlative, keine Garantien** („bester Kredit", „günstigste Versicherung" sind tabu — redaktionelle Leitplanke, gilt auch in Ratgebern).
- **Versicherung:** Vermittlung/Beratung erfolgt ausschließlich beim zugelassenen Partner — Formulierungen dürfen keinen Beratungseindruck erwecken (`legalNotice` in `data/site.ts` bleibt maßgeblich).

## 7. Schnellreferenz: Was wo geändert wird

| Änderung | Datei |
|---|---|
| Link, Name, Status, Netzwerk, Aktivierungsnotiz | `data/partners.ts` (einzige Quelle) |
| OfferTile mit Partner verbinden (`partnerId`) | `data/categories.ts` |
| Datenschutz Abschnitt 7 (Affiliate) | `app/datenschutz/page.tsx` |
| SubID-Konvention, rel, Link-Logik | `lib/affiliate.ts` (Logik — bei Aktivierung i. d. R. unverändert) |
| Deploy-Prozess | `DEPLOYMENT.md` |

**Vor jedem Commit:** `git grep -n "http" -- data/partners.ts` prüfen — es dürfen ausschließlich `https://`-Deeplinks **zugelassener** Programme im Feld `affiliateUrl` erscheinen (Stand 09.07.2026: die acht Awin-Links von Lexware Office, Wondershare PDFelement, it-versand.com, Tarifcheck.de, CHECK24 — Strom/Gas + DSL —, congstar und NetCologne), niemals `http://` und niemals URLs außerhalb von `affiliateUrl`.
