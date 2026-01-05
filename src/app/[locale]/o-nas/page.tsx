export default function ONasPage() {
  return (
    <section className="w-full bg-brand-black">

      {/* HERO */}
      <div className="border-b border-brand-border">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-extrabold tracking-wider text-brand-gold">
            O NAS
          </h1>
          <p className="text-brand-cream/80 max-w-2xl mx-auto">
            Kim jesteśmy, w co wierzymy i dlaczego ALFA_CKM to coś więcej niż klub motocyklowy.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 py-16 space-y-10">

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-gold">
            Kim jesteśmy
          </h2>
          <p className="text-brand-cream leading-relaxed">
            ALFA_CKM to chrześcijański klub motocyklowy zrzeszający ludzi,
            dla których motocykl to droga, a nie tylko środek transportu.
            Łączy nas wiara, braterstwo i wolność, które realizujemy
            zarówno w życiu codziennym, jak i na dwóch kołach.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-gold">
            Nasze wartości
          </h2>
          <p className="text-brand-cream leading-relaxed">
            Fundamentem klubu są wartości chrześcijańskie.
            Szanujemy drugiego człowieka, dbamy o braterskie relacje
            i odpowiedzialnie reprezentujemy klub w każdej sytuacji –
            na drodze i poza nią.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-gold">
            Dlaczego ALFA_CKM
          </h2>
          <p className="text-brand-cream leading-relaxed">
            Nazwa ALFA nawiązuje do początku drogi i decyzji,
            by żyć świadomie i odpowiedzialnie.
            Symbol Α Ω przypomina nam o wartościach trwałych,
            które nie przemijają wraz z modą czy czasem.
          </p>
        </section>

      </div>
    </section>
  );
}
