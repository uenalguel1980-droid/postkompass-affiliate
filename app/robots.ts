import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/*
 * robots.txt — wird beim statischen Export als out/robots.txt erzeugt.
 *
 * Alles crawlbar; KEIN Disallow für /impressum/ und /datenschutz/:
 * Deren noindex steht in den Seiten-Metadata und muss von Crawlern
 * gelesen werden können — ein Disallow würde das noindex unsichtbar machen.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.baseUrl}/sitemap.xml`,
  };
}
