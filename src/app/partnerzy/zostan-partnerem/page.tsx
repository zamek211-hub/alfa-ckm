import Link from "next/link";

/**
 * STRONA: /partnerzy/zostan-partnerem
 * Spójna wizualnie z resztą serwisu ALFA-CKM
 * Kolory: brand-gold + white/80
 */

export default function ZostanPartneremPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold tracking-wide text-brand-gold">
            Zostań partnerem ALFA-CKM
          </h1>

          <p className="mb-10 text-lg md:text-xl text-white/80">
            Budujemy trwałe relacje oparte na wartościach, pasji
            <br />
            i braterstwie drogi.
          </p>

          <Link
            href="/kontakt"
            className="inline-block border border-brand-gold px-8 py-3 text-lg font-semibold text-brand-gold transition hover:bg-brand-gold hover:text-black"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </section>

      {/* KIM JESTEŚMY */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-semibold text-brand-gold">
          Kim jesteśmy
        </h2>

        <p className="leading-relaxed text-white/80">
          ALFA-CKM to chrześcijański klub motocyklowy oparty na wartościach:
          <span className="font-semibold text-white">
            {" "}
            Wiara • Braterstwo • Wolność
          </span>
          . Działamy aktywnie, organizujemy wydarzenia, szkolenia
          oraz wypady motocyklowe w całej Polsce.
        </p>
      </section>

      {/* CO OFERUJEMY */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-3xl font-semibold text-brand-gold">
            Co oferujemy partnerom
          </h2>

          <ul className="grid gap-6 md:grid-cols-2">
            {[
              "Widoczność marki na stronie internetowej",
              "Ekspozycję podczas wydarzeń i wyjazdów",
              "Długofalową współpracę, nie jednorazową reklamę",
              "Autentyczną społeczność motocyklistów",
              "Udział w inicjatywach opartych na wartościach",
            ].map((item, i) => (
              <li
                key={i}
                className="border border-white/10 bg-black p-5 text-white/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FORMY WSPÓŁPRACY */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-semibold text-brand-gold">
          Formy współpracy
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Partner techniczny",
            "Sponsor wydarzeń",
            "Partner logistyczny",
            "Patron medialny",
            "Zniżki dla członków klubu",
            "Wspólne akcje promocyjne",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-white/10 bg-neutral-900 p-6 text-center text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-semibold text-brand-gold">
            Chcesz zostać partnerem ALFA-CKM?
          </h2>

          <p className="mb-10 text-white/80">
            Napisz do nas – porozmawiajmy o możliwościach współpracy.
          </p>

          <Link
            href="/kontakt"
            className="inline-block border border-brand-gold px-8 py-3 text-lg font-semibold text-brand-gold transition hover:bg-brand-gold hover:text-black"
          >
            Przejdź do kontaktu
          </Link>
        </div>
      </section>
    </>
  );
}
