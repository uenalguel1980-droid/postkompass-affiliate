import type { Partner } from "@/types";

/**
 * Zentrale Partnerliste — EINZIGE Quelle für Partnerlinks im gesamten Projekt.
 * Komponenten greifen nie direkt hierauf zu, sondern über lib/affiliate.ts.
 *
 * ============================================================================
 * LEITPLANKE (HART):
 * - Echte Affiliate-Links werden AUSSCHLIESSLICH hier eingetragen
 *   (Feld affiliateUrl + status: "active"), nie in Komponenten.
 * - affiliateUrl nur https, nur zugelassene Programme, SubID nach
 *   PARTNER.md-Konvention. Echte Partnernamen/Logos erst nach Aufnahme
 *   in das jeweilige Partnerprogramm (Netzwerk-Freigabe beachten).
 * - Alle übrigen Partner bleiben Platzhalter (affiliateUrl: null,
 *   status: "placeholder"), bis ihre Programme zugelassen sind.
 * - ERSTE AKTIVIERUNG 07.07.2026: buchhaltung-cloud = Lexware Office
 *   (Awin 13787) — Pilot in unkritischer Kategorie, DSE Abschnitt 7
 *   im selben Zug angepasst.
 * - NEBENPARTNER 07.07.2026 (beide Awin, beide nur gewerbe-tools):
 *   gewerbe-pdf-tool = Wondershare PDFelement (Awin 20202),
 *   gewerbe-it-hardware = it-versand.com (Awin 121708). Keine DSE-Änderung
 *   nötig: gleiches Netzwerk (Awin), weiterhin keine Skripte/Cookies on-site.
 * - TARIFPARTNER 08.07.2026: tarif-tarifcheck = Tarifcheck.de (Awin 11202),
 *   nur unkritische Tarifkategorien (strom-gas, internet-dsl, handyvertrag).
 *   NICHT auf versicherungen/kredit/konto-kreditkarte ohne separate Prüfung.
 *   Keine DSE-Änderung nötig: gleiches Netzwerk (Awin).
 * - CHECK24 08.07.2026: energie-check24 + dsl-check24 = CHECK24
 *   Partnerprogramm (Awin 9364). ZWEI Einträge, weil das Datenmodell einen
 *   affiliateUrl pro Partner vorsieht und CHECK24 kategoriespezifische
 *   Deeplinks/Clickrefs braucht. NUR strom-gas und internet-dsl — NICHT
 *   handyvertrag, versicherungen, kredit, konto-kreditkarte, reise oder
 *   mietwagen (Provisionsprüfung liegt nur für Strom/Gas/DSL vor).
 *   Keine DSE-Änderung nötig: gleiches Netzwerk (Awin).
 * - MOBILFUNKPARTNER 09.07.2026: handy-congstar = congstar DE (Awin 11938),
 *   NUR handyvertrag. DSL-/Zuhause-Angebote trotz Erwähnung im Programm-
 *   profil bewusst NICHT aktiviert (bräuchte separate Prüfung + eigenen
 *   Deeplink). Keine DSE-Änderung nötig: gleiches Netzwerk (Awin).
 * - REGIONALPARTNER 09.07.2026: dsl-netcologne = NetCologne DE (Awin 13664),
 *   NUR internet-dsl. Regionaler Anbieter Köln/Bonn/Aachen und Umgebung —
 *   Regionalität immer sachlich benennen, NIE als bundesweit darstellen.
 *   Mobilfunk nicht aktiv bewerben. Keine DSE-Änderung nötig:
 *   gleiches Netzwerk (Awin).
 * - APP-TARIF-PARTNER 09.07.2026: handy-fraenk = fraenk DE (Awin 20041),
 *   NUR handyvertrag. App-basierter SIM-only-/eSIM-Tarif — Abschluss und
 *   Aktivierung ausschließlich über die fraenk App. Awin-Hinweis: aktuell
 *   ist NUR mobiler Traffic mit direktem Einstieg in App Store/Play Store
 *   trackbar — nicht als klassischen Desktop-Vergleich darstellen.
 *   Keine DSE-Änderung nötig: gleiches Netzwerk (Awin).
 * ============================================================================
 *
 * Vorbereitete Netzwerke/Programme (Feld network):
 * check24 · awin · financeads · adcell · tarifcheck · telekom · direct
 *
 * AKTIVIERUNG: Der vollständige Prozess (Checkliste je Partner, SubID-
 * Konvention, Datenschutz-Pflichtschritte, § 17 PAngV bei Kredit) steht in
 * PARTNER.md. Kein Partner wird ohne diese Checkliste auf "active" gestellt.
 */
