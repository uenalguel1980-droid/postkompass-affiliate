import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

/*
 * DATENSCHUTZERKLÄRUNG — finaler Text, eingepflegt am 06.07.2026
 * (vom Betreiber geliefert, 1:1 übernommen). Der Betreiber sollte den
 * Text vor dem Livegang abschließend prüfen (siehe DEPLOYMENT.md).
 *
 * noindex, follow bleibt BEWUSST bestehen: Rechtsseiten bleiben dauerhaft
 * aus dem Index (Entscheidung vom 06.07.2026, siehe app/impressum/page.tsx).
 *
 * Bei technischen/inhaltlichen Änderungen der Website (Tracking, echte
 * Affiliate-Links, Kontaktformular, Newsletter, externe Dienste) muss
 * dieser Text angepasst werden — siehe Abschnitt 19.
 */
export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Tarvyo24.",
  alternates: {
    canonical: "/datenschutz/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

interface PrivacySection {
  heading: string;
  blocks: Block[];
}

const sections: PrivacySection[] = [
  {
    heading: "1. Verantwortlicher",
    blocks: [
      {
        type: "p",
        text: "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
      },
      {
        type: "p",
        text: "Marija Beisler\nEinzelunternehmen\nTriftstraße 19\n31089 Duingen\nDeutschland",
      },
      {
        type: "p",
        text: "E-Mail: info@tarvyo24.de\nTelefon: 0152 54040085",
      },
    ],
  },
  {
    heading: "2. Allgemeine Hinweise zur Datenverarbeitung",
    blocks: [
      {
        type: "p",
        text: "Wir nehmen den Schutz personenbezogener Daten ernst. Personenbezogene Daten sind alle Informationen, mit denen eine natürliche Person direkt oder indirekt identifiziert werden kann.",
      },
      {
        type: "p",
        text: "Diese Website dient der Bereitstellung von Informationen, Ratgebern, Vergleichsinhalten und Hinweisen rund um Verbraucher- und Servicethemen. Die Verarbeitung personenbezogener Daten erfolgt nur, soweit dies für den Betrieb der Website, die Sicherheit, die technische Bereitstellung oder die Bearbeitung von Kontaktanfragen erforderlich ist.",
      },
    ],
  },
  {
    heading: "3. Hosting und Server-Logfiles",
    blocks: [
      { type: "p", text: "Diese Website wird bei Hostinger gehostet." },
      {
        type: "p",
        text: "Beim Aufruf dieser Website werden durch den Webserver technisch erforderliche Zugriffsdaten verarbeitet. Dazu können insbesondere gehören:",
      },
      {
        type: "ul",
        items: [
          "IP-Adresse des aufrufenden Geräts",
          "Datum und Uhrzeit des Zugriffs",
          "aufgerufene Seite oder Datei",
          "übertragene Datenmenge",
          "verwendeter Browser",
          "verwendetes Betriebssystem",
          "Referrer-URL, sofern übermittelt",
          "Statuscodes und technische Zugriffsinformationen",
        ],
      },
      {
        type: "p",
        text: "Die Verarbeitung dieser Daten ist erforderlich, um die Website technisch auszuliefern, die Stabilität und Sicherheit des Angebots zu gewährleisten und Missbrauch oder technische Störungen erkennen zu können.",
      },
      {
        type: "p",
        text: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren, stabilen und fehlerfreien Betrieb dieser Website.",
      },
      {
        type: "p",
        text: "Server-Logfiles werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist, und anschließend gelöscht oder anonymisiert, sofern keine längere Speicherung aus Sicherheitsgründen oder zur Aufklärung von Missbrauch erforderlich ist.",
      },
    ],
  },
  {
    heading: "4. Kontaktaufnahme per E-Mail oder Telefon",
    blocks: [
      {
        type: "p",
        text: "Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten, insbesondere Name, Kontaktdaten, Inhalt der Anfrage sowie Zeitpunkt der Kontaktaufnahme.",
      },
      {
        type: "p",
        text: "Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur Kommunikation mit Ihnen.",
      },
      {
        type: "p",
        text: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit vorvertraglichen oder vertraglichen Maßnahmen zusammenhängt. In allen übrigen Fällen ist Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sachgerechten Bearbeitung eingehender Anfragen.",
      },
      {
        type: "p",
        text: "Die Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      },
    ],
  },
  {
    heading: "5. Cookies und vergleichbare Technologien",
    blocks: [
      {
        type: "p",
        text: "Diese Website verwendet nach aktuellem Stand keine eigenen Marketing-Cookies, keine Analyse-Cookies und keine Tracking-Technologien.",
      },
      {
        type: "p",
        text: "Soweit technisch notwendige Cookies oder vergleichbare Speichertechnologien eingesetzt werden sollten, erfolgt dies ausschließlich, um die Website technisch bereitzustellen oder sicherheitsrelevante Funktionen zu ermöglichen.",
      },
      {
        type: "p",
        text: "Rechtsgrundlage für technisch erforderliche Verarbeitungen ist Art. 6 Abs. 1 lit. f DSGVO. Soweit eine Speicherung oder ein Zugriff auf Informationen im Endgerät erfolgt, richtet sich dies zusätzlich nach § 25 TDDDG. Nicht technisch notwendige Cookies oder vergleichbare Technologien werden nur eingesetzt, wenn zuvor eine Einwilligung eingeholt wurde.",
      },
    ],
  },
  {
    heading: "6. Kein Tracking und keine Webanalyse",
    blocks: [
      {
        type: "p",
        text: "Auf dieser Website sind derzeit keine Tracking- oder Webanalyse-Dienste aktiv.",
      },
      { type: "p", text: "Insbesondere werden aktuell nicht eingesetzt:" },
      {
        type: "ul",
        items: [
          "Google Analytics",
          "Google Tag Manager",
          "Meta Pixel / Facebook Pixel",
          "TikTok Pixel",
          "Microsoft Advertising Tracking",
          "Hotjar oder vergleichbare Analysewerkzeuge",
        ],
      },
      {
        type: "p",
        text: "Sollten künftig Analyse- oder Tracking-Dienste eingesetzt werden, wird diese Datenschutzerklärung entsprechend ergänzt und, soweit erforderlich, eine vorherige Einwilligung eingeholt.",
      },
    ],
  },
  {
    heading: "7. Affiliate-Links und Partnerprogramme",
    blocks: [
      {
        type: "p",
        text: "Diese Website ist als Informations- und Vergleichsangebot vorbereitet. Nach aktuellem Stand sind jedoch keine echten Affiliate-Links oder Partnertracking-Links aktiv.",
      },
      {
        type: "p",
        text: "Sollten künftig Affiliate-Links oder Partnerprogramme eingebunden werden, kann es sein, dass beim Anklicken eines solchen Links Daten an den jeweiligen Anbieter oder das jeweilige Partnernetzwerk übermittelt werden. Dies kann insbesondere die Information umfassen, dass Sie über unsere Website auf ein Angebot weitergeleitet wurden.",
      },
      {
        type: "p",
        text: "Vor dem Einsatz echter Affiliate-Links wird diese Datenschutzerklärung entsprechend ergänzt. Soweit für bestimmte Tracking- oder Partnertechnologien eine Einwilligung erforderlich ist, werden diese Technologien erst nach entsprechender Einwilligung eingesetzt.",
      },
    ],
  },
  {
    heading: "8. Keine Newsletter-Funktion",
    blocks: [
      {
        type: "p",
        text: "Diese Website bietet derzeit keinen Newsletter an. Es erfolgt daher keine Verarbeitung personenbezogener Daten für Newsletter-Versand oder E-Mail-Marketing.",
      },
      {
        type: "p",
        text: "Sollte künftig ein Newsletter angeboten werden, wird diese Datenschutzerklärung entsprechend ergänzt.",
      },
    ],
  },
  {
    heading: "9. Kein Kontaktformular",
    blocks: [
      {
        type: "p",
        text: "Diese Website verwendet derzeit kein Kontaktformular. Eine Kontaktaufnahme ist aktuell nur über die angegebene E-Mail-Adresse oder Telefonnummer möglich.",
      },
      {
        type: "p",
        text: "Sollte künftig ein Kontaktformular eingebunden werden, wird diese Datenschutzerklärung entsprechend ergänzt.",
      },
    ],
  },
  {
    heading: "10. Keine eingebundenen Social-Media-Plugins",
    blocks: [
      {
        type: "p",
        text: "Auf dieser Website werden derzeit keine aktiven Social-Media-Plugins verwendet, die bereits beim Laden der Seite Daten an soziale Netzwerke übertragen.",
      },
      {
        type: "p",
        text: "Sollten künftig Social-Media-Plugins, eingebettete Inhalte oder Verlinkungen zu Social-Media-Profilen eingebunden werden, wird diese Datenschutzerklärung entsprechend ergänzt.",
      },
    ],
  },
  {
    heading: "11. Externe Inhalte und Schriftarten",
    blocks: [
      {
        type: "p",
        text: "Nach aktuellem technischen Stand werden keine externen Trackingdienste und keine externen Marketingdienste eingebunden.",
      },
      {
        type: "p",
        text: "Sollten künftig externe Inhalte, Karten, Videos, Schriftarten oder sonstige Dienste Dritter eingebunden werden, kann es zu einer Übermittlung personenbezogener Daten an diese Anbieter kommen. In diesem Fall wird diese Datenschutzerklärung entsprechend ergänzt.",
      },
    ],
  },
  {
    heading: "12. Empfänger personenbezogener Daten",
    blocks: [
      {
        type: "p",
        text: "Personenbezogene Daten können im Rahmen des technischen Betriebs an Dienstleister übermittelt werden, die uns beim Betrieb dieser Website unterstützen, insbesondere an den Hosting-Anbieter.",
      },
      {
        type: "p",
        text: "Eine Weitergabe an Dritte erfolgt nur, wenn dies gesetzlich erlaubt ist, zur Bearbeitung Ihrer Anfrage erforderlich ist, eine rechtliche Verpflichtung besteht oder Sie eingewilligt haben.",
      },
    ],
  },
  {
    heading: "13. Datenübermittlung in Drittländer",
    blocks: [
      {
        type: "p",
        text: "Eine gezielte Übermittlung personenbezogener Daten in Staaten außerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums findet durch uns derzeit nicht statt.",
      },
      {
        type: "p",
        text: "Sofern künftig Dienste eingesetzt werden, bei denen eine Drittlandübermittlung möglich ist, wird diese Datenschutzerklärung entsprechend ergänzt. Soweit erforderlich, werden geeignete Garantien nach der DSGVO vorgesehen oder eine Einwilligung eingeholt.",
      },
    ],
  },
  {
    heading: "14. Speicherdauer",
    blocks: [
      {
        type: "p",
        text: "Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist.",
      },
      {
        type: "p",
        text: "Daten aus Kontaktanfragen werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      },
      {
        type: "p",
        text: "Server-Logfiles werden nur für den technisch erforderlichen Zeitraum gespeichert und anschließend gelöscht oder anonymisiert, sofern keine längere Speicherung aus Sicherheitsgründen erforderlich ist.",
      },
    ],
  },
  {
    heading: "15. Ihre Rechte",
    blocks: [
      {
        type: "p",
        text: "Sie haben im Rahmen der gesetzlichen Voraussetzungen folgende Rechte:",
      },
      {
        type: "ul",
        items: [
          "Recht auf Auskunft über die verarbeiteten personenbezogenen Daten",
          "Recht auf Berichtigung unrichtiger Daten",
          "Recht auf Löschung personenbezogener Daten",
          "Recht auf Einschränkung der Verarbeitung",
          "Recht auf Datenübertragbarkeit",
          "Recht auf Widerspruch gegen bestimmte Verarbeitungen",
          "Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft",
          "Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde",
        ],
      },
      {
        type: "p",
        text: "Zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden.",
      },
    ],
  },
  {
    heading: "16. Widerspruchsrecht nach Art. 21 DSGVO",
    blocks: [
      {
        type: "p",
        text: "Wenn personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen.",
      },
      {
        type: "p",
        text: "Legen Sie Widerspruch ein, werden die betroffenen personenbezogenen Daten nicht mehr verarbeitet, es sei denn, es bestehen zwingende schutzwürdige Gründe für die Verarbeitung oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
      },
    ],
  },
  {
    heading: "17. Beschwerderecht bei der Datenschutzaufsichtsbehörde",
    blocks: [
      {
        type: "p",
        text: "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstößt.",
      },
      { type: "p", text: "Für Niedersachsen zuständig ist:" },
      {
        type: "p",
        text: "Der Landesbeauftragte für den Datenschutz Niedersachsen\nPrinzenstraße 5\n30159 Hannover\nDeutschland",
      },
      {
        type: "p",
        text: "Telefon: 0511 120-4500\nE-Mail: poststelle@lfd.niedersachsen.de\nWebsite: https://www.lfd.niedersachsen.de",
      },
    ],
  },
  {
    heading: "18. SSL- bzw. TLS-Verschlüsselung",
    blocks: [
      {
        type: "p",
        text: "Diese Website soll über eine verschlüsselte Verbindung bereitgestellt werden. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresse der Website mit „https://“ beginnt.",
      },
      {
        type: "p",
        text: "Bitte übermitteln Sie vertrauliche Informationen möglichst nur, wenn eine verschlüsselte Verbindung aktiv ist.",
      },
    ],
  },
  {
    heading: "19. Aktualität und Änderung dieser Datenschutzerklärung",
    blocks: [
      {
        type: "p",
        text: "Diese Datenschutzerklärung gilt für den aktuellen technischen Stand dieser Website.",
      },
      {
        type: "p",
        text: "Wenn sich die Website technisch oder inhaltlich ändert, insbesondere durch den Einsatz von Tracking, Affiliate-Links, Kontaktformularen, Newsletter-Funktionen oder externen Diensten, wird diese Datenschutzerklärung entsprechend angepasst.",
      },
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        Datenschutzerklärung
      </h1>
      <p className="mt-3 text-sm text-slate-500">Stand: 06.07.2026</p>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold tracking-tight text-brand-900">
              {section.heading}
            </h2>
            {section.blocks.map((block, index) =>
              block.type === "p" ? (
                <p
                  key={index}
                  className="mt-3 whitespace-pre-line text-base leading-relaxed text-slate-700"
                >
                  {block.text}
                </p>
              ) : (
                <ul key={index} className="mt-3 space-y-1.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-relaxed text-slate-700"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}
      </div>
    </Container>
  );
}
