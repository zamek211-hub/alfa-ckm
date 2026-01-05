import Link from "next/link";

export default function ZostanPartneremPage() {
  return (
    <main className="min-h-screen bg-black text-[#f5f0e6]">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-wide text-red-600 md:text-5xl">
            Zostań partnerem ALFA-CKM
          </h1>

          <p className="mb-10 text-lg text-[#f5f0e6]/90 md:text-xl">
            Budujemy trwałe relacje oparte na wartościach, pasji
            <br />
            i braterstwie drogi.
          </p>

          <Link
            href="/pl/kontakt"
            className="inline-block rounded-md border border-red-600 px-8 py-3 text-lg font-semibold text-red-600 transition hover:bg-red-600 hover:text-black"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </section>

      {/* KIM JESTEŚMY */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold text-red-600">
          Kim jesteśmy
        </h2>

        <p className="leading-relaxed text-[#f5f0e6]/90">
          ALFA-CKM to chrześcijański klub motocyklowy oparty na wartościach:
          <span className="font-semibold text-[#f5f0e6]">
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
          <h2 className="mb-10 text-3xl font-bold text-red-600">
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
                className="rounded-lg border border-neutral-700 bg-black p-5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FORMY WSPÓŁPRACY */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold text-red-600">
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
              className="rounded-lg border border-neutral-700 bg-neutral-900 p-6 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-red-600">
            Chcesz zostać partnerem ALFA-CKM?
          </h2>

          <p className="mb-10 text-[#f5f0e6]/90">
            Napisz do nas – porozmawiajmy o możliwościach współpracy.
          </p>

          <Link
            href="/pl/kontakt"
            className="inline-block rounded-md bg-red-600 px-8 py-3 text-lg font-semibold text-black transition hover:bg-red-500"
          >
            Przejdź do kontaktu
          </Link>
        </div>
      </section>
    </main>
  );
}
