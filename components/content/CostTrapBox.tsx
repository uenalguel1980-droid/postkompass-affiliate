import { Icon } from "@/components/ui/Icon";

/**
 * Kostenfallen-Box (Server Component) — visuell abgesetzt in warmem Ton,
 * ohne Alarmismus. Kennzeichnung über Icon + Überschrift, nicht nur Farbe.
 * Kontrast: accent-900 bzw. slate-700 auf accent-50 (WCAG AA ✓).
 */
export function CostTrapBox({
  title = "Typische Kostenfallen",
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-accent-200 bg-accent-50 p-6">
      <div className="flex items-center gap-2.5">
        <Icon name="alert" className="h-5 w-5 shrink-0 text-accent-700" />
        <h2 className="text-xl font-bold tracking-tight text-accent-900">{title}</h2>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
