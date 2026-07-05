import type { Config } from "tailwindcss";

/**
 * Tarvyo24 Design-Tokens (Schritt 3, Design-Basis).
 *
 * Markenpalette "brand" — Petrol/Dunkelblau (Vertrauen, Ruhe):
 *   Kernfarbe ist brand-900 (#143740). Dunkelste Stufe brand-950 dient als
 *   Footer-Hintergrund. Helle Stufen (50–100) für Flächen/Hero-Verläufe.
 *
 * Akzentpalette "accent" — warmes Bernstein (CTAs, "24" der Wortmarke):
 *   Bewusst gedeckt statt Neon. Für Buttons accent-600 als Fläche verwenden.
 *
 * WCAG-AA-Kontraste (geprüfte Kombinationen, Ratio gerundet):
 *   brand-900 auf Weiß          ≈ 12.6:1  ✓ (Überschriften)
 *   slate-600 auf Weiß          ≈  7.6:1  ✓ (Fließtext)
 *   Weiß auf accent-600         ≈  4.8:1  ✓ (Primär-CTA, AA normal)
 *   Weiß auf accent-700         ≈  7.2:1  ✓ (CTA hover)
 *   Weiß auf brand-800          ≈ 10.5:1  ✓ (Sekundär-Button)
 *   slate-300 auf brand-950     ≈ 10.9:1  ✓ (Footer-Text)
 *   brand-800 auf brand-100     ≈  8.9:1  ✓ (Brand-Badge)
 *   Weiß auf slate-900          ≈ 17.9:1  ✓ ("Anzeige"-Badge)
 *   accent-400 auf brand-950    ≈  6.8:1  ✓ ("24" der Wortmarke im Footer)
 *   NICHT verwenden: accent-400/500 als Textfarbe auf Weiß (< 3:1).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F2F8F8",
          100: "#DDEDEE",
          200: "#BFDDE0",
          300: "#93C4C9",
          400: "#5FA3AB",
          500: "#40858E",
          600: "#316B74",
          700: "#2A5760",
          800: "#22464E",
          900: "#143740",
          950: "#0B252C",
        },
        accent: {
          50: "#FDF7EF",
          100: "#FAEBD7",
          200: "#F4D3AB",
          300: "#ECB574",
          400: "#E29444",
          500: "#D97706",
          600: "#B45309",
          700: "#92400E",
          800: "#7A3710",
          900: "#653011",
        },
      },
    },
  },
  plugins: [],
};

export default config;
