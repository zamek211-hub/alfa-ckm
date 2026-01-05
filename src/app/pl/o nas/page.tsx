import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-brand-gold text-4xl md:text-5xl font-bold tracking-wide">
            O NAS
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Kim jesteśmy, w co wierzymy i dlaczego ALFA-CKM to coś więcej
            niż klub motocyklowy.
          </p>
        </div>
      </section>

      {/* TREŚĆ */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        {/* KIM JESTEŚMY */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Kim jesteśmy
          </h2>
          <p className="text-white/80 leading-relaxed max-w-4xl">
            ALFA-CKM to chrześcijański klub motocyklowy zrzeszający ludzi,
            których łączy pasja do motocykli, braterstwo oraz wiara.
            Motocykl jest dla nas drogą – nie tylko tą asfaltową, ale także
            duchową. Budujemy wspólnotę opartą na zaufaniu, odpowiedzialności
            i wzajemnym wsparciu.
          </p>
        </div>

        {/* WARTOŚCI */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Nasze wartości
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-white/10 p-6">
              <h3 className="text-brand-gold font-semibold mb-2">
                Wiara
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Fundamentem naszego klubu jest wiara chrześcijańska,
                która nadaje kierunek naszym działaniom i relacjom.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <h3 className="text-brand-gold font-semibold mb-2">
                Braterstwo
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Jesteśmy wspólnotą, w której liczy się lojalność,
                wzajemna pomoc i odpowiedzialność za drugiego człowieka.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <h3 className="text-brand-gold font-semibold mb-2">
                Wolność
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Wolność rozumiemy jako odpowiedzialne życie w prawdzie,
                szacunku i zgodzie z wartościami.
              </p>
            </div>
          </div>
        </div>

        {/* MISJA */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Nasza misja
          </h2>
          <p className="text-white/80 leading-relaxed max-w-4xl">
            Naszą misją jest budowanie silnej wspólnoty motocyklistów,
            którzy poprzez swoje życie, postawę i działania świadczą
            o wartościach chrześcijańskich – zarówno na drodze, jak i
            poza nią.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-10">
          <Link
            href="/pl/kontakt"
            className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition"
          >
            Dołącz do nas
          </Link>

          <Link
            href="/pl/media"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
          >
            Zobacz galerię
          </Link>
        </div>
      </section>
    </>
  );
}
