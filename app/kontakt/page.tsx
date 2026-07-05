import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "So erreichst du Tarvyo24: allgemeine Anfragen per E-Mail. Bitte beachte: Wir erbringen keine individuelle Beratung.",
  alternates: {
    canonical: "/kontakt/",
  },
};

/*
 * Kontaktseite (Schritt 7) — bewusst ohne Formular-Backend (statischer
 * Export). Ein Formular über einen externen Dienst kann später ergänzt
 * werden.
 *
 * WICHTIG VOR GO-LIVE: Das Postfach info@tarvyo24.de muss tatsächlich
 * eingerichtet sein (site.ts → contactEmail), sonst laufen Anfragen ins
 * Leere. Betreiberangaben (Name/Anschrift) gehören ins Impressum (Schritt 8).
 */
export default function KontaktPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Kontakt
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        Schreib uns
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        Du hast eine allgemeine Frage zu Tarvyo24, einen Hinweis zu unseren
        Inhalten oder möchtest auf einen Fehler aufmerksam machen? Dann
        erreichst du uns per E-Mail:
      </p>

      <Card className="mt-8">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
          E-Mail
        </p>
        <a
          href={`mailto:${site.contactEmail}`}
          className="mt-1 inline-block rounded-md text-xl font-semibold text-brand-800 underline underline-offset-4 transition-colors hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
        >
          {site.contactEmail}
        </a>
      </Card>

      <section className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-brand-900">
          Was wir beantworten können – und was nicht
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          Wir freuen uns über allgemeine Anfragen, Feedback und
          Korrekturhinweise. Bitte beachte: Wir erbringen{" "}
          <strong>keine individuelle Beratung</strong> – auch nicht per E-Mail.
          Fragen zu deinem konkreten Vertrag, Tarif, Kredit oder
          Versicherungsfall kann dir nur der jeweilige Anbieter oder ein
          zugelassener Berater beantworten.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Angaben zum Betreiber dieser Seite findest du im{" "}
          <Link
            href="/impressum"
            className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
          >
            Impressum
          </Link>
          .
        </p>
      </section>
    </Container>
  );
}
