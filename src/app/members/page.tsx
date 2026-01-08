import Link from "next/link";

/**
 * STRONA: /members
 * Strefa wewnętrzna – placeholder pod przyszłą autoryzację
 * Header i Footer są GLOBALNE (layout.tsx) – TU ICH NIE DOTYKAMY
 */

export default function MembersPage() {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section className="w-full bg-black border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-20 text-center">
          <h1 className="text-brand-gold text-4xl md:text-5xl font-bold tracking-wide">
            MEMBERS
          </h1>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Strefa wewnętrzna przeznaczona wyłącznie dla członków
            Chrześcijańskiego Klubu Motocyklowego ALFA-CKM.
          </p>
        </div>
      </section>

      {/* ================= TREŚĆ ================= */}
      <section className="w-full bg-black">
        <div className="w-full px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-20">
          <div className="grid gap-16 grid-cols-1 md:grid-cols-2 items-start">

            {/* ---------- INFORMACJA ---------- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-gold mb-6">
                Strefa zamknięta
              </h2>

              <p className="text-white/80 leading-relaxed mb-4">
                Sekcja{" "}
                <span className="text-white font-medium">Members</span> jest
                przeznaczona wyłącznie dla pełnoprawnych członków klubu
                ALFA-CKM. Dostęp do tej strefy wymaga autoryzacji.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                W przyszłości znajdą się tutaj m.in. informacje klubowe,
                dokumenty wewnętrzne, kalendarz wydarzeń oraz materiały
                dostępne tylko dla członków.
              </p>

              <p className="text-white/80 leading-relaxed">
                Jeśli jesteś członkiem klubu — ta sekcja będzie dla Ciebie
                centralnym miejscem komunikacji.
              </p>
            </div>

            {/* ---------- AKCJE ---------- */}
            <div className="border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-brand-gold mb-4">
                Dostęp do Members
              </h3>

              <p className="text-white/80 mb-6">
                Dostęp do strefy Members jest obecnie ograniczony.
                Funkcja logowania zostanie uruchomiona w kolejnym etapie
                rozwoju strony.
              </p>

              <div className="flex flex-col gap-4">
                {/* LOGIN PLACEHOLDER */}
                <button
                  disabled
                  className="px-6 py-3 border border-white/30 text-white/40 cursor-not-allowed"
                >
                  Zaloguj się (wkrótce)
                </button>

                {/* CTA */}
                <Link
                  href="/kontakt"
                  className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition text-center"
                >
                  Jak dołączyć do klubu?
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
