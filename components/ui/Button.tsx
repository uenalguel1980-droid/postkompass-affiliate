import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

/**
 * Basis-Button. Mit href wird ein Next-Link gerendert, sonst ein <button>.
 *
 * Kontrast (WCAG AA, siehe tailwind.config.ts):
 * - primary: Weiß auf accent-600 (hover accent-700)
 * - secondary: Weiß auf brand-800 (hover brand-900)
 * - ghost: brand-800 auf Weiß/brand-50
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-600 text-white hover:bg-accent-700 focus-visible:outline-accent-700",
  secondary:
    "bg-brand-800 text-white hover:bg-brand-900 focus-visible:outline-brand-800",
  ghost:
    "bg-transparent text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-800",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
