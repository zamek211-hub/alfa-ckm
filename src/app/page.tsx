<div style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, background: "red", color: "white", padding: "8px" }}>
  TEST HOME PAGE
</div>

import Link from "next/link";

/**
 * HOME – JEDYNA WERSJA (PL)
 * Adres: /
 * STATUS: FINAL (SEO-READY)
 */
export default function HomePage() {
  return (
    <>
      {/* =======================
          HERO
      ======================= */}
      <section
        className="relative h-[100svh] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/baner/baner_bike.jpg')",
        }}
      >
        {/* 🔰 LOGO KLUBU – LEWY GÓRNY RÓG */}
        <div className="absolute top-6 left-6 z-20">
          <img
  src="/assets/logo/alfa-ckm-logo-v2.png"
  alt="ALFA-CKM Logo"
  className="w-[120px] md:w-[160px] lg:w-[200px] opacity-90"
/>
        </div>

        {/* PRZYCIEMNIENIE BANERA */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TREŚĆ HERO */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-brand-red text-4xl md:text-6xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            ALFA-CKM
          </h1>

          <p className="mt-4 text-white/90 uppercase tracking-widest text-sm md:text-base">
            Wiara • Braterstwo • Wolność na Dwóch Kołach
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/o-nas"
              className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition"
            >
              Poznaj nas
            </Link>

            <Link
              href="/media"
              className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
            >
              Zobacz galerię
            </Link>
          </div>
        </div>
      </section>

      {/* =======================
          SEO CONTENT – HOME
      ======================= */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-gold mb-4 text-center">
          Chrześcijański Klub Motocyklowy ALFA-CKM
        </h2>

        <p className="text-gray-300 leading-relaxed mb-4 text-center">
          <strong>ALFA-CKM</strong> to chrześcijański klub motocyklowy w Polsce,
          który łączy pasję do motocykli z wiarą, odpowiedzialnością i budowaniem
          autentycznej wspólnoty. Tworzymy przestrzeń dla motocyklistów, którzy
          chcą jeździć razem, rozmawiać i wzajemnie się wspierać.
        </p>

        <p className="text-gray-300 leading-relaxed text-center">
          Jako klub motocyklowy oparty na wartościach chrześcijańskich
          organizujemy wspólne wyprawy, wydarzenia i spotkania integracyjne.
          Motocykle są dla nas narzędziem relacji, rozwoju i życia w zgodzie z
          wyznawanymi wartościami.
        </p>
      </section>
    </>
  );
}

