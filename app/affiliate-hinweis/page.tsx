import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Affiliate-Hinweis: So finanziert sich Tarvyo24",
  description:
    "Was Partnerlinks sind, wie Tarvyo24 Geld verdient und warum für dich keine Mehrkosten entstehen – verständlich erklärt.",
  alternates: {
    canonical: "/affiliate-hinweis/",
  },
};

/*
 * Affiliate-Hinweis (Schritt 7) — redaktioneller Transparenztext in
 * Frage-Antwort-Struktur, bewusst verbrauchernah statt Juristendeutsch.
 * Kein Ersatz für Impressum/Datenschutz (echte Rechtstexte folgen extern).
 */
const faq: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Was sind Partnerlinks?",
    answer:
      "Partnerlinks (auch Affiliate-Links) führen zu Anbietern oder Vergleichsportalen, mit denen wir zusammenarbeiten. Klickst du auf so einen Link und rufst dort ein Angebot auf oder schließt etwas ab, kann der Anbieter uns dafür eine Vergütung zahlen.",
  },
  {
    question: "Wie verdient Tarvyo24 Geld?",
    answer:
      "Ausschließlich über solche Partnerlinks. Wir verkaufen keine eigenen Produkte, schalten keine Bannerwerbung von Dritten und verlangen kein Geld von dir für die Inhalte dieser Seite.",
  },
  {
    question: "Entstehen für mich Mehrkosten?",
    answer:
      "Nein. Die Vergütung zahlt der Anbieter aus seinem Werbebudget. Der Preis eines Tarifs oder Produkts ist für dich identisch – egal, ob du über unseren Link kommst oder den Anbieter direkt aufrufst.",
  },
  {
    question: "Beeinflusst die Provision eure Inhalte?",
    answer:
      "Provisionen beeinflussen nicht, wie wir Themen einordnen, welche Kostenfallen wir benennen oder welche Kriterien wir in Checklisten aufnehmen. Unsere Ratgeber entstehen unabhängig davon, ob und mit wem eine Partnerschaft besteht. Was wir dabei bewusst nicht tun, liest du auf unserer Vertrauensseite.",
  },
  {
    question: "Warum sind Links als „Anzeige“ gekennzeichnet?",
    answer:
      "Weil Transparenz für dich zählt – und weil es rechtlich vorgeschrieben ist: Kommerzielle Links müssen als Werbung erkennbar sein. Deshalb trägt bei uns jeder Werbeplatz eine deutlich sichtbare Kennzeichnung.",
  },
  {
    question: "Warum steht manchmal „Partner folgt in Kürze“?",
    answer:
      "Tarvyo24 ist im Aufbau. Wo du diesen Hinweis siehst, ist ein Werbeplatz vorbereitet, aber noch keine Partnerschaft aktiv – der Platz ist dann bewusst nicht verlinkt. Sobald eine geprüfte Partnerschaft besteht, wird der Platz freigeschaltet und bleibt klar als Anzeige gekennzeichnet.",
  },
];

export default function AffiliateHinweisPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Transparenz
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        Affiliate-Hinweis
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        Diese Seite finanziert sich über Partnerlinks. Hier erklären wir
        verständlich, was das bedeutet – und was es für dich heißt. Links und
        Flächen, die mit{" "}
        <Badge variant="ad">Anzeige</Badge> gekennzeichnet sind, sind solche
        Partnerplatzierungen.
      </p>

      <div className="mt-10 space-y-10">
        {faq.map((item) => (
          <section key={item.question}>
            <h2 className="text-xl font-bold tracking-tight text-brand-900">
              {item.question}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              {item.answer}
            </p>
          </section>
        ))}
      </div>

      <p className="mt-12 border-t border-slate-200 pt-6 text-sm leading-relaxed text-slate-500">
        Mehr über unsere Arbeitsweise und redaktionellen Grundsätze findest du
        auf der Seite{" "}
        <Link
          href="/vertrauen"
          className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
        >
          Vertrauen & Transparenz
        </Link>
        .
      </p>
    </Container>
  );
}
