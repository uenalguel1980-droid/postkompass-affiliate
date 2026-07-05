/**
 * Tarvyo24-Wortmarke — rein typografisch.
 *
 * Gestaltungsvorschlag: "Tarvyo" in der dunklen Markenfarbe, "24" in der
 * warmen Akzentfarbe — gleiche Größe, gleiches Gewicht, kein Hochstellen.
 * Das setzt die "24" ruhig ab, ohne rabattseitig zu wirken.
 *
 * inverted = true für dunkle Hintergründe (Footer): "Tarvyo" weiß,
 * "24" in accent-400 (Kontrast auf brand-950 ≈ 6.8:1, AA ✓).
 */
export function Wordmark({
  className = "text-xl",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={`font-bold tracking-tight ${className}`}>
      <span className={inverted ? "text-white" : "text-brand-900"}>Tarvyo</span>
      <span className={inverted ? "text-accent-400" : "text-accent-600"}>24</span>
    </span>
  );
}
