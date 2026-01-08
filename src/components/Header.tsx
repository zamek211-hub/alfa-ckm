"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * HEADER – wersja RESPONSYWNA
 * - Desktop: klasyczne menu poziome
 * - Mobile: hamburger menu (toggle)
 */

const menu = [
  { name: "Home", href: "/" },
  { name: "O nas", href: "/o-nas" },
  { name: "Statut", href: "/statut" },
  { name: "Media", href: "/media" },
  { name: "Partnerzy", href: "/partnerzy" },
  { name: "Members", href: "/members" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* ===== LOGO ===== */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="text-brand-gold text-lg font-bold tracking-widest">
              Α Ω
            </span>
            <span className="text-brand-red font-extrabold tracking-widest text-lg">
              ALFA_CKM
            </span>
          </Link>

          {/* ===== DESKTOP MENU ===== */}
          <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wide">
            {menu.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition ${
                    isActive
                      ? "text-brand-gold"
                      : "text-brand-cream hover:text-brand-red"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ===== MOBILE BUTTON ===== */}
          <button
            className="md:hidden text-brand-gold text-2xl"
            aria-label="Otwórz menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <nav className="md:hidden w-full bg-black border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4 uppercase text-sm">
            {menu.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2 transition ${
                      isActive
                        ? "text-brand-gold"
                        : "text-brand-cream hover:text-brand-red"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
