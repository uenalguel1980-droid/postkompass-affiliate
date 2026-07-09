import type { Category } from "@/types";

/**
 * Zentrale Kategorieliste — speist /kategorien, die Kategorie-Detailseiten
 * (generateStaticParams) und die Kachel-Grids.
 *
 * Sensible Kategorien (sensitive: true): versicherungen, kredit.
 * Dort rendert das Kategorie-Template automatisch die LegalNoticeBox —
 * kein manuelles Setzen nötig (PROJEKTPLAN.md, Abschnitt 7).
 */
export const categories: Category[] = [
  {
    slug: "handyvertrag",
    title: "Handyvertrag",
    metaTitle: "Handyvertrag vergleichen: Tarife verständlich einordnen",
    metaDescription:
      "Handytarife verständlich einordnen: Laufzeit, Datenvolumen, Netzqualität und typische Kostenfallen – mit klarer Checkliste von Tarvyo24.",
    teaser:
      "Laufzeit, Datenvolumen, Netz: worauf es beim Handytarif wirklich ankommt.",
    intro:
      "Handytarife unterscheiden sich weniger im Grundprinzip als im Kleingedruckten: Vertragslaufzeit, Preisanpassungen nach der Aktionsphase und Zusatzkosten machen oft den Unterschied. Hier findest du eine sachliche Orientierung, welche Kriterien beim Vergleich zählen – und welche typischen Kostenfallen du kennen solltest, bevor du dich festlegst.",
    checklist: [
      "Reicht das Datenvolumen für dein tatsächliches Nutzungsverhalten (Blick in die aktuelle Verbrauchsanzeige)?",
      "Wie lange ist die Mindestvertragslaufzeit – und was kostet der Tarif nach Ende der Aktionsphase?",
      "Welches Netz nutzt der Anbieter und wie ist die Abdeckung an deinen wichtigsten Orten?",
      "Ist der Tarif monatlich kündbar oder mit 24 Monaten Bindung – und ist der Preisunterschied das wert?",
      "Fallen einmalige Kosten an (Anschlusspreis, Versand) und werden sie erstattet?",
      "Sind EU-Roaming und WLAN-Calling enthalten?",
    ],
    costTraps: [
      "Aktionspreise, die sich nach 6 oder 12 Monaten deutlich erhöhen – entscheidend ist der Durchschnittspreis über die Gesamtlaufzeit.",
      "Automatische Datenautomatik: kostenpflichtiges Nachbuchen von Volumen, wenn das Kontingent aufgebraucht ist.",
      "Stillschweigende Verlängerung von Zusatzoptionen (Streaming-Pakete, Sicherheitspakete) nach der Gratisphase.",
      "Subventionierte Handys, deren Aufpreis über die Laufzeit teurer ist als Gerätekauf plus günstigerer Tarif.",
    ],
    sensitive: false,
    partnerIds: [
      "handy-congstar",
      "handy-fraenk",
      "handy-vergleichsportal",
      "handy-netzbetreiber",
      "tarif-tarifcheck",
    ],
    offerTiles: [
      {
        id: "handy-sim-only",
        title: "SIM-only Tarife prüfen",
        description: "Tarife ohne neues Gerät – oft günstiger und flexibler.",
        icon: "smartphone",
        partnerId: "handy-vergleichsportal",
      },
      {
        id: "handy-mit-smartphone",
        title: "Handyvertrag mit Smartphone ansehen",
        description: "Gerät plus Tarif – vorher Gesamtkosten über die Laufzeit rechnen.",
        icon: "smartphone",
        partnerId: "handy-netzbetreiber",
      },
      {
        id: "handy-prepaid",
        title: "Prepaid & flexible Tarife vergleichen",
        description: "Ohne Vertragsbindung – volle Kostenkontrolle.",
        icon: "check",
        partnerId: "handy-vergleichsportal",
      },
    ],
    relatedArticleSlugs: ["handyvertrag-vergleichen"],
    icon: "smartphone",
  },
  {
    slug: "internet-dsl",
    title: "Internet & DSL",
    metaTitle: "Internetanschluss vergleichen: DSL, Kabel & Glasfaser",
    metaDescription:
      "DSL, Kabel oder Glasfaser? So ordnest du Internettarife ein: Verfügbarkeit, Effektivpreis, Laufzeit und typische Kostenfallen im Überblick.",
    teaser:
      "DSL, Kabel oder Glasfaser: den passenden Anschluss für deine Adresse finden.",
    intro:
      "Beim Internetanschluss entscheidet zuerst die Verfügbarkeit an deiner Adresse, welche Technologien überhaupt infrage kommen. Danach zählen der effektive Monatspreis über die gesamte Laufzeit, die tatsächlich erreichbare Geschwindigkeit und die Vertragsbedingungen. Diese Seite hilft dir, Angebote sachlich einzuordnen.",
    checklist: [
      "Welche Technologien (DSL, Kabel, Glasfaser) sind an deiner Adresse verfügbar?",
      "Wie hoch ist der Effektivpreis pro Monat, wenn du Aktionsrabatte, Anschlusskosten und Routerkosten auf die Laufzeit umrechnest?",
      "Reicht die gebuchte Geschwindigkeit für Haushaltsgröße und Nutzung (Homeoffice, Streaming)?",
      "Ist ein eigener Router erlaubt (Routerfreiheit) und was kostet das Mietgerät?",
      "Wie sind Kündigungsfrist und Verlängerungsbedingungen nach der Mindestlaufzeit?",
      "Gibt es einen Bereitstellungstermin und eine Regelung, falls der Anschluss später funktioniert als zugesagt?",
    ],
    costTraps: [
      "Niedrige Einstiegspreise, die ab dem 7. oder 13. Monat deutlich steigen – der Durchschnittspreis über 24 Monate ist die ehrlichere Zahl.",
      "Routermiete über die gesamte Laufzeit, die den Kauf eines eigenen Geräts übersteigen kann.",
      "Bereitstellungs- und Versandkosten, die im beworbenen Preis nicht enthalten sind.",
      "„Bis zu“-Geschwindigkeiten, die an der eigenen Adresse technisch nicht erreicht werden.",
    ],
    sensitive: false,
    partnerIds: [
      "dsl-check24",
      "dsl-netcologne",
      "dsl-vergleichsportal",
      "dsl-tarifrechner",
      "tarif-tarifcheck",
    ],
    offerTiles: [
      {
        id: "internet-dsl-tarife",
        title: "DSL-Tarife vergleichen",
        description: "Anschlüsse nach Verfügbarkeit und Effektivpreis einordnen.",
        icon: "wifi",
        partnerId: "dsl-vergleichsportal",
      },
      {
        id: "internet-glasfaser",
        title: "Glasfaser-Verfügbarkeit prüfen",
        description: "Per Adresscheck sehen, ob Glasfaser bei dir liegt.",
        icon: "wifi",
        partnerId: "dsl-vergleichsportal",
      },
      {
        id: "internet-kombi",
        title: "Internet + Telefon Kombiangebote ansehen",
        description: "Kombitarife mit Blick auf die Kosten nach der Aktionsphase.",
        icon: "check",
        partnerId: "dsl-tarifrechner",
      },
    ],
    relatedArticleSlugs: ["internetvertrag-abschliessen", "internetvertrag-worauf-achten"],
    icon: "wifi",
  },
  {
    slug: "strom-gas",
    title: "Strom & Gas",
    metaTitle: "Strom- und Gastarife vergleichen: sachliche Orientierung",
    metaDescription:
      "Strom- oder Gasanbieter wechseln: Preisgarantie, Kündigungsfrist, Boni und typische Kostenfallen verständlich erklärt – mit Checkliste.",
    teaser:
      "Anbieterwechsel ohne böse Überraschungen: Preisgarantie, Boni und Fristen verstehen.",
    intro:
      "Der Wechsel des Strom- oder Gasanbieters ist formal einfach – die Unterschiede stecken in den Vertragsbedingungen: Wie lange gilt der Preis? Wann wird der Bonus wirklich ausgezahlt? Und wie schnell kommst du wieder aus dem Vertrag heraus? Hier bekommst du die wichtigsten Kriterien für eine informierte Entscheidung.",
    checklist: [
      "Stimmen die hinterlegten Verbrauchswerte (kWh pro Jahr) mit deiner letzten Abrechnung überein?",
      "Wie lange gilt die Preisgarantie – und umfasst sie auch Steuern, Abgaben und Umlagen (eingeschränkte vs. umfassende Garantie)?",
      "Wie lang sind Mindestlaufzeit und Kündigungsfrist nach der Erstlaufzeit?",
      "Unter welchen Bedingungen werden Neukundenbonus und Sofortbonus tatsächlich ausgezahlt?",
      "Ist der Tarif ohne Vorauskasse und ohne Kaution?",
      "Bei Ökotarifen: Ist die Herkunft zertifiziert (z. B. anerkannte Labels)?",
    ],
    costTraps: [
      "Boni, die erst nach zwölf Monaten ununterbrochener Belieferung ausgezahlt werden – bei früherem Wechsel entfällt der Vorteil.",
      "Tarife mit Vorauskasse oder Paketpreisen: Mehrverbrauch wird teuer, Minderverbrauch wird nicht erstattet.",
      "Preisgarantien, die Steuern und Umlagen ausschließen – Erhöhungen sind dann trotzdem möglich.",
      "Automatische Verlängerung mit deutlich höherem Folgepreis, wenn die Kündigungsfrist verpasst wird.",
    ],
    sensitive: false,
    partnerIds: [
      "energie-check24",
      "energie-vergleichsportal",
      "energie-tarifrechner",
      "tarif-tarifcheck",
    ],
    offerTiles: [
      {
        id: "energie-strom",
        title: "Stromtarife vergleichen",
        description: "Mit den echten Verbrauchswerten aus deiner Jahresabrechnung.",
        icon: "zap",
        partnerId: "energie-vergleichsportal",
      },
      {
        id: "energie-gas",
        title: "Gastarife prüfen",
        description: "Laufzeit, Kündigungsfrist und Preisgarantie im Blick behalten.",
        icon: "zap",
        partnerId: "energie-vergleichsportal",
      },
      {
        id: "energie-preisgarantie",
        title: "Preisgarantie & Bonusbedingungen ansehen",
        description: "Was Garantien wirklich abdecken und wann Boni ausgezahlt werden.",
        icon: "check",
        partnerId: "energie-tarifrechner",
      },
    ],
    relatedArticleSlugs: ["stromanbieter-wechseln", "strom-gas-wechseln"],
    icon: "zap",
  },
  {
    slug: "konto-kreditkarte",
    title: "Konto & Kreditkarte",
    metaTitle: "Girokonto & Kreditkarte vergleichen: Gebühren im Blick",
    metaDescription:
      "Girokonten und Kreditkarten sachlich vergleichen: Kontoführungsgebühren, Kartenmodelle, Auslandseinsatz und typische Kostenfallen.",
    teaser:
      "Kontoführung, Kartenmodelle, Auslandsgebühren: die Kostenstruktur verstehen.",
    intro:
      "Girokonten und Kreditkarten wirken auf den ersten Blick austauschbar – die Unterschiede zeigen sich in den Bedingungen: Wann ist die Kontoführung wirklich kostenlos? Welches Kartenmodell (Debit, Charge, Revolving) passt zu deinem Zahlungsverhalten? Und was kostet der Einsatz im Ausland? Hier findest du die Kriterien für einen sachlichen Vergleich.",
    checklist: [
      "Unter welchen Bedingungen ist die Kontoführung kostenlos (z. B. Mindestgeldeingang) – und erfüllst du sie dauerhaft?",
      "Welches Kartenmodell wird ausgegeben: Debitkarte, Charge-Karte oder Karte mit Teilzahlungsfunktion?",
      "Was kosten Bargeldabhebungen im In- und Ausland und Zahlungen in Fremdwährung?",
      "Wie hoch sind Dispozins und ggf. Überziehungszins?",
      "Wird bei Karten mit Teilzahlung die Vollzahlung als Standard eingestellt (Ratenfunktion deaktivierbar)?",
      "Gibt es die Filial-/Automateninfrastruktur, die du tatsächlich brauchst?",
    ],
    costTraps: [
      "Teilzahlungsfunktion (Revolving) als Voreinstellung: Auf offene Beträge fallen hohe Sollzinsen an – Vollzahlung aktiv einstellen.",
      "„Kostenlos“-Bedingungen wie Mindestgeldeingang, die bei Nichterfüllung Monatsgebühren auslösen.",
      "Fremdwährungsentgelte und Abhebegebühren im Ausland, die im Kartenvergleich oft übersehen werden.",
      "Gebühren für Papierüberweisungen, Kontoauszüge oder die Girocard als Zusatzkarte.",
    ],
    sensitive: false,
    partnerIds: [
      "konto-vergleichsportal",
      "kreditkarte-vergleichsportal",
      "gewerbe-geschaeftskonto",
    ],
    offerTiles: [
      {
        id: "konto-kreditkarten",
        title: "Kreditkarten vergleichen",
        description: "Kartenmodelle, Jahresgebühren und Auslandsentgelte einordnen.",
        icon: "credit-card",
        partnerId: "kreditkarte-vergleichsportal",
      },
      {
        id: "konto-girokonto",
        title: "Girokonto prüfen",
        description: "Kontoführungsgebühren und Bedingungen transparent vergleichen.",
        icon: "credit-card",
        partnerId: "konto-vergleichsportal",
      },
      {
        id: "konto-geschaeftskonto",
        title: "Geschäftskonto ansehen",
        description: "Konten für Selbstständige mit Buchhaltungs-Anbindung.",
        icon: "briefcase",
        partnerId: "gewerbe-geschaeftskonto",
      },
    ],
    relatedArticleSlugs: ["kreditkarte-vergleichen"],
    icon: "credit-card",
  },
  {
    slug: "buchhaltungssoftware",
    title: "Buchhaltungssoftware",
    metaTitle: "Buchhaltungssoftware für Selbstständige vergleichen",
    metaDescription:
      "Buchhaltungssoftware sachlich einordnen: Funktionsumfang, GoBD, E-Rechnung, Schnittstellen und Kostenmodelle für Selbstständige im Überblick.",
    teaser:
      "Rechnungen, EÜR, E-Rechnungspflicht: die passende Lösung für deine Selbstständigkeit.",
    intro:
      "Buchhaltungssoftware reicht vom schlanken Rechnungsprogramm bis zur Komplettlösung mit Umsatzsteuervoranmeldung und Steuerberater-Zugang. Welche Ausbaustufe du brauchst, hängt von Rechtsform, Belegvolumen und deinem Steuer-Setup ab. Hier bekommst du die Kriterien, um Angebote realistisch einzuordnen – inklusive der Punkte, die durch die E-Rechnungspflicht wichtiger geworden sind.",
    checklist: [
      "Deckt die Software deine Pflichten ab: EÜR oder Bilanz, Umsatzsteuervoranmeldung, ggf. Kleinunternehmerregelung?",
      "Kann sie E-Rechnungen (XRechnung/ZUGFeRD) empfangen, verarbeiten und erstellen?",
      "Ist die Belegablage GoBD-konform (revisionssichere Archivierung)?",
      "Gibt es eine Schnittstelle zu deinem Steuerberater (z. B. DATEV-Export) und zu deinem Geschäftskonto?",
      "Was kostet der Tarif, wenn dein Beleg- oder Rechnungsvolumen wächst (Tarifsprünge)?",
      "Wie kommst du an deine Daten, wenn du den Anbieter wechseln willst (Export)?",
    ],
    costTraps: [
      "Einstiegstarife, in denen wichtige Funktionen (UStVA, Belegerfassung, Support) fehlen und nur im teureren Tarif verfügbar sind.",
      "Jahresabos mit automatischer Verlängerung, die kurz nach der Testphase beginnen.",
      "Zusatzkosten pro Mandant, Nutzer oder Belegkontingent, die im beworbenen Preis nicht sichtbar sind.",
      "Fehlender Datenexport: Ein Anbieterwechsel wird faktisch teuer, wenn Belege nicht mitgenommen werden können.",
    ],
    sensitive: false,
    partnerIds: ["buchhaltung-cloud", "buchhaltung-rechnungstool"],
    offerTiles: [
      {
        id: "buchhaltung-rechnungstools",
        title: "Rechnungstools ansehen",
        description: "Schlanke Programme für Angebote, Rechnungen und E-Rechnung.",
        icon: "calculator",
        partnerId: "buchhaltung-rechnungstool",
      },
      {
        id: "buchhaltung-software",
        title: "Buchhaltungssoftware vergleichen",
        description: "Lösungen mit EÜR, UStVA und GoBD-konformer Ablage.",
        icon: "calculator",
        partnerId: "buchhaltung-cloud",
      },
      {
        id: "buchhaltung-schnittstellen",
        title: "Beleg- und Steuerberater-Schnittstellen prüfen",
        description: "DATEV-Export, Kontoanbindung und Belegscan im Blick.",
        icon: "check",
        partnerId: "buchhaltung-cloud",
      },
    ],
    relatedArticleSlugs: ["buchhaltungssoftware-selbststaendige"],
    icon: "calculator",
  },
  {
    slug: "gewerbe-tools",
    title: "Gewerbe-Tools",
    metaTitle: "Tools für Selbstständige & Gewerbe: sachlicher Überblick",
    metaDescription:
      "Geschäftskonto, Zeiterfassung, Organisation: Werkzeuge für Selbstständige und kleine Unternehmen verständlich eingeordnet.",
    teaser:
      "Vom Geschäftskonto bis zur Zeiterfassung: Werkzeuge für den Geschäftsalltag.",
    intro:
      "Wer selbstständig ist oder ein kleines Unternehmen führt, kombiniert meist mehrere Werkzeuge: Geschäftskonto, Buchhaltung, Terminverwaltung, Zeiterfassung. Entscheidend ist weniger das einzelne Tool als das Zusammenspiel – und laufende Kosten, die zur Unternehmensgröße passen. Hier ordnen wir die wichtigsten Kategorien ein.",
    checklist: [
      "Brauchst du ein separates Geschäftskonto (bei Kapitalgesellschaften Pflicht, sonst dringend sinnvoll zur Trennung privat/geschäftlich)?",
      "Arbeiten deine Tools zusammen (Konto ↔ Buchhaltung ↔ Steuerberater), oder erzeugst du doppelte Pflege?",
      "Sind die Tarife monatlich kündbar oder binden sie dich jährlich?",
      "Wo liegen die Daten (Datenschutz, Serverstandort, AVV für die DSGVO)?",
      "Reicht eine kostenlose Einstiegsvariante für deinen aktuellen Bedarf?",
      "Was passiert mit deinen Daten bei Kündigung (Exportmöglichkeiten)?",
    ],
    costTraps: [
      "Viele kleine Abos, die einzeln günstig wirken, in Summe aber ein relevanter Fixkostenblock werden.",
      "Kostenlose Tarife, deren Limits (Nutzer, Belege, Projekte) im Alltag schnell erreicht sind und zum Upgrade zwingen.",
      "Buchungen pro Transaktion beim Geschäftskonto, die bei vielen Zahlungseingängen teurer sind als eine Monatspauschale.",
      "Jahresverträge mit automatischer Verlängerung ohne rechtzeitige Erinnerung.",
    ],
    sensitive: false,
    partnerIds: [
      "gewerbe-geschaeftskonto",
      "gewerbe-toolanbieter",
      "buchhaltung-cloud",
      "gewerbe-pdf-tool",
      "gewerbe-it-hardware",
    ],
    offerTiles: [
      {
        id: "gewerbe-hosting",
        title: "Hosting & Domains prüfen",
        description: "Webhosting und Domains für den eigenen Auftritt.",
        icon: "briefcase",
        partnerId: null,
      },
      {
        id: "gewerbe-pos",
        title: "Kartenlesegeräte & POS ansehen",
        description: "Kartenzahlung annehmen – Geräte und Gebührenmodelle.",
        icon: "credit-card",
        partnerId: null,
      },
      {
        id: "gewerbe-business-software",
        title: "KI-Tools & Business-Software vergleichen",
        description: "Werkzeuge für Termine, Zeiterfassung und Alltagsaufgaben.",
        icon: "briefcase",
        partnerId: "gewerbe-toolanbieter",
      },
    ],
    relatedArticleSlugs: ["buchhaltungssoftware-selbststaendige"],
    icon: "briefcase",
  },
  {
    slug: "versicherungen",
    title: "Versicherungen",
    metaTitle: "Versicherungen verstehen: Orientierung ohne Beratung",
    metaDescription:
      "Versicherungen sachlich einordnen: Welche Kriterien beim Vergleich zählen und welche Kostenfallen es gibt. Allgemeine Orientierung, keine Beratung.",
    teaser:
      "Deckungssumme, Selbstbeteiligung, Ausschlüsse: Versicherungsbedingungen verstehen.",
    intro:
      "Versicherungen vergleichen heißt vor allem: Bedingungen lesen. Der Preis allein sagt wenig, wenn Deckungssumme, Selbstbeteiligung und Ausschlüsse nicht zum eigenen Bedarf passen. Wir geben dir hier allgemeine Kriterien an die Hand, mit denen du Tarifinformationen besser einordnen kannst. Was wir bewusst nicht tun: dir sagen, welche Versicherung für dich persönlich die richtige ist – das ist Aufgabe zugelassener Berater und der Anbieter selbst.",
    checklist: [
      "Welches Risiko soll abgesichert werden – und wie hoch wäre der finanzielle Schaden im Ernstfall realistisch?",
      "Passt die Deckungssumme zu diesem Risiko (bei Haftpflicht z. B. Personenschäden als größter Posten)?",
      "Welche Ausschlüsse und Wartezeiten stehen in den Bedingungen?",
      "Wie wirkt sich eine Selbstbeteiligung auf Beitrag und Nutzen aus?",
      "Gibt es bestehende Verträge, die sich mit dem neuen Tarif überschneiden (Doppelversicherung)?",
      "Wie sind Laufzeit und Kündigungsfrist – und gibt es ein Sonderkündigungsrecht bei Beitragserhöhung?",
    ],
    costTraps: [
      "Sehr günstige Beiträge, die mit niedrigen Deckungssummen oder vielen Ausschlüssen erkauft sind.",
      "Doppelversicherung: Leistungen, die bereits über andere Verträge (z. B. Familienhaftpflicht) abgedeckt sind.",
      "Automatische Beitragsanpassungen, bei denen das Sonderkündigungsrecht ungenutzt verstreicht.",
      "Zusatzbausteine, die den Beitrag erhöhen, aber für die eigene Situation keinen Mehrwert bieten.",
    ],
    sensitive: true,
    sensitiveVariant: "versicherung",
    sensitiveNotice:
      "Tarvyo24 erbringt keine Versicherungsberatung und keine Versicherungsvermittlung. Die Inhalte dieser Seite sind allgemeine Informationen und ersetzen keine individuelle Beratung. Prüfung, Beratung und Vertragsabschluss erfolgen ausschließlich beim jeweiligen Versicherer, Vergleichsportal oder einem zugelassenen Vermittler bzw. Berater.",
    partnerIds: [
      "versicherung-vergleichsportal",
      "versicherung-vergleichsrechner",
    ],
    offerTiles: [
      {
        id: "versicherung-kfz",
        title: "Kfz-Versicherung vergleichen",
        description: "Tarifmerkmale und Selbstbeteiligung beim Portal einordnen.",
        icon: "shield",
        partnerId: null,
      },
      {
        id: "versicherung-haftpflicht",
        title: "Haftpflicht prüfen",
        description: "Deckungssummen und Leistungsumfang vergleichen.",
        icon: "shield",
        partnerId: "versicherung-vergleichsportal",
      },
      {
        id: "versicherung-rechtsschutz",
        title: "Rechtsschutz vergleichen",
        description: "Bausteine, Wartezeiten und Ausschlüsse im Blick.",
        icon: "shield",
        partnerId: null,
      },
    ],
    relatedArticleSlugs: [],
    icon: "shield",
  },
  {
    slug: "kredit",
    title: "Kredit",
    metaTitle: "Kredite verstehen: Zinsen & Konditionen einordnen",
    metaDescription:
      "Ratenkredite sachlich einordnen: effektiver Jahreszins, Laufzeit, Sondertilgung und typische Kostenfallen. Allgemeine Orientierung, keine Beratung.",
    teaser:
      "Effektivzins, Laufzeit, Sondertilgung: Kreditkonditionen richtig lesen.",
    intro:
      "Bei Krediten entscheidet nicht der beworbene Schaufensterzins, sondern das konkrete Angebot für deine Situation – und das erhältst du erst nach einer Konditionsanfrage bei Bank oder Vergleichsportal. Wir erklären hier allgemein, wie du Kreditkonditionen liest und welche Kostenfallen es gibt. Was wir bewusst nicht tun: dir zu einem bestimmten Kredit raten. Ob und zu welchen Konditionen ein Kredit infrage kommt, prüft ausschließlich die Bank.",
    checklist: [
      "Ist die Kreditaufnahme wirklich nötig – und ist die Monatsrate auch bei unerwarteten Ausgaben dauerhaft tragbar?",
      "Vergleichst du den effektiven Jahreszins (enthält Kosten) statt des Sollzinses?",
      "Ist das repräsentative Beispiel realistisch für dich – zwei Drittel der Kunden erhalten laut Angabe diesen oder einen günstigeren Zins?",
      "Sind kostenlose Sondertilgungen und vorzeitige Rückzahlung möglich?",
      "Wird für den Vergleich eine Schufa-neutrale Konditionsanfrage gestellt (keine Kreditanfrage)?",
      "Ist eine angebotene Restschuldversicherung wirklich erforderlich – sie erhöht die Gesamtkosten deutlich und ist fast immer optional?",
    ],
    costTraps: [
      "Werbung mit Niedrigzinsen, die nur bei sehr guter Bonität vergeben werden – maßgeblich ist das repräsentative Beispiel und dein konkretes Angebot.",
      "Restschuldversicherungen, die in die Rate eingerechnet werden und die Gesamtkosten erheblich erhöhen.",
      "Sehr lange Laufzeiten: niedrigere Monatsrate, aber deutlich höhere Gesamtzinskosten.",
      "„Kreditanfragen“ statt „Konditionsanfragen“: Erstere können den Schufa-Score beeinflussen.",
    ],
    sensitive: true,
    sensitiveVariant: "kredit",
    sensitiveNotice:
      "Tarvyo24 erbringt keine Kredit- oder Finanzberatung und vermittelt keine Kredite. Die Inhalte dieser Seite sind allgemeine Informationen und keine Empfehlung für ein bestimmtes Produkt. Konditionsprüfung, Beratung und Vertragsabschluss erfolgen ausschließlich bei der jeweiligen Bank, dem Vergleichsportal oder einem zugelassenen Vermittler. Hinweis: Bei Kreditwerbung gelten gesetzliche Pflichtangaben (u. a. repräsentatives Beispiel nach § 17 PAngV) – diese werden vom jeweiligen Anbieter bereitgestellt.",
    partnerIds: ["kredit-vergleichsportal", "kredit-vergleichsrechner"],
    offerTiles: [
      {
        id: "kredit-vergleich",
        title: "Kreditvergleich beim Partner ansehen",
        description: "Konditionsübersicht – Prüfung und Abschluss bei der Bank.",
        icon: "banknote",
        partnerId: "kredit-vergleichsportal",
      },
      {
        id: "kredit-umschuldung",
        title: "Umschuldung prüfen",
        description: "Bestehende Kredite einordnen – Entscheidung beim Anbieter.",
        icon: "banknote",
        partnerId: "kredit-vergleichsportal",
      },
      {
        id: "kredit-konditionen",
        title: "Konditionen beim Anbieter vergleichen",
        description: "Effektivzins und repräsentative Beispiele beim Portal einsehen.",
        icon: "check",
        partnerId: "kredit-vergleichsrechner",
      },
    ],
    relatedArticleSlugs: ["kreditkarte-vergleichen"],
    icon: "banknote",
  },
];
