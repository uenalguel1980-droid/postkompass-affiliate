# SEO- & Indexierungsstatus (Tarvyo24)

**Stand:** 09.07.2026, nach Deploy #64 · Reines Arbeitsdokument — keine App-Dateien betroffen.

---

## 1. Sitemap

- **URL:** `https://tarvyo24.de/sitemap.xml` (einzige einzureichende Sitemap)
- **Status in der Google Search Console:** erfolgreich
- **Zuletzt bekannte erkannte Seiten:** 19
- **Hinweis:** Die Sitemap kann nach den neuen Ratgebern bereits mehr URLs enthalten als Google Search Console aktuell anzeigt. Google Search Console zeigt noch 19 erkannte Seiten, weil die Sitemap zuletzt am 07.07. gelesen wurde. Die neuen/aktualisierten Ratgeber müssen per URL-Prüfung getestet und die Indexierung beantragt werden; danach aktualisiert Google die erkannten Seiten zeitversetzt. Mit Deploy #64 sind die neuen Inhalte (inkl. der zwei neuen Ratgeber) live und in der Live-Sitemap enthalten — eine Aussage über den tatsächlichen Indexierungsstand ist damit ausdrücklich **nicht** verbunden.

> ⚠️ **Wichtig:** Einzelne Seiten dürfen **nicht** als Sitemap eingereicht werden — ausschließlich `/sitemap.xml`. Einzelne URLs werden nur über die URL-Prüfung getestet und zur Indexierung beantragt.

## 2. Aktive Kategorien (SEO-Fokus)

| Kategorie | URL |
|---|---|
| Strom & Gas | `/kategorien/strom-gas/` |
| Internet & DSL | `/kategorien/internet-dsl/` |
| Handyvertrag | `/kategorien/handyvertrag/` |

## 3. Aktive Ratgeber

| Ratgeber | URL | Stärkt Kategorie |
|---|---|---|
| Stromanbieter wechseln: so gehst du sachlich vor | `/ratgeber/stromanbieter-wechseln/` | strom-gas |
| Strom- und Gasanbieter wechseln: so gehst du sachlich vor | `/ratgeber/strom-gas-wechseln/` | strom-gas |
| Internetvertrag abschließen: Schritt für Schritt zum passenden Tarif | `/ratgeber/internetvertrag-abschliessen/` | internet-dsl |
| Internetvertrag abschließen: worauf du achten solltest | `/ratgeber/internetvertrag-worauf-achten/` | internet-dsl |
| Handyvertrag vergleichen: worauf es wirklich ankommt (am 09.07.2026 erweitert) | `/ratgeber/handyvertrag-vergleichen/` | handyvertrag |

Alle Ratgeber verlinken intern auf ihre Kategorie; die Kategorieseiten listen sie unter „Passende Ratgeber" in der Reihenfolge aus `relatedArticleSlugs`.

## 4. Partner-Update mit Deploy #64: fraenk DE

- **fraenk DE ist live** auf `/kategorien/handyvertrag/` — ausschließlich in dieser Kategorie, auf keiner anderen Seite.
- **Einbau-Commit:** `7b05ee9` (feat(partners): add fraenk affiliate partner) · **Doku-Commit:** `6a6440a` (docs(awin): update fraenk integration status).
- **Einbindung:** NICHT über den Awin Link Builder, sondern über den offiziellen Awin-Werbemittel-Textlink („FRAENK App eSim").
- **Einordnung:** fraenk ist ein App-basierter SIM-only-/eSIM-Mobilfunktarif — Abschluss und Aktivierung erfolgen über die fraenk App. Laut Awin ist aktuell nur mobiler Traffic mit direktem Einstieg in Play Store/App Store trackbar; fraenk wird deshalb bewusst nicht als klassischer Desktop-Handyvergleich dargestellt.
- SEO-seitig unkritisch: Der Partnerlink trägt wie alle Affiliate-Links `rel="sponsored nofollow noopener noreferrer"`; die Kategorieseite `/kategorien/handyvertrag/` zählt durch den Deploy als aktualisierte URL (→ URL-Prüfung, Abschnitt 5).

## 5. Google Search Console — aktueller Stand

- **Sitemap:** erfolgreich eingereicht und verarbeitet.
- **Live-Test Strom/Gas:** Seite war indexierbar.
- **Neue/aktualisierte URLs:** müssen weiterhin über die **URL-Prüfung einzeln getestet** und die **Indexierung beantragt** werden (sie sind zwar in der Sitemap, die Beantragung beschleunigt aber die Aufnahme). Das betrifft die neuen Ratgeber ebenso wie mit Deploy #64 aktualisierte Seiten (z. B. `/kategorien/handyvertrag/`, `/ratgeber/handyvertrag-vergleichen/`).
- **Leistung:** aktuell 0 Klicks / 0 Impressionen — bei einer neuen Website normal und kein Fehlerindikator.

## 6. Nächste SEO-Schritte

1. Neue/aktualisierte URLs einzeln per URL-Prüfung testen.
2. Indexierung beantragen.
3. Nach 7 Tagen die Leistung prüfen (Impressionen als erstes Signal).
4. Nach 14 Tagen die Suchanfragen prüfen (welche Begriffe erzeugen Impressionen?).
5. Danach die nächsten Content-Themen priorisieren.
