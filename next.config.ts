import type { NextConfig } from "next";

/**
 * v1-Deployment: statischer Export für Hostinger (Shared Hosting, kein Node-Prozess).
 *
 * Verbindliche Leitplanken (siehe PROJEKTPLAN.md, Abschnitt 9):
 * - output: "export"      → Build erzeugt reines HTML/CSS/JS in out/
 * - trailingSlash: true   → /kategorien/ wird zu kategorien/index.html
 *                           (nötig, damit klassisches Hosting die URLs sauber mappt)
 * - images.unoptimized    → next/image ohne Optimierungsserver (Export-Pflicht)
 *
 * Spätere Migration zur Node.js-/Webapp-Version (Variante B):
 * output: "export" entfernen — erst dann sind API-Routen, Server Actions
 * und /go/[partnerId]-Redirects möglich. Bis dahin dürfen solche Features
 * nicht verwendet werden, sonst bricht der Export-Build.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