export const partners: Partner[] = [
  // --- Handyvertrag ---------------------------------------------------------
  {
    id: "handy-vergleichsportal",
    name: "Tarifvergleich Mobilfunk (Platzhalter)",
    description:
      "Vergleichsportal für Handytarife mit und ohne Vertragsbindung. Filter nach Datenvolumen, Netz und Laufzeit.",
    features: [
      "Tarife mit und ohne Laufzeit",
      "Filter nach Netz und Datenvolumen",
      "Monatlich kündbare Optionen",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["handyvertrag"],
    status: "placeholder",
    network: "check24",
    sensitive: false,
  },
  {
    id: "handy-netzbetreiber",
    name: "Mobilfunk-Anbieter (Platzhalter)",
    description:
      "Direktangebot eines Netzbetreibers für Mobilfunktarife, häufig kombinierbar mit Festnetz- oder Familienrabatten.",
    features: [
      "Tarife direkt vom Netzbetreiber",
      "Kombi-Vorteile mit Festnetz möglich",
      "Optionen für Familien und junge Leute",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["handyvertrag"],
    status: "placeholder",
    network: "telekom",
    sensitive: false,
  },
  {
    id: "handy-congstar",
    name: "congstar",
    description:
      "Mobilfunkanbieter im Netz der Telekom: Handytarife als Prepaid und mit Vertrag, Allnet-Flats mit unterschiedlichem Datenvolumen und monatlich kündbaren Optionen.",
    features: [
      "Prepaid- und Vertragstarife (Postpaid)",
      "Allnet-Flats mit wählbarem Datenvolumen",
      "Monatlich kündbare Tarifoptionen verfügbar",
      "Kostenüberblick durch klare Tarifstruktur",
    ],
    // Awin-Deeplink (Programm 11938, congstar DE) — SubID per clickref
    // nach PARTNER.md-Konvention. Zielseite congstar.de/handytarife/ —
    // bewusst NUR Mobilfunk, keine DSL-/Zuhause-Angebote (siehe
    // Kopfkommentar und activationNote).
    affiliateUrl:
      "https://www.awin1.com/cread.php?awinmid=11938&awinaffid=2974305&ued=https%3A%2F%2Fwww.congstar.de%2Fhandytarife%2F&clickref=tarvyo24_handyvertrag_congstar_partnercard",
    fallbackUrl: "#",
    categorySlugs: ["handyvertrag"],
    status: "active",
    network: "awin",
    sensitive: false,
    activationNote:
      "Awin-Programm 11938 (congstar DE), zugelassen, aktiviert am 09.07.2026. Zielseite congstar.de/handytarife/. NUR handyvertrag — DSL-/Zuhause-Angebote werden trotz Erwähnung im Programmprofil nicht aktiviert (separate Prüfung + eigener Deeplink nötig). Programmauflagen beachten: kein Brand-Bidding/SEM auf congstar-/Telekom-Marken, keine Gutschein-/Cashback-Versprechen, keine E-Mail-/Newsletter-Werbung, kein eBay-Vertrieb. Neutral als Mobilfunkanbieter beschreiben, keine Garantie-/Superlativ-Aussagen (kein „bestes Netz“). SubID über clickref-Parameter, kategoriebezogen.",
  },
  {
    id: "handy-fraenk",
    name: "fraenk",
    description:
      "App-basierter Mobilfunktarif: Abschluss, Aktivierung und Verwaltung laufen vollständig über die fraenk App — mit einfacher Tarifstruktur, monatlicher Kündbarkeit und eSIM-Option. Der Einstieg erfolgt über den App Store bzw. Google Play und richtet sich daher vor allem an Nutzerinnen und Nutzer am Smartphone.",
    features: [
      "SIM-only Tarif, monatlich kündbar",
      "Abschluss und Aktivierung direkt in der fraenk App",
      "eSIM oder klassische SIM-Karte wählbar",
      "Einfache, übersichtliche Tarifstruktur",
    ],
    // Offizielles Awin-Werbemittel (Programm 20041, fraenk DE; awclick,
    // linkid 2879940) — Ziel ist der App-Download (App Store/Play Store),
    // SubID per clickref nach PARTNER.md-Konvention. Bewusst KEIN
    // Desktop-Vergleichskontext: laut Awin ist aktuell nur mobiler Traffic
    // mit direktem Store-Einstieg trackbar (siehe activationNote).
    affiliateUrl:
      "https://www.awin1.com/awclick.php?gid=391743&mid=20041&awinaffid=2974305&linkid=2879940&clickref=tarvyo24_handyvertrag_fraenk_app_partnercard",
    fallbackUrl: "#",
    categorySlugs: ["handyvertrag"],
    status: "active",
    network: "awin",
    sensitive: false,
    activationNote:
      "Awin-Programm 20041 (fraenk DE), zugelassen, aktiviert am 09.07.2026. Offizielles Werbemittel awclick (gid 391743, linkid 2879940), Ziel: fraenk-App-Download im App Store/Play Store. NUR handyvertrag. WICHTIG (Awin-Hinweis): Aktuell kann ausschließlich mobiler Traffic mit direktem Einstieg in Play Store oder App Store getrackt werden — Desktop-Klicks werden möglicherweise nicht vergütet. fraenk deshalb nicht als klassischen Desktop-Handyvergleich darstellen, sondern sachlich als App-basierten SIM-only-/eSIM-Tarif einordnen (App-Charakter steht in der description). Keine Garantie-/Superlativ-Aussagen (kein „bestes Netz“, kein „günstigster Tarif“, kein „garantiert sparen“), keine Cashback-/Gutschein-/Bonusversprechen, kein Paid-Search-/Brand-Bidding-/Social-Ads-Kontext. SubID über clickref-Parameter, kategoriebezogen.",
  },

  // --- Internet & DSL -------------------------------------------------------
  {
    id: "dsl-vergleichsportal",
    name: "Internet-Tarifvergleich (Platzhalter)",
    description:
      "Vergleich von DSL-, Kabel- und Glasfaser-Anschlüssen nach Verfügbarkeit an der eigenen Adresse.",
    features: [
      "Verfügbarkeitscheck per Adresse",
      "DSL, Kabel und Glasfaser",
      "Übersicht über Aktionsrabatte",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["internet-dsl"],
    status: "placeholder",
    network: "check24",
    sensitive: false,
  },
  {
    id: "dsl-tarifrechner",
    name: "DSL-Tarifrechner (Platzhalter)",
    description:
      "Tarifrechner für Internetanschlüsse mit Fokus auf effektive Monatskosten über die gesamte Laufzeit.",
    features: [
      "Effektivpreis-Berechnung",
      "Wechselservice-Angebote",
      "Router-Optionen im Vergleich",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["internet-dsl"],
    status: "placeholder",
    network: "tarifcheck",
    sensitive: false,
  },
  {
    id: "dsl-check24",
    name: "CHECK24 Internet & DSL",
    description:
      "Vergleichsportal für Internet- und DSL-Tarife: Verfügbarkeitsprüfung an der eigenen Adresse, Überblick über Anbieter, Tarife und monatliche Kosten.",
    features: [
      "DSL- und Internet-Tarife im Vergleich",
      "Verfügbarkeitsprüfung per Adresse",
      "Überblick über Anbieter und Konditionen",
      "Kostenüberblick über die Vertragslaufzeit",
    ],
    // Awin-Deeplink (Programm 9364, CHECK24 Partnerprogramm) — SubID per
    // clickref nach PARTNER.md-Konvention: tarvyo24_[kategorie]_[platzierung].
    // Eigener Eintrag je Kategorie, da CHECK24 kategoriespezifische
    // Deeplinks (ued) und Clickrefs nutzt — siehe Kopfkommentar.
    affiliateUrl:
      "https://www.awin1.com/cread.php?awinmid=9364&awinaffid=2974305&ued=https%3A%2F%2Fwww.check24.de%2Fdsl%2F&clickref=tarvyo24_internet-dsl_check24_partnercard",
    fallbackUrl: "#",
    categorySlugs: ["internet-dsl"],
    status: "active",
    network: "awin",
    sensitive: false,
    activationNote:
      "Awin-Programm 9364 (CHECK24 Partnerprogramm), zugelassen, aktiviert am 08.07.2026. Zielseite check24.de/dsl/. NUR internet-dsl (und Schwester-Eintrag energie-check24 auf strom-gas) — Mobilfunk, Versicherung, Kredit, Konto, Reise und Mietwagen werden bewusst NICHT aktiviert, da die geprüften Provisionsinformationen nur Strom/Gas und DSL betreffen. Neutral als Vergleichsportal beschreiben, keine Garantie-/Superlativ-Aussagen. SubID über clickref-Parameter, kategoriebezogen.",
  },
  {
    id: "dsl-netcologne",
    name: "NetCologne",
    description:
      "Regionaler Telekommunikationsanbieter für den Raum Köln, Bonn und Aachen mit Umgebung: Internetanschlüsse, Telefon und TV (NetTV) — Verfügbarkeit hängt von der Adresse ab.",
    features: [
      "Internet-, Telefon- und TV-Angebote (NetTV)",
      "Verfügbarkeitsprüfung an der eigenen Adresse",
      "Regionale Versorgung: Köln, Bonn, Aachen und Umgebung",
      "Kostenüberblick über Tarife und Laufzeiten",
    ],
    // Awin-Deeplink (Programm 13664, NetCologne DE) — SubID per clickref
    // nach PARTNER.md-Konvention. Zielseite netcologne.de/privatkunden/
    // internet/. Regionaler Anbieter — nie als bundesweit darstellen
    // (siehe Kopfkommentar und activationNote).
    affiliateUrl:
      "https://www.awin1.com/cread.php?awinmid=13664&awinaffid=2974305&ued=https%3A%2F%2Fwww.netcologne.de%2Fprivatkunden%2Finternet%2F&clickref=tarvyo24_internet-dsl_netcologne_partnercard",
    fallbackUrl: "#",
    categorySlugs: ["internet-dsl"],
    status: "active",
    network: "awin",
    sensitive: false,
    activationNote:
      "Awin-Programm 13664 (NetCologne DE), zugelassen, aktiviert am 09.07.2026. Zielseite netcologne.de/privatkunden/internet/. NUR internet-dsl — Mobilfunk wird nicht aktiv beworben. Regionaler Anbieter (Köln/Bonn/Aachen und Umgebung): Regionalität sachlich benennen, NIE als bundesweit verfügbar darstellen, keine Garantieaussagen. Programmauflagen beachten: kein Suchmaschinenmarketing/Paid Search und kein Social-Media-Advertising ohne Freigabe, Begriffe „NetCologne“/„NetAachen“ bei Paid Ads ausschließen, keine Bonus-/Klickzwang-Modelle. SubID über clickref-Parameter, kategoriebezogen.",
  },

  // --- Strom & Gas ----------------------------------------------------------
  {
    id: "energie-vergleichsportal",
    name: "Strom- und Gasvergleich (Platzhalter)",
    description:
      "Vergleichsportal für Strom- und Gastarife mit Filtern für Preisgarantie, Kündigungsfrist und Ökotarife.",
    features: [
      "Filter für Preisgarantie und Laufzeit",
      "Ökostrom- und Biogas-Optionen",
      "Bonus-Transparenz im Vergleich",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["strom-gas"],
    status: "placeholder",
    network: "check24",
    sensitive: false,
  },
  {
    id: "energie-tarifrechner",
    name: "Energie-Tarifrechner (Platzhalter)",
    description:
      "Tarifrechner für Energieverträge mit Fokus auf faire Vertragsbedingungen und kurze Kündigungsfristen.",
    features: [
      "Kurze Kündigungsfristen filterbar",
      "Preisentwicklung im Blick",
      "Wechsel mit wenigen Angaben",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["strom-gas"],
    status: "placeholder",
    network: "tarifcheck",
    sensitive: false,
  },
  {
    id: "energie-check24",
    name: "CHECK24 Strom & Gas",
    description:
      "Vergleichsportal für Strom- und Gastarife: Überblick über Anbieter und Tarife anhand der eigenen Verbrauchswerte, Unterstützung beim Anbieterwechsel.",
    features: [
      "Strom- und Gastarife im Vergleich",
      "Kostenüberblick anhand des Jahresverbrauchs",
      "Überblick über Anbieter und Konditionen",
      "Unterstützung beim Anbieterwechsel",
    ],
    // Awin-Deeplink (Programm 9364, CHECK24 Partnerprogramm) — SubID per
    // clickref nach PARTNER.md-Konvention: tarvyo24_[kategorie]_[platzierung].
    // Eigener Eintrag je Kategorie, da CHECK24 kategoriespezifische
    // Deeplinks (ued) und Clickrefs nutzt — siehe Kopfkommentar.
    affiliateUrl:
      "https://www.awin1.com/cread.php?awinmid=9364&awinaffid=2974305&ued=https%3A%2F%2Fwww.check24.de%2Fstrom-gas%2F&clickref=tarvyo24_strom-gas_check24_partnercard",
    fallbackUrl: "#",
    categorySlugs: ["strom-gas"],
    status: "active",
    network: "awin",
    sensitive: false,
    activationNote:
      "Awin-Programm 9364 (CHECK24 Partnerprogramm), zugelassen, aktiviert am 08.07.2026. Zielseite check24.de/strom-gas/. NUR strom-gas (und Schwester-Eintrag dsl-check24 auf internet-dsl) — Mobilfunk, Versicherung, Kredit, Konto, Reise und Mietwagen werden bewusst NICHT aktiviert, da die geprüften Provisionsinformationen nur Strom/Gas und DSL betreffen. Neutral als Vergleichsportal beschreiben, keine Garantie-/Superlativ-Aussagen. SubID über clickref-Parameter, kategoriebezogen.",
  },

  // --- Tarifvergleich (kategorieübergreifend) ---------------------------------
  {
    id: "tarif-tarifcheck",
    name: "Tarifcheck.de",
    description:
      "Vergleichsportal für Verbraucher: bietet Tarifvergleiche in Alltagsbereichen wie Strom, Gas, Internet und Mobilfunk — als Orientierung für Kostenüberblick und Anbieterwechsel.",
    features: [
      "Tarifvergleiche in mehreren Alltagsbereichen (u. a. Strom, Gas, Internet, Mobilfunk)",
      "Überblick über Anbieter und Konditionen",
      "Unterstützung beim Anbieterwechsel",
    ],
    // Awin-Deeplink (Programm 11202, Tarifcheck.de) — SubID per clickref.
    // Clickref hier bewusst partnerbezogen (tarvyo24_tarifcheck_partnercard)
    // statt kategoriebezogen, da EIN Deeplink auf mehreren Kategorieseiten
    // erscheint (Betreiberin-Vorgabe vom 08.07.2026).
    affiliateUrl:
      "https://www.awin1.com/cread.php?awinmid=11202&awinaffid=2974305&ued=https%3A%2F%2Fwww.tarifcheck.de%2F&clickref=tarvyo24_tarifcheck_partnercard",
    fallbackUrl: "#",
    categorySlugs: ["strom-gas", "internet-dsl", "handyvertrag"],
    status: "active",
    network: "awin",
    sensitive: false,
    activationNote:
      "Awin-Programm 11202 (Tarifcheck.de), zugelassen, aktiviert am 08.07.2026. Nur auf unkritischen Tarifkategorien (strom-gas, internet-dsl, handyvertrag) eingebunden — NICHT auf versicherungen, kredit oder konto-kreditkarte, solange dafür keine separate Prüfung erfolgt ist (Portal bietet auch Versicherungs-/Finanzvergleiche an, diese werden von uns bewusst nicht beworben). Neutral als Vergleichsportal beschreiben, keine Garantie-/Superlativ-Aussagen. SubID über clickref-Parameter, partnerbezogen statt kategoriebezogen (ein Deeplink für mehrere Kategorien).",
  },

  // --- Konto & Kreditkarte ---------------------------------------------------
  {
    id: "konto-vergleichsportal",
    name: "Girokonto-Vergleich (Platzhalter)",
    description:
      "Übersicht über Girokonten mit Kontoführungsgebühren, Bedingungen für kostenlose Kontoführung und Kartenmodellen.",
    features: [
      "Kontoführungsgebühren im Vergleich",
      "Bedingungen transparent aufgelistet",
      "Filter für Geschäfts- und Privatkonten",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["konto-kreditkarte"],
    status: "placeholder",
    network: "financeads",
    sensitive: false,
  },
  {
    id: "kreditkarte-vergleichsportal",
    name: "Kreditkarten-Vergleich (Platzhalter)",
    description:
      "Vergleich von Kreditkartenmodellen nach Jahresgebühr, Abrechnungsart und Einsatzgebiet (z. B. Reisen).",
    features: [
      "Debit-, Charge- und Revolving-Karten erklärt",
      "Jahresgebühren im Überblick",
      "Fremdwährungsgebühren vergleichbar",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["konto-kreditkarte"],
    status: "placeholder",
    network: "awin",
    sensitive: false,
  },

  // --- Buchhaltungssoftware ---------------------------------------------------
  {
    id: "buchhaltung-cloud",
    name: "Lexware Office",
    description:
      "Cloud-Buchhaltungssoftware für Selbstständige und kleine Unternehmen: Angebote, Rechnungen inklusive E-Rechnung, Belegerfassung, EÜR und Umsatzsteuervoranmeldung.",
    features: [
      "Angebote und Rechnungen inkl. E-Rechnung (XRechnung/ZUGFeRD)",
      "Belege digital erfassen, GoBD-konforme Ablage",
      "EÜR und Umsatzsteuervoranmeldung (ELSTER)",
      "Bankabgleich und DATEV-Anbindung für die Steuerkanzlei",
    ],
    // Awin-Deeplink (Programm 13787, Lexware Office DE) — SubID per
    // clickref nach PARTNER.md-Konvention: tarvyo24_[kategorie]_[platzierung].
    affiliateUrl:
      "https://www.awin1.com/cread.php?awinmid=13787&awinaffid=2974305&ued=https%3A%2F%2Fwww.lexware.de%2Fbuchhaltungssoftware%2F&clickref=tarvyo24_buchhaltungssoftware_partnercard",
    fallbackUrl: "#",
    categorySlugs: ["buchhaltungssoftware", "gewerbe-tools"],
    status: "active",
    network: "awin",
    sensitive: false,
    activationNote:
      "Awin-Programm 13787 (Lexware Office DE), zugelassen, aktiviert am 07.07.2026. Zielseite lexware.de/buchhaltungssoftware/. SubID über clickref-Parameter. Erste echte Aktivierung (Pilot Bauabschnitt 2); DSE Abschnitt 7 im selben Zug angepasst.",
  },
  {
    id: "buchhaltung-rechnungstool",
    name: "Rechnungsprogramm (Platzhalter)",
    description:
      "Schlankes Rechnungsprogramm für Gründer und Freiberufler mit GoBD-konformer Belegablage.",
    features: [
      "GoBD-konforme Belegablage",
      "E-Rechnung (XRechnung/ZUGFeRD)",
      "Einstieg ohne Buchhaltungsvorkenntnisse",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["buchhaltungssoftware"],
    status: "placeholder",
    network: "adcell",
    sensitive: false,
  },

  // --- Gewerbe-Tools -----------------------------------------------------------
  {
    id: "gewerbe-geschaeftskonto",
    name: "Geschäftskonto-Anbieter (Platzhalter)",
    description:
      "Geschäftskonto für Selbstständige und Kleinunternehmen mit digitaler Kontoeröffnung und Buchhaltungs-Anbindung.",
    features: [
      "Digitale Kontoeröffnung",
      "Anbindung an Buchhaltungssoftware",
      "Unterkonten für Steuerrücklagen",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["gewerbe-tools", "konto-kreditkarte"],
    status: "placeholder",
    network: "financeads",
    sensitive: false,
  },
  {
    id: "gewerbe-toolanbieter",
    name: "Business-Tool-Anbieter (Platzhalter)",
    description:
      "Software-Angebote für den Geschäftsalltag: Terminbuchung, Zeiterfassung oder Projektverwaltung.",
    features: [
      "Werkzeuge für den Geschäftsalltag",
      "Monatlich kündbare Tarife",
      "Kostenlose Einstiegsvarianten",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["gewerbe-tools"],
    status: "placeholder",
    network: "adcell",
    sensitive: false,
  },
  {
    id: "gewerbe-pdf-tool",
    name: "Wondershare PDFelement",
    description:
      "PDF-Software für die digitale Büroorganisation: PDF-Dokumente erstellen, bearbeiten, kommentieren und in andere Formate umwandeln.",
    features: [
      "PDFs erstellen, bearbeiten und kommentieren",
      "Umwandlung von und zu Word, Excel und weiteren Formaten",
      "Texterkennung (OCR) für gescannte Dokumente",
      "Formulare ausfüllen und elektronisch signieren",
    ],
    // Awin-Deeplink (Programm 20202, Wondershare DE) — SubID per clickref
    // nach PARTNER.md-Konvention. Bewusst gezielt als PDFelement/PDF-Tool
    // eingebunden, nicht pauschal für alle Wondershare-Produkte.
    affiliateUrl:
      "https://www.awin1.com/cread.php?awinmid=20202&awinaffid=2974305&ued=https%3A%2F%2Fpdf.wondershare.de%2F&clickref=tarvyo24_gewerbe-tools_partnercard",
    fallbackUrl: "#",
    categorySlugs: ["gewerbe-tools"],
    status: "active",
    network: "awin",
    sensitive: false,
    activationNote:
      "Awin-Programm 20202 (Wondershare DE), zugelassen, aktiviert am 07.07.2026 als Nebenpartner. Zielseite pdf.wondershare.de. Nur als PDFelement/PDF-Tool bewerben, nicht für das gesamte Wondershare-Portfolio. SubID über clickref-Parameter.",
  },
  {
    id: "gewerbe-it-hardware",
    name: "it-versand.com",
    description:
      "Online-Anbieter für IT- und Büro-Hardware: Computer, Monitore und Zubehör für die Ausstattung von Büro- und Homeoffice-Arbeitsplätzen.",
    features: [
      "Computer, Monitore und Computerzubehör",
      "Technik für Büro- und Homeoffice-Arbeitsplätze",
      "Lieferung nach Deutschland und Österreich",
    ],
    // Awin-Deeplink (Programm 121708, it-versand.com DE+AT) — SubID per
    // clickref nach PARTNER.md-Konvention. Neutral als Hardware-Anbieter
    // dargestellt, nicht als Preisvergleich.
    affiliateUrl:
      "https://www.awin1.com/cread.php?awinmid=121708&awinaffid=2974305&ued=https%3A%2F%2Fit-versand.com%2F&clickref=tarvyo24_gewerbe-tools_partnercard",
    fallbackUrl: "#",
    categorySlugs: ["gewerbe-tools"],
    status: "active",
    network: "awin",
    sensitive: false,
    activationNote:
      "Awin-Programm 121708 (it-versand.com DE+AT), zugelassen, aktiviert am 07.07.2026 als Nebenpartner. Zielseite it-versand.com. Neutral als Anbieter für IT-/Büro-Hardware darstellen, nicht als Preisvergleich. SubID über clickref-Parameter.",
  },

  // --- Versicherungen (SENSIBEL) ----------------------------------------------
  {
    id: "versicherung-vergleichsportal",
    name: "Versicherungsvergleich (Platzhalter)",
    description:
      "Vergleichsportal für gängige Versicherungen (z. B. Haftpflicht, Hausrat). Beratung und Abschluss erfolgen beim Portal bzw. Versicherer.",
    features: [
      "Überblick über Tarifmerkmale",
      "Leistungsumfang vergleichbar",
      "Abschluss direkt beim Anbieter",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["versicherungen"],
    status: "placeholder",
    network: "tarifcheck",
    sensitive: true,
  },
  {
    id: "versicherung-vergleichsrechner",
    name: "Versicherungs-Vergleichsrechner (Platzhalter)",
    description:
      "Vergleichsrechner für Sachversicherungen mit Filteroptionen nach Deckungssumme und Selbstbeteiligung.",
    features: [
      "Filter nach Deckungssumme",
      "Selbstbeteiligung wählbar",
      "Vermittlung durch zugelassenen Partner",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["versicherungen"],
    status: "placeholder",
    network: "check24",
    sensitive: true,
  },

  // --- Kredit (SENSIBEL) --------------------------------------------------------
  {
    id: "kredit-vergleichsportal",
    name: "Kreditvergleich (Platzhalter)",
    description:
      "Vergleichsportal für Ratenkredite mit bonitätsunabhängiger Erstübersicht. Konditionsanfrage und Abschluss erfolgen beim Portal bzw. der Bank.",
    features: [
      "Konditionsanfrage Schufa-neutral möglich",
      "Effektiver Jahreszins im Vergleich",
      "Abschluss ausschließlich bei der Bank",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["kredit"],
    status: "placeholder",
    network: "financeads",
    sensitive: true,
  },
  {
    id: "kredit-vergleichsrechner",
    name: "Kredit-Vergleichsrechner (Platzhalter)",
    description:
      "Vergleichsrechner für Ratenkredite mit Darstellung von Zinsspannen und repräsentativen Beispielen.",
    features: [
      "Zinsspannen transparent dargestellt",
      "Repräsentative Beispiele einsehbar",
      "Vermittlung durch zugelassenen Partner",
    ],
    affiliateUrl: null,
    fallbackUrl: "#",
    categorySlugs: ["kredit"],
    status: "placeholder",
    network: "check24",
    sensitive: true,
  },
];
