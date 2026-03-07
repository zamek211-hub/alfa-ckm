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

            {/* SOCIAL MEDIA */}
            <div className="mt-4 flex gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/alfackmklub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook ALFA-CKM"
                className="text-[#1877F2] hover:opacity-80 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/alfackm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram ALFA-CKM"
                className="hover:opacity-80 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="block"
                >
                  <defs>
                    <linearGradient id="igGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F58529" />
                      <stop offset="50%" stopColor="#DD2A7B" />
                      <stop offset="100%" stopColor="#515BD4" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.27 3.5 3.5 5.27 3.5 7.75v8.5c0 2.48 1.77 4.25 4.25 4.25h8.5c2.48 0 4.25-1.77 4.25-4.25v-8.5c0-2.48-1.77-4.25-4.25-4.25h-8.5zm9.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                    style={{ fill: "url(#igGradientFooter)" }}
                  />
                </svg>
              </a>

            </div>
          </div>

          {/* NAWIGACJA */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-white/80 hover:text-brand-gold">Home</Link>
              <Link href="/o-nas" className="text-white/80 hover:text-brand-gold">O nas</Link>
              <Link href="/statut" className="text-white/80 hover:text-brand-gold">Statut</Link>
              <Link href="/media" className="text-white/80 hover:text-brand-gold">Media</Link>
            </nav>

            <nav className="flex flex-col gap-2">
              <Link href="/partnerzy" className="text-white/80 hover:text-brand-gold">Partnerzy</Link>
              <Link href="/members" className="text-white/80 hover:text-brand-gold">Members</Link>
              <Link href="/kontakt" className="text-white/80 hover:text-brand-gold">Kontakt</Link>
            </nav>
          </div>

          {/* INFO */}
          <div className="text-sm text-white/60 md:text-right text-center">
            <div className="mx-auto mb-3 h-px w-24 bg-white/20 md:mx-0 md:ml-auto" />

            <p>© {new Date().getFullYear()} ALFA-CKM</p>
            <p className="mt-1">Wiara • Braterstwo • Wolność</p>

            <div className="mt-2 ml-auto max-w-[300px]">
              <p className="text-xs text-white/40 leading-snug text-left">
                Logo, nazwa oraz symbolika klubu są chronione prawem
                i nie mogą być wykorzystywane bez zgody Zarządu.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
