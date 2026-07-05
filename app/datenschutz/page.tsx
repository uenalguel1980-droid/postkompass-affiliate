import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PlaceholderNotice } from "@/components/legal/PlaceholderNotice";

/*
 * DATENSCHUTZERKLÄRUNG — STRUKTUR-PLATZHALTER, KEIN FINALER RECHTSTEXT.
 *
 * HARTER GO-LIVE-BLOCKER: Vor Veröffentlichung muss eine vollständige,
 * geprüfte Datenschutzerklärung (DSGVO) eingepflegt werden. Die Abschnitte
 * unten geben nur die Struktur vor und halten die faktischen v1-Zustände
 * fest (kein Tracking, keine Formulare) — sie sind KEIN vollständiger
 * Rechtstext und enthalten keine Zusicherungen.
 *
 * noindex, follow: solange Platzhalter — beim Einpflegen des finalen
 * Texts prüfen und ggf. entfernen (siehe Hinweis in app/impressum/page.tsx).
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

/** Sichtbar als Platzhalter markierter Wert. */
function Placeholder({ children }: { children: string }) {
  return <span className="italic text-slate-400">{children}</span>;
}

/** Strukturabschnitt: Überschrift + v1-Faktennotiz und/oder Platzhalter. */
const sections: { heading: string; note?: string; placeholder: string }[] = [
  {
    heading: "Verantwortlicher",
    placeholder:
      "[Name und Anschrift des Verantwortlichen einsetzen – identisch mit den Angaben im Impressum]",
  },
  {
    heading: "Hosting",
    note: "Die Webseite wird als statische Seite bei einem Hosting-Anbieter betrieben.",
    placeholder:
      "[Hosting-Anbieter benennen (geplant: Hostinger), Auftragsverarbeitung und Serverstandort im finalen Text beschreiben]",
  },
  {
    heading: "Server-Logs",
    note: "Beim Aufruf der Seite verarbeitet der Hosting-Anbieter technisch bedingt Verbindungsdaten (z. B. IP-Adresse) in Server-Logs.",
    placeholder:
      "[Art, Zweck, Rechtsgrundlage und Speicherdauer der Server-Logs im finalen Text beschreiben]",
  },
  {
    heading: "Kontaktaufnahme per E-Mail",
    note: "Es gibt kein Kontaktformular und keine Formularverarbeitung. Kontakt ist ausschließlich per E-Mail-Link möglich; übermittelte Angaben werden nur zur Beantwortung der Anfrage verwendet.",
    placeholder:
      "[Rechtsgrundlage und Speicherdauer für E-Mail-Kommunikation im finalen Text beschreiben]",
  },
  {
    heading: "Affiliate-Links / Partnerlinks",
    note: "Die Seite ist zur Finanzierung über Partnerlinks vorgesehen. Aktuell sind alle Partnerplatzierungen Platzhalter ohne Verlinkung; echte Partnerlinks folgen erst später.",
    placeholder:
      "[Sobald echte Partnerlinks aktiv sind: beteiligte Netzwerke, Tracking-Mechanismen der Partner und Rechtsgrundlagen im finalen Text beschreiben]",
  },
  {
    heading: "Cookies / Tracking",
    note: "In der aktuellen Version setzt die Webseite selbst keine Cookies ein und es ist kein Tracking aktiv.",
    placeholder:
      "[Falls künftig Cookies oder Tracking eingesetzt werden: nur mit Consent-Lösung, dann hier vollständig beschreiben]",
  },
  {
    heading: "Analyse-Tools",
    note: "Es sind keine Analyse-Tools (z. B. Google Analytics) aktiv.",
    placeholder:
      "[Bei späterer Aktivierung: Tool, Zweck, Rechtsgrundlage (Einwilligung über Consent-Lösung) und Widerrufsmöglichkeit im finalen Text beschreiben]",
  },
  {
    heading: "Betroffenenrechte",
    placeholder:
      "[Rechte der betroffenen Personen (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch, Beschwerderecht) im finalen Text vollständig ausführen]",
  },
];

export default function DatenschutzPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        Datenschutzerklärung
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        Stand: <Placeholder>[Datum beim Einpflegen des finalen Texts einsetzen]</Placeholder>
      </p>

      <div className="mt-6">
        <PlaceholderNotice />
      </div>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold tracking-tight text-brand-900">
              {section.heading}
            </h2>
            {section.note && (
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {section.note}
              </p>
            )}
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              <Placeholder>{section.placeholder}</Placeholder>
            </p>
          </section>
        ))}
      </div>
    </Container>
  );
}
