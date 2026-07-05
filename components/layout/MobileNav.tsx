"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

/**
 * Mobiles Burger-Menü — bewusst schlicht: useState, kein Portal, keine
 * Animations-Library. Einzige Client-Komponente der Design-Basis.
 */
export function MobileNav({
  navigation,
  ctaLabel,
  ctaHref,
}: {
  navigation: NavItem[];
  ctaLabel: string;
  ctaHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        className="rounded-md p-2 text-slate-700 hover:bg-brand-50 hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
      >
        <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Hauptnavigation mobil"
          className="absolute inset-x-0 top-16 z-40 border-b border-slate-200 bg-white shadow-md"
        >
          <ul className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href={ctaHref} className="w-full">
                {ctaLabel}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
