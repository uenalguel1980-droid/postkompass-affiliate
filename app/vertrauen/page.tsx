import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Vertrauen & Transparenz: So arbeitet Tarvyo24",
  description:
    "Wie Tarvyo24 arbeitet, wie wir uns finanzieren und was wir bewusst nicht tun: keine Beratung, keine Fake-Bewertungen, keine versteckte Werbung.",
  alternates: {
    canonical: "/vertrauen/",
  },
};

/*
 * Vertrauensseite (Schritt 7). Sprachregel: keine Absolutversprechen wie
 * "unabhängig" oder "objektiv" — stattdessen transparent finanziert,
 * Werbung gekennzeichnet, keine Garantie auf Ersparnis.
 */
const principles = [
  "Wir schreiben verständlich und benennen Kostenfallen beim Namen – ohne Fachchinesisch.",
  "Wir verzichten auf Superlative, Ersparnis-Garantien und Dringlichkeits-Sprache.",
  "Jede Werbung und jeder Partnerlink ist deutlich als Anzeige gekennzeichnet.",
  "Wir erfinden keine Bewertungen, Testsiegel oder Nutzerzahlen.",
  "Bei sensiblen Themen wie Kredit und Versicherungen geben wir nur allgemeine Orientierung – nie individuelle Empfehlungen.",
];

const notList = [
  "kein Versicherungsberater und kein Versicherungsvermittler",
  "kein Kredit- oder Finanzberater",
  "kein Rechts- oder Steuerberater",
  "kein Vergleichsrechner mit eigenen Tarifdaten – Vergleiche finden bei unseren Partnern statt",
];

export default function VertrauenPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Vertrauen
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        So arbeitet Tarvyo24
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        Tarvyo24 hilft dir, Tarife, Angebote und Verträge verständlich zu
        prüfen, typische Kostenfallen zu erkennen und passende
        Vergleichsmöglichkeiten aufzurufen. Damit du einordnen kannst, was du
        hier liest, erklären wir offen, wie wir arbeiten – und was wir bewusst
        nicht tun.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-brand-900">
          Unsere redaktionellen Grundsätze
        </h2>
        <ul className="mt-4 space-y-3">
          {principles.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base leading-relaxed text-slate-700"
            >
              <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-brand-900">
          Was Tarvyo24 ist – und was nicht
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Tarvyo24 ist ein redaktionelles Orientierungs- und Vergleichsportal.
          Wir sind ausdrücklich:
        </p>
        <ul className="mt-4 space-y-2">
          {notList.map((item) => (
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
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          {site.legalNotice}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-brand-900">
          Wie wir uns finanzieren
        </h2>
        <Card className="mt-4">
          <p className="text-base leading-relaxed text-slate-700">
            {site.affiliateShortNotice} Erhalten wir eine Provision,
            beeinflusst das nicht, wie wir Themen einordnen oder welche
            Kostenfallen wir benennen. Was ein Partnerlink genau ist und wie
            die Vergütung funktioniert, erklären wir ausführlich im{" "}
            <Link
              href="/affiliate-hinweis"
              className="font-medium text-brand-800 underline underline-offset-2 hover:text-brand-900"
            >
              Affiliate-Hinweis
            </Link>
            .
          </p>
        </Card>
      </section>
    </Container>
  );
}
