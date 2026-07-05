import type { Metadata } from "next";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { PlaceholderNotice } from "@/components/legal/PlaceholderNotice";

/*
 * IMPRESSUM — STRUKTUR-PLATZHALTER, KEIN FINALER RECHTSTEXT.
 *
 * HARTER GO-LIVE-BLOCKER: Vor Veröffentlichung müssen die echten
 * Betreiberangaben (§ 5 DDG) ergänzt und geprüft werden. Keine erfundenen
 * Namen, Adressen oder Registernummern — alle offenen Angaben stehen in
 * eckigen Klammern.
 *
 * Bewusst KEIN Link zur EU-ODR-Plattform: Sie wurde im Juli 2025
 * eingestellt und gehört nicht mehr ins Impressum.
 *
 * noindex, follow: solange diese Seite ein Platzhalter ist, soll sie nicht
 * in Suchergebnissen erscheinen. Beim Einpflegen des finalen Rechtstexts
 * prüfen und ggf. entfernen (Rechtsseiten können auch dauerhaft noindex
 * bleiben — Entscheidung dann treffen).
 */
export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Tarvyo24.",
  alternates: {
    canonical: "/impressum/",
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

export default function ImpressumPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        Impressum
      </h1>

      <div className="mt-6">
        <PlaceholderNotice />
      </div>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-bold tracking-tight text-brand-900">
            Betreiber / Verantwortlicher
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            <Placeholder>[Vor- und Nachname bzw. Unternehmen des Betreibers einsetzen]</Placeholder>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-brand-900">Anschrift</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            <Placeholder>[Straße und Hausnummer einsetzen]</Placeholder>
            <br />
            <Placeholder>[Postleitzahl und Ort einsetzen]</Placeholder>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-brand-900">Kontakt</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            E-Mail:{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-brand-800 underline underline-offset-2 hover:text-brand-900"
            >
              {site.contactEmail}
            </a>
            <br />
            <Placeholder>[ggf. Telefonnummer einsetzen]</Placeholder>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-brand-900">
            Umsatzsteuer-Identifikationsnummer
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            <Placeholder>[Falls vorhanden: USt-IdNr. nach § 27a UStG einsetzen, sonst Abschnitt entfernen]</Placeholder>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-brand-900">
            Verantwortlich für Inhalte nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            <Placeholder>[Vor- und Nachname sowie Anschrift der inhaltlich verantwortlichen Person einsetzen]</Placeholder>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-brand-900">
            Verbraucherstreitbeilegung
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            <Placeholder>[Angabe nach § 36 VSBG einsetzen: Erklärung, ob eine Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle erfolgt oder nicht]</Placeholder>
          </p>
        </section>
      </div>
    </Container>
  );
}
