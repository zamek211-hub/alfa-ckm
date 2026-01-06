"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="w-full bg-brand-black border-b border-brand-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO / BRAND */}
        <Link href="/" className="flex items-center gap-3">
          {/* MINI LOGO Α Ω */}
          <span className="text-brand-gold text-lg font-bold tracking-widest">
            Α Ω
          </span>

          {/* NAZWA */}
          <span className="text-brand-red font-extrabold tracking-widest text-lg">
            ALFA_CKM
          </span>
        </Link>

        {/* MENU */}
        <nav className="flex items-center gap-6 text-sm uppercase tracking-wide">
          {menu.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

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
      </div>
    </header>
  );
}
