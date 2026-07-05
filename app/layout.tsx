import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentBannerPlaceholder } from "@/components/consent/ConsentBannerPlaceholder";
import "./globals.css";

/*
 * Schrift wird über next/font selbst gehostet — kein Request an Google-Server
 * zur Laufzeit (DSGVO + Performance). Inter ist die einzige Schrift.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.brandName} – ${site.claim}`,
    template: `%s | ${site.brandName}`,
  },
  description: site.defaultDescription,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: site.brandName,
    title: `${site.brandName} – ${site.claim}`,
    description: site.defaultDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.brandName} – ${site.claim}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandName} – ${site.claim}`,
    description: site.defaultDescription,
    images: ["/og.png"],
  },
};

/*
 * Organization- und WebSite-JSON-LD (PROJEKTPLAN Abschnitt 8) — statisch
 * aus site.ts gespeist. Keine Social-Profile (sameAs) eintragen, solange
 * keine existieren.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brandName,
  url: site.baseUrl,
  logo: `${site.baseUrl}/icon.svg`,
  email: site.contactEmail,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.brandName,
  url: site.baseUrl,
  description: site.defaultDescription,
  inLanguage: "de",
};

/*
 * TRACKING / CONSENT — bewusst NICHT aktiv (v1-Leitplanke, PROJEKTPLAN.md Abschnitt 8):
 *
 * Hier ist die einzige Stelle, an der später Tracking eingebunden wird:
 * 1. Google Search Console: Meta-Tag-Verifikation (consent-frei möglich),
 *    gesteuert über site.ts → tracking.gscVerification.
 * 2. GA4 / GTM: dürfen NUR gerendert werden, wenn
 *    (a) die ID in site.ts gesetzt ist UND
 *    (b) die Consent-Lösung die Einwilligung bestätigt.
 *    Bis dahin: keine Skripte, auch nicht "kurz zum Testen".
 * 3. ConsentBannerPlaceholder rendert nichts — siehe Kommentar-Vertrag dort.
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} flex min-h-screen flex-col bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header navigation={site.navigation} />
        <main className="flex-1">{children}</main>
        <Footer site={site} />
        <ConsentBannerPlaceholder />
      </body>
    </html>
  );
}
