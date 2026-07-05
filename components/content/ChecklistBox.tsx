import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

/**
 * "Worauf achten?"-Checkliste (Server Component).
 * Echte ul/li-Struktur; Häkchen-Icons sind dekorativ (aria-hidden im Icon).
 */
export function ChecklistBox({
  title = "Worauf solltest du achten?",
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <Card>
      <h2 className="text-xl font-bold tracking-tight text-brand-900">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
            <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
