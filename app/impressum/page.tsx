import type { Metadata } from "next";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

/*
 * IMPRESSUM — echte Betreiberangaben (eingepflegt am 06.07.2026,
 * vom Betreiber geliefert).
 *
 * Bewusste Auslassungen (Vorgabe des Betreibers):
 * - keine Umsatzsteuer-ID (nicht vorhanden — Abschnitt entfernt, kein Platzhalter)
 * - keine Steuernummer (wird nicht angezeigt)
 *
 * Kein Link zur EU-ODR-Plattform (seit Juli 2025 eingestellt).
 *
 * noindex, follow bleibt BEWUSST bestehen: Rechtsseiten haben keinen
 * SEO-Wert und bleiben dauerhaft aus dem Index — die Seite ist über
 * Footer/Kontakt jederzeit erreichbar (Impressumspflicht erfüllt).
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

export default function ImpressumPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        Impressum
      </h1>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-bold tracking-tight text-brand-900">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Marija Beisler
            <br />
            Einzelunternehmen
            <br />
            Triftstraße 19
            <br />
            31089 Duingen
            <br />
            Deutschland
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Vertretungsberechtigt: Marija Beisler
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
            Telefon: 0152 54040085
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-brand-900">
            Verantwortlich für Inhalte nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Marija Beisler
            <br />
            Triftstraße 19
            <br />
            31089 Duingen
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-brand-900">
            Verbraucherstreitbeilegung
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen (§ 36 VSBG).
          </p>
        </section>
      </div>
    </Container>
  );
}
