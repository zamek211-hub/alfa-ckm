export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import { gallery } from "@/data/gallery";

/**
 * HOME – JEDYNA WERSJA (PL)
 * Adres: /
 * STATUS: FINAL (SEO-READY)
 */

export default function HomePage() {

  const latestEvents = gallery.slice(0, 3);

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

        {/* 🔰 LOGO OBRAZOWE – HERO */}
        <div className="absolute top-6 left-6 z-20">
          <img
            src="/assets/hero/alfa-ckm-logo.png"
            alt="ALFA-CKM – Chrześcijański Klub Motocyklowy"
            className="
              w-[120px]
              md:w-[160px]
              lg:w-[200px]
              opacity-95
              object-contain
            "
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
          OSTATNIE WYDARZENIA
      ======================= */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-gold mb-12">
          Ostatnie wydarzenia
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {latestEvents.map((event) => (

            <Link
              key={event.slug}
              href={`/media/${event.slug}`}
              className="block bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-brand-gold transition"
            >

              <Image
                src={event.cover}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-4 text-center text-white">
                {event.title}
              </div>

            </Link>

          ))}

        </div>

        <div className="text-center mt-10">

          <Link
            href="/media"
            className="text-brand-gold hover:underline"
          >
            Zobacz wszystkie wydarzenia
          </Link>

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
          <strong>ALFA-CKM</strong> to chrześcijański klub motocyklowy działający w Polsce,
          wywodzący się z Polkowic, który łączy pasję do motocykli z wiarą,
          odpowiedzialnością i budowaniem autentycznej wspólnoty motocyklistów.
        </p>

        <p className="text-gray-300 leading-relaxed text-center">
          Organizujemy wspólne wyprawy, wydarzenia i spotkania integracyjne,
          uczestniczymy w inicjatywach środowiska motocyklowego oraz rozwijamy relacje
          oparte na wzajemnym szacunku. Motocykle są dla nas narzędziem relacji,
          rozwoju i życia w zgodzie z wyznawanymi wartościami chrześcijańskimi.
        </p>

      </section>

    </>
  );
}