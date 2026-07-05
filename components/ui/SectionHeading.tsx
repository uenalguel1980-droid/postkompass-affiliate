/**
 * Einheitliche Sektionsüberschrift (H2) mit optionalem Eyebrow und Untertitel.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-slate-600">{subtitle}</p>}
    </div>
  );
}
