import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid gap-6 md:grid-cols-3 items-start">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-brand-gold text-base font-bold tracking-widest">
                Α Ω
              </span>
              <span className="text-brand-red font-semibold tracking-widest text-base">
                ALFA_CKM
              </span>
            </div>

            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Chrześcijański Klub Motocyklowy
            </p>
          </div>

          {/* NAWIGACJA */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-white/80 hover:text-brand-gold">
                Home
              </Link>
              <Link href="/o-nas" className="text-white/80 hover:text-brand-gold">
                O nas
              </Link>
              <Link href="/statut" className="text-white/80 hover:text-brand-gold">
                Statut
              </Link>
              <Link href="/media" className="text-white/80 hover:text-brand-gold">
                Media
              </Link>
            </nav>

            <nav className="flex flex-col gap-2">
              <Link href="/partnerzy" className="text-white/80 hover:text-brand-gold">
                Partnerzy
              </Link>
              <Link href="/members" className="text-white/80 hover:text-brand-gold">
                Members
              </Link>
              <Link href="/kontakt" className="text-white/80 hover:text-brand-gold">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* INFO */}
          <div className="text-sm text-white/60 md:text-right">
            <p>© {new Date().getFullYear()} ALFA-CKM</p>
            <p className="mt-1">
              Wiara • Braterstwo • Wolność
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
