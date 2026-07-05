import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/*
 * 404-Seite — wird beim statischen Export zu out/404.html.
 * Hostinger liefert diese Datei automatisch bei unbekannten Pfaden aus.
 */
export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Fehler 404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        Seite nicht gefunden
      </h1>
      <p className="mt-4 max-w-xl text-base text-slate-600">
        Die aufgerufene Seite existiert nicht oder wurde verschoben.
      </p>
      <div className="mt-8">
        <Button href="/">Zur Startseite</Button>
      </div>
    </Container>
  );
}
