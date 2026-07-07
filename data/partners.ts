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
