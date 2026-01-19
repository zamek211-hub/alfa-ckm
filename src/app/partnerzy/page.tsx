import Image from "next/image";
import Link from "next/link";
import { partners } from "@/data/partners";

/**
 * STRONA: /partnerzy
 * ALFA-CKM – FINAL (PRODUCTION)
 *
 * ZASADA:
 * - SHOW_PARTNERS = false → lista partnerów ukryta (tylko komunikat + CTA)
 * - SHOW_PARTNERS = true  → wyświetlana lista partnerów z data/partners
 *
 * Przykładowi partnerzy (demo) ZOSTAJĄ w data/partners.ts
 * Widoczność kontrolowana jest WYŁĄCZNIE tutaj.
 */

const SHOW_PARTNERS = false;

// W przyszłości możesz filtrować tylko aktywnych partnerów
// const visiblePartners = partners.filter((p) => p.active);

export default function PartnersPage() {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-brand-gold text-4xl md:text-5xl font-bold tracking-wide">
            PARTNERZY
          </h1>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Firmy i organizacje wspierające działalność
            chrześcijańskiego klubu motocyklowego ALFA-CKM.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        {SHOW_PARTNERS && partners.length > 0 ? (
          /* ================= LISTA PARTNERÓW ================= */
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="border border-white/10 p-6 flex flex-col items-center text-center"
              >
                {/* LOGO */}
                <div className="relative w-full h-32 mb-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* NAZWA */}
                <h3 className="text-brand-gold font-semibold mb-2">
                  {partner.name}
                </h3>

                {/* OPIS */}
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {partner.description}
                </p>

                {/* LINK ZEWNĘTRZNY */}
                {partner.url && (
                  <Link
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold text-sm hover:underline"
                  >
                    Odwiedź stronę →
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* ================= FALLBACK – BRAK PARTNERÓW ================= */
          <div className="text-center text-white/70 max-w-2xl mx-auto">
            <p className="mb-8 leading-relaxed">
              Aktualnie nie prezentujemy jeszcze oficjalnych partnerów klubu.
              Jeśli prowadzisz firmę lub reprezentujesz organizację, która
              chciałaby wesprzeć działalność chrześcijańskiego klubu
              motocyklowego ALFA-CKM, zapraszamy do współpracy.
            </p>

            <Link
              href="/partnerzy/zostan-partnerem"
              className="inline-block px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition"
            >
              Zostań partnerem ALFA-CKM
            </Link>
          </div>
        )}

        {/* ================= CTA – ZAWSZE WIDOCZNE ================= */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-gold mb-4">
            Zostań partnerem ALFA-CKM
          </h2>

          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Wspieraj działalność klubu, buduj wartościowe relacje
            i dołącz do grona partnerów ALFA-CKM.
          </p>

          <Link
            href="/partnerzy/zostan-partnerem"
            className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </section>
    </>
  );
}
