import type { Article } from "@/types";

/**
 * Ratgeberartikel — speist /ratgeber und die Artikel-Detailseiten
 * (generateStaticParams), inkl. FAQ für das FAQPage-Schema.
 *
 * Redaktionelle Leitplanken (PROJEKTPLAN.md, Abschnitt 7):
 * - sachlich, keine Superlative, keine Heilsversprechen, keine Dringlichkeit
 * - keine individuellen Empfehlungen — nur allgemeine Orientierung
 * - Absätze innerhalb einer Sektion durch Leerzeilen (\n\n) getrennt
 */
export const articles: Article[] = [
  {
    slug: "handyvertrag-vergleichen",
    title: "Handyvertrag vergleichen: worauf es wirklich ankommt",
    metaTitle: "Handyvertrag vergleichen: die wichtigsten Kriterien",
    metaDescription:
      "Handytarife sinnvoll vergleichen: Datenvolumen, Laufzeit, Netzqualität und Gesamtkosten verständlich erklärt – mit Checkliste und FAQ.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    readingMinutes: 7,
    categorySlug: "handyvertrag",
    sections: [
      {
        heading: "Den eigenen Bedarf kennen, bevor du vergleichst",
        body: "Der häufigste Fehler beim Tarifvergleich ist, mit dem Angebot statt mit dem eigenen Bedarf zu starten. Ein Blick in die Verbrauchsanzeige deines Smartphones oder die App deines aktuellen Anbieters zeigt dir, wie viel Datenvolumen du in den letzten Monaten tatsächlich genutzt hast. Viele Menschen buchen deutlich mehr Volumen, als sie verbrauchen – und zahlen Monat für Monat für eine Reserve, die sie nie anfassen.\n\nNeben dem Datenvolumen lohnt sich ein ehrlicher Blick auf dein Telefonie-Verhalten: Wer fast nur über Messenger kommuniziert, braucht keine besonderen Telefonie-Pakete. Wer viel unterwegs ist, sollte dagegen auf die Netzabdeckung an den eigenen Alltagsorten achten – dazu gleich mehr.",
      },
      {
        heading: "Laufzeit oder monatlich kündbar: eine Kostenfrage",
        body: "Tarife mit 24 Monaten Laufzeit sind pro Monat oft etwas günstiger oder enthalten Aktionsvorteile. Dafür bindest du dich – und kannst auf Preisentwicklungen oder veränderten Bedarf zwei Jahre lang kaum reagieren. Monatlich kündbare Tarife kosten teils geringfügig mehr, geben dir aber die Freiheit, jederzeit zu wechseln.\n\nSeit der Reform des Telekommunikationsgesetzes gilt: Nach Ablauf der Mindestlaufzeit verlängern sich Verträge zwar automatisch, sind dann aber monatlich kündbar. Wichtig ist deshalb vor allem der Preis nach der Aktionsphase. Ein Tarif, der zwölf Monate günstig ist und danach deutlich teurer wird, sollte über die gesamte Laufzeit gerechnet werden – der Durchschnittspreis ist die ehrlichere Vergleichszahl als der beworbene Einstiegspreis.",
      },
      {
        heading: "Netzqualität: nicht jedes Netz ist überall gleich gut",
        body: "In Deutschland gibt es drei physische Mobilfunknetze. Discounter-Marken nutzen jeweils eines dieser Netze mit – oft zu deutlich niedrigeren Preisen, teils aber mit Einschränkungen bei Höchstgeschwindigkeit oder neuen Funktionen wie 5G.\n\nEntscheidend ist nicht, welches Netz in Tests insgesamt am besten abschneidet, sondern welches an deinen Alltagsorten zuverlässig funktioniert: zu Hause, am Arbeitsplatz, auf dem Pendelweg. Die Netzbetreiber bieten dafür Verfügbarkeitskarten an; Erfahrungswerte von Personen aus deinem Umfeld mit demselben Netz sind eine zusätzliche, praxisnahe Orientierung.",
      },
      {
        heading: "Gesamtkosten rechnen: Einstiegspreis ist nicht Endpreis",
        body: "Für einen fairen Vergleich zählen alle Kosten über die Laufzeit: Grundgebühr in der Aktionsphase, Grundgebühr danach, einmaliger Anschlusspreis, gegebenenfalls Versandkosten – und mögliche Erstattungen. Daraus ergibt sich der effektive Monatspreis.\n\nVorsicht bei zwei verbreiteten Mustern: Erstens die Datenautomatik, die bei aufgebrauchtem Volumen automatisch kostenpflichtig nachbucht – bei vielen Anbietern lässt sie sich deaktivieren, was direkt nach Vertragsschluss sinnvoll sein kann. Zweitens Zusatzoptionen mit Gratisphase (Streaming, Sicherheitspakete), die sich nach einigen Monaten stillschweigend in kostenpflichtige Abos verwandeln, wenn du sie nicht kündigst.",
      },
      {
        heading: "Handy zum Vertrag: Bundle oder getrennt kaufen?",
        body: "Ein subventioniertes Smartphone im Vertrag wirkt attraktiv, weil die Anschaffung auf die Monatsraten verteilt wird. Rechne aber nach: Addiere alle Monatsraten des Bundle-Tarifs über die Laufzeit und ziehe davon die Kosten eines vergleichbaren Tarifs ohne Gerät ab. Die Differenz ist der tatsächliche Gerätepreis – und der liegt nicht selten über dem Ladenpreis des Geräts.\n\nEs gibt keine pauschal richtige Antwort: Wer die Anschaffung nicht auf einmal stemmen will, kann mit einem Bundle gut fahren. Wer flexibel bleiben und insgesamt weniger zahlen will, fährt mit getrenntem Gerätekauf und günstigem Tarif häufig besser. Wichtig ist nur: bewusst entscheiden, nicht vom Bundle-Preis blenden lassen.",
      },
    ],
    faq: [
      {
        question: "Wie viel Datenvolumen brauche ich wirklich?",
        answer:
          "Das zeigt dir die Verbrauchsanzeige deines Smartphones oder die App deines Anbieters. Orientiere dich am Durchschnitt der letzten drei bis sechs Monate und plane eine kleine Reserve ein. Wer überwiegend im WLAN ist, kommt oft mit deutlich weniger aus als gedacht.",
      },
      {
        question: "Sind Discounter-Tarife schlechter als Tarife der Netzbetreiber?",
        answer:
          "Discounter nutzen dieselben physischen Netze wie die Netzbetreiber. Unterschiede gibt es teils bei der maximalen Geschwindigkeit, bei 5G-Zugang oder Zusatzfunktionen. Ob das im Alltag spürbar ist, hängt von deinem Nutzungsverhalten ab – für viele Anwendungsfälle reichen Discounter-Tarife aus.",
      },
      {
        question: "Kann ich meine Rufnummer beim Wechsel mitnehmen?",
        answer:
          "Ja, die Rufnummernmitnahme ist gesetzlich geregelt und beim Anbieterwechsel jederzeit möglich. Der neue Anbieter übernimmt in der Regel die Abwicklung; für die Mitnahme anfallende Kosten sind gesetzlich gedeckelt und werden von vielen Anbietern erstattet oder mit Gutschriften belohnt.",
      },
      {
        question: "Worauf sollte ich nach Vertragsschluss direkt achten?",
        answer:
          "Prüfe, ob eine Datenautomatik aktiv ist, und deaktiviere sie bei Bedarf. Notiere dir das Ende der Aktionsphase und der Mindestlaufzeit – zum Beispiel als Kalendererinnerung –, damit du rechtzeitig vergleichen und reagieren kannst, bevor sich der Preis erhöht.",
      },
    ],
    relatedPartnerIds: ["handy-vergleichsportal", "handy-netzbetreiber"],
    sensitive: false,
  },
  {
    slug: "internetvertrag-worauf-achten",
    title: "Internetvertrag abschließen: worauf du achten solltest",
    metaTitle: "Internetvertrag: worauf achten? Kriterien & Kostenfallen",
    metaDescription:
      "DSL, Kabel oder Glasfaser: So liest du Internet-Angebote richtig – Effektivpreis, Verfügbarkeit, Routerfrage und Vertragsbedingungen erklärt.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    readingMinutes: 7,
    categorySlug: "internet-dsl",
    sections: [
      {
        heading: "Erster Schritt: Was ist an deiner Adresse verfügbar?",
        body: "Beim Internetanschluss entscheidet die Adresse, nicht der Wunsch: DSL läuft über die Telefonleitung, Kabel-Internet über das TV-Kabelnetz, Glasfaser über eigene Leitungen bis in die Wohnung oder ans Gebäude. Nicht jede Technologie ist überall verfügbar – der Verfügbarkeitscheck mit deiner genauen Adresse ist deshalb immer der erste Schritt.\n\nWo Glasfaser verfügbar ist, bietet sie meist die stabilsten Werte, auch beim Upload. Kabel liefert hohe Download-Geschwindigkeiten, die sich aber in Stoßzeiten mit der Nachbarschaft geteilt werden können. DSL ist am weitesten verbreitet; die erreichbare Geschwindigkeit hängt stark von der Leitungslänge zum Verteiler ab.",
      },
      {
        heading: "Wie viel Geschwindigkeit brauchst du wirklich?",
        body: "Die beworbenen Maximalwerte sind für viele Haushalte überdimensioniert. Für Streaming in hoher Qualität, Videokonferenzen und normales Surfen reichen oft schon mittlere Bandbreiten – entscheidend ist eher, wie viele Personen und Geräte gleichzeitig aktiv sind. Wer regelmäßig große Dateien hochlädt oder im Homeoffice arbeitet, sollte zusätzlich auf den Upload-Wert achten, der bei vielen Tarifen deutlich niedriger ausfällt als der Download.\n\nBeachte den Unterschied zwischen „bis zu“-Angabe und Realität: Anbieter müssen im Produktinformationsblatt auch die normalerweise verfügbare und die minimale Geschwindigkeit angeben. Bleibt die tatsächliche Leistung wiederholt und erheblich dahinter zurück, hast du gesetzliche Möglichkeiten – von der Minderung des Entgelts bis zur außerordentlichen Kündigung. Die Bundesnetzagentur stellt für die Messung ein offizielles Tool bereit.",
      },
      {
        heading: "Effektivpreis: die einzige Zahl, die zählt",
        body: "Internet-Angebote arbeiten fast immer mit Aktionspreisen: In den ersten Monaten ist der Tarif günstig, danach steigt die Grundgebühr. Rechne deshalb alle Kosten über die Mindestlaufzeit zusammen – Grundgebühren beider Phasen, Bereitstellungspreis, Versandkosten, Routermiete – und ziehe Gutschriften ab. Geteilt durch die Laufzeit ergibt das den Effektivpreis pro Monat, mit dem sich Angebote ehrlich vergleichen lassen.\n\nDieser Effektivpreis verschiebt Rangfolgen regelmäßig: Ein Angebot mit höherem Einstiegspreis, aber ohne Bereitstellungskosten und mit dauerhaft stabilem Preis kann über zwei Jahre günstiger sein als das vermeintliche Schnäppchen.",
      },
      {
        heading: "Die Routerfrage: mieten oder kaufen?",
        body: "In Deutschland gilt Routerfreiheit: Du darfst ein eigenes Gerät anschließen, der Anbieter muss dir die Zugangsdaten bereitstellen. Ob sich das lohnt, ist eine einfache Rechnung: Monatliche Mietkosten über die Laufzeit gegen den Kaufpreis eines vergleichbaren Geräts.\n\nFür die Miete spricht, dass der Anbieter bei Defekten Ersatz stellt und das Gerät zum Anschluss passt. Für den Kauf sprechen die langfristigen Kosten und die freie Gerätewahl. Wichtig bei Vertragsende: Mietgeräte müssen meist innerhalb einer Frist zurückgeschickt werden, sonst drohen Nachforderungen.",
      },
      {
        heading: "Vertragsbedingungen und Wechsel ohne Lücke",
        body: "Nach der Mindestlaufzeit (üblich sind 24 Monate, es gibt auch kürzere und monatlich kündbare Tarife) verlängert sich der Vertrag automatisch, ist dann aber mit einer Frist von einem Monat kündbar. Notiere dir das Laufzeitende rechtzeitig.\n\nBeim Anbieterwechsel gilt: Der neue Anbieter übernimmt die Koordination, damit keine lange Versorgungslücke entsteht; die Versorgung darf beim Wechsel nicht länger als einen Kalendertag unterbrochen sein. Kündige deshalb nicht selbst auf eigene Faust, sondern beauftrage den neuen Anbieter mit dem Wechsel – so bleiben auch Rufnummern und Fristen sauber koordiniert.",
      },
    ],
    faq: [
      {
        question: "Was tun, wenn das Internet langsamer ist als versprochen?",
        answer:
          "Miss die Geschwindigkeit mit dem offiziellen Messtool der Bundesnetzagentur über mehrere Tage. Bleibt die Leistung wiederholt erheblich hinter den vertraglichen Angaben zurück, kannst du das Entgelt mindern oder außerordentlich kündigen. Die Messprotokolle dienen dabei als Nachweis gegenüber dem Anbieter.",
      },
      {
        question: "Kann ich meinen alten Router weiterverwenden?",
        answer:
          "Häufig ja – dank Routerfreiheit darfst du ein eigenes Gerät nutzen, sofern es die Anschlusstechnologie unterstützt (DSL-, Kabel- und Glasfaser-Router unterscheiden sich). Der Anbieter muss dir die nötigen Zugangsdaten kostenlos bereitstellen.",
      },
      {
        question: "Was passiert, wenn ich umziehe?",
        answer:
          "Kann der Anbieter am neuen Wohnort die vertragliche Leistung nicht erbringen, hast du ein Sonderkündigungsrecht mit einer Frist von einem Monat. Kann er liefern, läuft der Vertrag am neuen Ort weiter; für den Umzug des Anschlusses dürfen angemessene Kosten berechnet werden.",
      },
      {
        question: "Lohnt sich ein Tarif mit höherer Geschwindigkeit „auf Vorrat“?",
        answer:
          "Meist nicht. Sinnvoller ist, den aktuellen Bedarf zu decken und bei Veränderung zu wechseln oder hochzustufen – ein Upgrade ist bei den meisten Anbietern unkompliziert möglich, ein Downgrade während der Laufzeit dagegen selten.",
      },
    ],
    relatedPartnerIds: ["dsl-vergleichsportal", "dsl-tarifrechner"],
    sensitive: false,
  },
  {
    slug: "strom-gas-wechseln",
    title: "Strom- und Gasanbieter wechseln: so gehst du sachlich vor",
    metaTitle: "Strom & Gas wechseln: Ablauf, Fristen, Kostenfallen",
    metaDescription:
      "Anbieterwechsel bei Strom und Gas: Preisgarantien, Boni und Kündigungsfristen richtig einordnen – Schritt für Schritt erklärt.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    readingMinutes: 8,
    categorySlug: "strom-gas",
    sections: [
      {
        heading: "Ausgangslage: Grundversorgung oder Sondervertrag?",
        body: "Wer nie aktiv gewechselt hat, wird meist in der Grundversorgung beliefert – dem Standardtarif des örtlichen Versorgers. Die Grundversorgung ist jederzeit mit zwei Wochen Frist kündbar, aber häufig teurer als Sonderverträge. Ein Blick auf die letzte Jahresabrechnung zeigt dir, in welchem Tarif du bist, was du pro Kilowattstunde zahlst und wie hoch dein Jahresverbrauch ist.\n\nDiese beiden Zahlen – Arbeitspreis und Jahresverbrauch – sind die Grundlage jedes seriösen Vergleichs. Schätzwerte führen zu verzerrten Ergebnissen: Gib im Vergleichsrechner immer den tatsächlichen Verbrauch aus der Abrechnung an, nicht die voreingestellten Durchschnittswerte.",
      },
      {
        heading: "Preisgarantie ist nicht gleich Preisgarantie",
        body: "Eine „Preisgarantie“ klingt eindeutig, hat aber Abstufungen: Die umfassende Preisgarantie deckt fast alle Preisbestandteile ab. Die eingeschränkte Preisgarantie (häufiger) klammert Steuern, Abgaben und Umlagen aus – steigen diese, darf der Preis trotz Garantie angepasst werden. Eine reine Energiepreisgarantie sichert nur den Beschaffungsanteil ab.\n\nPrüfe deshalb nicht nur, wie lange die Garantie gilt, sondern was sie umfasst. Und unabhängig von jeder Garantie gilt: Bei einer Preiserhöhung hast du ein Sonderkündigungsrecht – der Anbieter muss dich darauf hinweisen.",
      },
      {
        heading: "Boni richtig einordnen: Rechnen statt hoffen",
        body: "Neukundenbonus und Sofortbonus machen viele Angebote im ersten Jahr rechnerisch günstig. Wichtig sind die Bedingungen: Der Neukundenbonus wird oft erst nach zwölf Monaten ununterbrochener Belieferung ausgezahlt oder mit der ersten Jahresabrechnung verrechnet. Wer vorher kündigt oder wessen Vertrag anders endet, verliert den Bonus – und hat dann womöglich einen teuren Tarif ohne den kalkulierten Vorteil bezahlt.\n\nSinnvoll ist eine doppelte Rechnung: einmal die Kosten im ersten Jahr mit Bonus, einmal die Kosten ab dem zweiten Jahr ohne Bonus. Liegt der Preis ab dem zweiten Jahr deutlich über dem Marktniveau, ist das Angebot nur attraktiv, wenn du bereit bist, nach zwölf Monaten erneut zu wechseln – das ist legitim, sollte aber eine bewusste Entscheidung sein.",
      },
      {
        heading: "Finger weg: Vorauskasse und Paketpreise",
        body: "Von zwei Tarifmodellen raten Verbraucherzentralen seit Jahren allgemein ab: Bei Vorauskasse-Tarifen zahlst du Monate im Voraus – geht der Anbieter insolvent, ist das Geld womöglich verloren. Bei Paketpreisen kaufst du eine feste Strommenge: Verbrauchst du mehr, wird jede zusätzliche Kilowattstunde teuer; verbrauchst du weniger, bekommst du nichts erstattet.\n\nBeide Modelle verlagern Risiken einseitig auf dich als Kundin oder Kunden. Die mögliche Ersparnis steht dazu selten in einem vernünftigen Verhältnis.",
      },
      {
        heading: "Der Wechsel selbst: unkompliziert und ohne Versorgungslücke",
        body: "Der eigentliche Wechsel ist der einfachste Teil: Du schließt den neuen Vertrag ab, der neue Anbieter kündigt in der Regel beim alten und koordiniert den Liefertermin. Eine Versorgungsunterbrechung ist ausgeschlossen – Strom und Gas fließen physisch weiter, es ändert sich nur der Vertragspartner. Seit der Beschleunigung des Lieferantenwechsels ist der Wechsel innerhalb weniger Werktage technisch möglich; maßgeblich bleibt aber die Kündigungsfrist deines bestehenden Vertrags.\n\nNur ein Fall erfordert Eile von dir selbst: Wenn du wegen einer Preiserhöhung dein Sonderkündigungsrecht nutzen willst, musst du meist selbst und fristgerecht kündigen – hier nicht auf den neuen Anbieter warten. Notiere dir nach dem Wechsel Laufzeitende und Kündigungsfrist des neuen Vertrags, dann bist du beim nächsten Mal vorbereitet.",
      },
    ],
    faq: [
      {
        question: "Kann beim Anbieterwechsel der Strom ausfallen?",
        answer:
          "Nein. Die physische Belieferung ist gesetzlich gesichert – notfalls springt automatisch die Grundversorgung ein. Beim Wechsel ändert sich nur der Vertragspartner, nicht die Leitung.",
      },
      {
        question: "Was passiert, wenn mein Anbieter insolvent wird?",
        answer:
          "Du fällst automatisch in die Ersatz- bzw. Grundversorgung des örtlichen Versorgers und kannst von dort in einen neuen Sondervertrag wechseln. Problematisch sind vor allem Vorauskasse-Tarife, weil bereits gezahlte Beträge in der Insolvenz verloren gehen können.",
      },
      {
        question: "Lohnt sich ein Ökostrom-Tarif?",
        answer:
          "Ökostrom-Tarife sind heute oft ähnlich teuer wie konventionelle Tarife. Wer Wert auf die Förderung erneuerbarer Energien legt, kann auf anerkannte Zertifizierungen achten, die über den reinen Zertifikatehandel hinausgehen. Die Vertragskriterien (Laufzeit, Garantie, Boni) gelten unabhängig davon.",
      },
      {
        question: "Wie oft sollte ich den Anbieter überprüfen?",
        answer:
          "Ein fester Rhythmus einmal im Jahr – etwa wenn die Jahresabrechnung kommt – reicht in der Regel. Dann hast du aktuelle Verbrauchswerte zur Hand und kannst prüfen, ob dein Tarif noch zum Marktniveau passt.",
      },
    ],
    relatedPartnerIds: ["energie-vergleichsportal", "energie-tarifrechner"],
    sensitive: false,
  },
  {
    slug: "kreditkarte-vergleichen",
    title: "Kreditkarte vergleichen: Kartentypen und Kosten verstehen",
    metaTitle: "Kreditkarte vergleichen: Kartentypen & Kosten erklärt",
    metaDescription:
      "Debit, Charge oder Revolving? Kreditkartenmodelle, Gebühren und Kostenfallen sachlich erklärt – allgemeine Orientierung ohne Produktempfehlung.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    readingMinutes: 7,
    categorySlug: "konto-kreditkarte",
    sections: [
      {
        heading: "Erst die Kartentypen verstehen, dann vergleichen",
        body: "Was umgangssprachlich alles „Kreditkarte“ heißt, sind technisch verschiedene Modelle. Die Debitkarte bucht Zahlungen sofort vom Girokonto ab – ein Kreditrahmen besteht nicht. Die Charge-Karte sammelt Umsätze und rechnet sie einmal im Monat vollständig ab. Die Revolving-Karte (echte Kreditkarte mit Teilzahlungsfunktion) erlaubt, offene Beträge in Raten zurückzuzahlen – gegen Sollzinsen, die deutlich über üblichen Ratenkreditzinsen liegen können. Daneben gibt es Prepaid-Karten auf Guthabenbasis.\n\nDer Typ entscheidet über mehr als die Abrechnung: Manche Vermieter von Mietwagen oder Hotels akzeptieren Debitkarten nicht oder nur mit Einschränkungen, weil keine Kaution geblockt werden kann. Wer solche Situationen erwartet, sollte auf das Kartenmodell achten, nicht nur auf den Preis.",
      },
      {
        heading: "Die Teilzahlungsfalle: Vollzahlung aktiv einstellen",
        body: "Bei vielen Revolving-Karten ist die Teilzahlung voreingestellt: Statt den vollen Monatsumsatz abzubuchen, wird nur ein kleiner Prozentsatz eingezogen – der Rest bleibt als verzinster Kredit stehen. Die Zinsen dafür gehören zu den teuersten Formen der Geldleihe im Alltag.\n\nWer eine solche Karte nutzt, kann in den Einstellungen meist auf 100-Prozent-Abbuchung (Vollzahlung) umstellen. Damit funktioniert die Karte wie eine Charge-Karte: voller Zahlungskomfort, keine Zinskosten. Diese eine Einstellung ist der wichtigste einzelne Schritt, um unbeabsichtigte Kosten zu vermeiden.",
      },
      {
        heading: "Gebühren im Blick: Jahresgebühr ist nur ein Posten",
        body: "Der Vergleich nur über die Jahresgebühr greift zu kurz. Relevant sind je nach Nutzung: Gebühren für Bargeldabhebungen im In- und Ausland, das Fremdwährungsentgelt bei Zahlungen außerhalb des Euroraums (üblich sind ein bis zwei Prozent des Umsatzes), Kosten für Ersatzkarten sowie Bedingungen, an die eine „kostenlose“ Karte geknüpft ist – etwa ein monatlicher Mindestumsatz.\n\nFür Vielreisende können sich Karten mit entfallenden Auslandsgebühren trotz Jahresgebühr rechnen; für Gelegenheitsnutzer ist oft eine dauerhaft gebührenfreie Karte mit Vollzahlung die unkomplizierteste Lösung. Welche Kombination passt, ergibt sich aus deinem tatsächlichen Nutzungsprofil – nicht aus der Werbung.",
      },
      {
        heading: "Zusatzleistungen nüchtern bewerten",
        body: "Karten mit Jahresgebühr werben häufig mit Versicherungspaketen: Reiserücktritt, Auslandskranken, Mietwagen-Vollkasko. Solche Leistungen können echten Wert haben – aber nur, wenn du sie brauchst und die Bedingungen kennst. Häufige Einschränkung: Der Versicherungsschutz greift nur, wenn die Reise mit der Karte bezahlt wurde.\n\nPrüfe außerdem, ob sich Leistungen mit bestehenden Verträgen doppeln – eine separate Auslandskrankenversicherung etwa kostet wenig und ist an keine Zahlungsbedingung geknüpft. Bonusprogramme und Cashback wiederum lohnen eine nüchterne Rechnung: Ein Prozent Rückvergütung gleicht keine Jahresgebühr aus, wenn der Umsatz dafür nicht hoch genug ist.",
      },
      {
        heading: "Was der Vergleich nicht leisten kann",
        body: "Ob eine Bank dir eine bestimmte Karte ausstellt und mit welchem Verfügungsrahmen, entscheidet sie nach eigener Prüfung – daran ändert kein Vergleichsportal etwas. Und welche Karte zu dir passt, hängt von deinem Zahlungsverhalten, deinen Reisen und deinem Girokonto ab.\n\nDieser Artikel gibt dir die Kriterien an die Hand; die Entscheidung triffst du auf Basis der konkreten Bedingungen des jeweiligen Anbieters. Lies vor dem Abschluss das Preis-Leistungs-Verzeichnis der Karte – es ist das verbindliche Dokument, nicht die Werbeseite.",
      },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Debitkarte und Kreditkarte?",
        answer:
          "Eine Debitkarte bucht jede Zahlung sofort vom Girokonto ab, eine klassische Kreditkarte (Charge oder Revolving) sammelt Umsätze und rechnet später ab. Im Handel funktionieren beide ähnlich; Unterschiede zeigen sich bei Kautionen (Mietwagen, Hotel) und bei der Kostenstruktur.",
      },
      {
        question: "Ist eine Kreditkarte ohne Jahresgebühr wirklich kostenlos?",
        answer:
          "Die Kartenführung kann kostenlos sein – Kosten können trotzdem entstehen: durch Teilzahlungszinsen, Fremdwährungsentgelte, Bargeldgebühren oder wenn Bedingungen wie ein Mindestumsatz nicht erfüllt werden. Das Preis-Leistungs-Verzeichnis zeigt alle Posten.",
      },
      {
        question: "Beeinflusst eine Kreditkarte meine Schufa?",
        answer:
          "Die Beantragung einer echten Kreditkarte mit Verfügungsrahmen wird in der Regel an die Schufa gemeldet und dort vermerkt. Ein einzelner Kartenvertrag mit ordentlicher Rückzahlung ist üblicherweise unproblematisch; viele parallel beantragte Karten können sich dagegen ungünstig auswirken. Debit- und Prepaid-Karten haben hier meist keine Relevanz.",
      },
      {
        question: "Wie stelle ich die Teilzahlung ab?",
        answer:
          "Bei den meisten Anbietern lässt sich der Rückzahlungsanteil im Online-Banking oder in der App auf 100 Prozent (Vollzahlung) stellen. Falls nicht, hilft der Kundenservice. Damit werden Umsätze monatlich komplett abgebucht und es fallen keine Teilzahlungszinsen an.",
      },
    ],
    relatedPartnerIds: ["kreditkarte-vergleichsportal", "konto-vergleichsportal"],
    sensitive: false,
  },
  {
    slug: "buchhaltungssoftware-selbststaendige",
    title: "Buchhaltungssoftware für Selbstständige: worauf du achten solltest",
    metaTitle: "Buchhaltungssoftware für Selbstständige: Kriterien",
    metaDescription:
      "Buchhaltungssoftware auswählen: Funktionen, E-Rechnung, GoBD, DATEV-Export, typische Kostenfallen und Checkliste – verständlich erklärt für Selbstständige.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-06",
    readingMinutes: 10,
    categorySlug: "buchhaltungssoftware",
    sections: [
      {
        heading: "Für wen sich Buchhaltungssoftware lohnt",
        body: "Grundsätzlich gilt: Wer regelmäßig Rechnungen schreibt, Belege sammelt und einmal im Jahr eine Gewinnermittlung abgeben muss, profitiert von Buchhaltungssoftware – unabhängig davon, ob es um eine nebenberufliche Selbstständigkeit oder ein Vollzeit-Unternehmen geht. Der Nutzen wächst mit der Zahl der Vorgänge: Bei einer Handvoll Rechnungen im Jahr ist der manuelle Aufwand überschaubar; bei wöchentlichen Ausgangsrechnungen, laufenden Betriebsausgaben und regelmäßigen Umsatzsteuervoranmeldungen spart strukturierte Software spürbar Zeit und reduziert Übertragungsfehler.\n\nZwei Entwicklungen machen Software für die meisten Selbstständigen inzwischen praktisch unumgänglich: die E-Rechnungspflicht im Geschäftsverkehr zwischen Unternehmen und die GoBD-Anforderungen an eine unveränderbare Belegablage – beides lässt sich mit Papierordnern und Tabellen kaum noch sauber abbilden. Zu beidem gleich mehr.",
      },
      {
        heading: "Welche Ausbaustufe brauchst du überhaupt?",
        body: "Buchhaltungssoftware gibt es in drei groben Ausbaustufen: reine Rechnungsprogramme (Angebote und Rechnungen schreiben, Zahlungseingänge im Blick behalten), Buchhaltungslösungen (zusätzlich Belegerfassung, EÜR, Umsatzsteuervoranmeldung) und Komplettpakete mit Lohn, Warenwirtschaft oder Bilanzierung.\n\nHilfreich ist, die Aufgabenbereiche auseinanderzuhalten: Rechnungen schreiben ist die Außenseite deiner Buchhaltung – korrekte Pflichtangaben, fortlaufende Nummern, saubere Vorlagen. Die Belegverwaltung ist die Innenseite: Eingangsrechnungen und Quittungen erfassen, zuordnen, archivieren. Die EÜR (Einnahmen-Überschuss-Rechnung) ist die daraus abgeleitete Gewinnermittlung für das Finanzamt. Und die Zusammenarbeit mit der Steuerkanzlei ist die Übergabestelle: Je nachdem, ob du alles selbst erledigst, nur die Vorarbeit leistest oder fast alles auslagerst, brauchst du unterschiedliche Funktionen. Nicht jedes Produkt deckt alle vier Bereiche gleich gut ab.\n\nFür viele Freiberufler und Einzelunternehmer mit Einnahmen-Überschuss-Rechnung reicht die mittlere Stufe. Wer bilanzierungspflichtig ist oder Mitarbeitende beschäftigt, braucht mehr – arbeitet dann aber meist ohnehin enger mit einer Steuerkanzlei zusammen, deren Anforderungen die Software-Wahl mitbestimmen sollten. Der häufigste Fehler ist, für Funktionen zu zahlen, die man absehbar nicht nutzt.",
      },
      {
        heading: "E-Rechnung: vom Nice-to-have zur Pflicht",
        body: "Seit 2025 gilt in Deutschland die E-Rechnungspflicht im Geschäftsverkehr zwischen Unternehmen schrittweise: Empfangen und verarbeiten können müssen E-Rechnungen (strukturierte Formate wie XRechnung oder ZUGFeRD) inzwischen alle Unternehmen – auch Kleinunternehmer. Die Pflicht zum Ausstellen greift nach Übergangsfristen gestaffelt.\n\nFür die Software-Auswahl heißt das konkret: E-Rechnungs-Unterstützung ist kein Zusatzfeature mehr, sondern Grundausstattung. Prüfe, ob Empfang, Erstellung und Archivierung strukturierter Rechnungen im gewählten Tarif enthalten sind – und nicht erst in einer teureren Stufe. Ein einfaches PDF per E-Mail erfüllt die Anforderungen an eine E-Rechnung nicht.",
      },
      {
        heading: "GoBD und Archivierung: die unsichtbare Pflicht",
        body: "Die GoBD (Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern) verlangen unter anderem, dass Belege unveränderbar, nachvollziehbar und über die gesetzliche Frist archiviert werden. Gute Software erledigt das im Hintergrund: Einmal erfasste Belege lassen sich nicht spurlos ändern, jede Korrektur wird protokolliert.\n\nWichtig ist der Blick auf das Vertragsende: Die Aufbewahrungspflicht läuft weiter, auch wenn du den Anbieter wechselst. Kläre deshalb vor dem Abschluss, wie du bei einer Kündigung an deine archivierten Belege kommst – ein vollständiger Datenexport in gängigen Formaten sollte möglich sein, ohne dass dafür laufende Kosten fällig bleiben.",
      },
      {
        heading: "Umsatzsteuervoranmeldung: was die Software übernimmt",
        body: "Wer umsatzsteuerpflichtig ist, meldet die eingenommene Umsatzsteuer abzüglich der selbst gezahlten Vorsteuer regelmäßig an das Finanzamt – je nach Höhe der Zahllast monatlich, vierteljährlich oder jährlich. Diese Umsatzsteuervoranmeldung ist elektronisch zu übermitteln. Gute Buchhaltungssoftware berechnet die Beträge automatisch aus den erfassten Rechnungen und Belegen und übermittelt die Voranmeldung direkt über die ELSTER-Schnittstelle – das ist einer der größten praktischen Vorteile gegenüber manueller Erfassung.\n\nFür die Auswahl heißt das: Wenn du umsatzsteuerpflichtig bist, sollte die Voranmeldung im gewählten Tarif enthalten sein und nicht als Zusatzmodul extra kosten. Kleinunternehmer, die keine Umsatzsteuer ausweisen, brauchen die Funktion zunächst nicht – sinnvoll ist aber ein Blick darauf, ob die Software einen späteren Wechsel zur Regelbesteuerung mitmacht, falls die Umsätze wachsen. Ob im Einzelfall Umsatzsteuerpflicht besteht und welcher Meldezeitraum gilt, klärst du mit deiner Steuerkanzlei oder dem Finanzamt – das kann eine Software-Auswahlhilfe nicht beantworten.",
      },
      {
        heading: "Schnittstellen: Konto, Steuerberater, Werkzeuge",
        body: "Der größte Alltagsnutzen entsteht durch Automatisierung: Eine Anbindung ans Geschäftskonto gleicht Zahlungseingänge automatisch mit offenen Rechnungen ab. Ein DATEV-Export (oder ein direkter Kanzlei-Zugang) erspart das Zusammensuchen von Unterlagen zum Jahresabschluss – frage im Zweifel deine Steuerkanzlei, welches Übergabeformat sie bevorzugt.\n\nAuch die Verbindung zu anderen Werkzeugen zählt: Zeiterfassung, aus der Rechnungen entstehen, oder ein Belegscan per Smartphone-App. Je weniger du manuell überträgst, desto geringer die Fehlerquote – und desto eher bleibt die Buchhaltung tatsächlich aktuell statt zum Quartalsende aufgeschoben.",
      },
      {
        heading: "Kostenmodelle realistisch vergleichen",
        body: "Die beworbenen Einstiegspreise gelten oft für abgespeckte Tarife. Rechne mit deinem realistischen Bedarf: Anzahl Rechnungen und Belege pro Monat, Umsatzsteuervoranmeldung ja oder nein, Support-Bedarf. Achte auf Tarifsprünge – manche Anbieter begrenzen Belege oder Kunden im günstigen Tarif, sodass wachsende Selbstständige schnell in die nächste Preisstufe rutschen.\n\nTestphasen sind üblich und sinnvoll: Erfasse darin echte Vorgänge aus deinem Alltag, nicht Beispieldaten. Ob die Bedienung zu dir passt, zeigt sich erst an der eigenen Rechnung, dem eigenen Beleg-Chaos und der ersten Umsatzsteuervoranmeldung. Und behalte das Abo-Modell im Blick: Jahresabos mit automatischer Verlängerung sollten mit einer Kalendererinnerung vor Ablauf der Testphase versehen werden.",
      },
      {
        heading: "Typische Kostenfallen im Überblick",
        body: "Die folgenden Muster begegnen dir bei vielen Anbietern. Keines davon ist für sich genommen unseriös – aber alle gehören vor dem Abschluss geprüft:\n\nGünstiger Einstiegspreis: Aktionspreise gelten oft nur für die ersten Monate oder das erste Jahr, danach greift der reguläre Listenpreis. Vergleiche immer mit dem Preis nach der Aktionsphase – das ist der Preis, den du auf Dauer zahlst.\n\nZusatzmodule: Funktionen wie Lohnabrechnung, erweiterte Auswertungen, zusätzliche Belegerkennung oder eben die Umsatzsteuervoranmeldung kosten je nach Anbieter extra. Prüfe, ob alles, was du tatsächlich brauchst, im Basistarif enthalten ist – sonst vergleichst du Äpfel mit Birnen.\n\nNutzeranzahl: Viele Tarife gelten für eine Person. Sobald eine zweite Person Zugriff braucht – Mitarbeitende, Mitgründerin, Büroservice – wird pro Nutzer abgerechnet oder der nächsthöhere Tarif fällig.\n\nBeleglimits: Günstige Tarife begrenzen teils die Zahl der Belege, Rechnungen oder Kunden pro Monat. Wer wächst, rutscht automatisch in die nächste Preisstufe. Kalkuliere mit deinem realistischen Volumen – auch dem in einem Jahr.\n\nVertragslaufzeit: Jahresabos sind pro Monat günstiger als Monatsabos, binden dich aber. Gerade am Anfang kann ein monatlich kündbares Abo die bessere Wahl sein, auch wenn es etwas mehr kostet – ein späterer Anbieterwechsel ist bei Buchhaltungsdaten aufwendiger als bei den meisten anderen Werkzeugen.\n\nKündigungsfrist: Notiere dir Laufzeitende und Kündigungsfrist direkt nach dem Abschluss, etwa als Kalendererinnerung. Und kläre schon vor der Kündigung, wie du an deine archivierten Daten kommst – die Aufbewahrungspflicht läuft nach dem Vertragsende weiter.",
      },
      {
        heading: "Checkliste: Das prüfst du vor der Entscheidung",
        body: "Bevor du dich festlegst, gehe diese Punkte einmal vollständig durch:\n\n1. Deckt der Tarif deine Kernaufgaben ab – Angebote, Rechnungen, Belegerfassung, EÜR und (falls für dich relevant) Umsatzsteuervoranmeldung?\n\n2. Sind E-Rechnungs-Empfang und -Erstellung (XRechnung/ZUGFeRD) im gewählten Tarif enthalten?\n\n3. Arbeitet die Software GoBD-konform – und bekommst du bei einer Kündigung einen vollständigen Datenexport in gängigen Formaten?\n\n4. Gibt es einen Bankabgleich für dein Geschäftskonto und einen DATEV-Export bzw. Kanzlei-Zugang, den deine Steuerkanzlei akzeptiert?\n\n5. Passen Nutzeranzahl und Beleglimits zu deinem realistischen Volumen – auch dann noch, wenn dein Geschäft wächst?\n\n6. Kennst du den regulären Preis nach der Aktionsphase und die Kosten aller Zusatzmodule, die du brauchst?\n\n7. Passen Vertragslaufzeit und Kündigungsfrist zu deiner Situation – und hast du beides notiert?\n\n8. Hast du die Software in der Testphase mit echten eigenen Vorgängen ausprobiert, nicht nur mit Beispieldaten?\n\nZum Schluss der wichtige Rahmen: Tarvyo24 bietet allgemeine Orientierung für die Software-Auswahl. Wir erbringen keine Steuerberatung – ob und wie einzelne Pflichten wie Umsatzsteuer, Gewinnermittlung oder Aufbewahrung dich konkret betreffen, klärst du mit deiner Steuerkanzlei oder deinem Finanzamt.",
      },
    ],
    faq: [
      {
        question: "Reicht eine Excel-Tabelle nicht auch?",
        answer:
          "Für eine sehr einfache EÜR war das lange verbreitet, stößt aber an Grenzen: Excel erfüllt die GoBD-Anforderungen an Unveränderbarkeit nicht ohne Weiteres, und die E-Rechnungspflicht (strukturierte Formate empfangen und verarbeiten) lässt sich damit nicht abbilden. Spätestens mit regelmäßigen Ausgangsrechnungen ist Software der sicherere Weg.",
      },
      {
        question: "Muss ich als Kleinunternehmer E-Rechnungen unterstützen?",
        answer:
          "Empfangen und verarbeiten: ja – das gilt für alle Unternehmen im B2B-Geschäft. Beim Ausstellen gelten für Kleinunternehmer Erleichterungen bzw. Übergangsregeln. Da sich Details ändern können, lohnt der Blick auf aktuelle Informationen der Finanzverwaltung oder die Rückfrage bei der Steuerkanzlei.",
      },
      {
        question: "Cloud-Lösung oder lokale Software?",
        answer:
          "Cloud-Lösungen sind heute der Standard für Selbstständige: automatische Updates (wichtig bei Rechtsänderungen), Zugriff von überall, Kanzlei-Zugang. Lokale Software gibt mehr Kontrolle über die Daten, verlagert aber Updates, Backups und Archivierung in deine Verantwortung. Bei Cloud-Anbietern auf Serverstandort und AV-Vertrag (DSGVO) achten.",
      },
      {
        question: "Kann ich die Software-Kosten steuerlich absetzen?",
        answer:
          "Laufende Kosten für betrieblich genutzte Buchhaltungssoftware sind grundsätzlich Betriebsausgaben. Wie sie im Einzelfall anzusetzen sind, klärst du am besten mit deiner Steuerkanzlei – Tarvyo24 erbringt keine Steuerberatung.",
      },
    ],
    relatedPartnerIds: [
      "buchhaltung-cloud",
      "buchhaltung-rechnungstool",
      "gewerbe-geschaeftskonto",
    ],
    sensitive: false,
  },
];
