import Link from "next/link";

export default function ZostanPartneremPage() {
  return (
    <section className="w-full bg-black text-brand-cream px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-gold mb-6">
            Zostań Partnerem ALFA-CKM
          </h1>
          <p className="text-sm md:text-base text-brand-cream/80">
            Współpracuj z chrześcijańskim klubem motocyklowym opartym na wartościach:
            wiara, braterstwo i wolność.
          </p>
        </div>

        {/* DLACZEGO WARTO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border border-brand-gold/20 p-6">
            <h3 className="text-brand-gold font-semibold mb-3">
              Wartości
            </h3>
            <p className="text-sm text-brand-cream/80">
              Reprezentujemy jasne i trwałe wartości – uczciwość, zaufanie i wspólnotę.
            </p>
          </div>

          <div className="border border-brand-gold/20 p-6">
            <h3 className="text-brand-gold font-semibold mb-3">
              Widoczność
            </h3>
            <p className="text-sm text-brand-cream/80">
              Logo partnera na stronie, w mediach i podczas wydarzeń klubowych.
            </p>
          </div>

          <div className="border border-brand-gold/20 p-6">
            <h3 className="text-brand-gold font-semibold mb-3">
              Społeczność
            </h3>
            <p className="text-sm text-brand-cream/80">
              Dostęp do lojalnej społeczności motocyklistów z całej Polski.
            </p>
          </div>
        </div>

        {/* FORMULARZ */}
        <div className="max-w-3xl mx-auto border border-brand-gold/20 p-8">
          <h2 className="text-2xl font-semibold text-brand-gold mb-6 text-center">
            Formularz zgłoszeniowy
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nazwa firmy / organizacji"
              className="w-full bg-black border border-brand-cream/30 px-4 py-2 text-brand-cream focus:outline-none focus:border-brand-gold"
            />

            <input
              type="text"
              placeholder="Osoba kontaktowa"
              className="w-full bg-black border border-brand-cream/30 px-4 py-2 text-brand-cream focus:outline-none focus:border-brand-gold"
            />

            <input
              type="tel"
              placeholder="Telefon"
              className="w-full bg-black border border-brand-cream/30 px-4 py-2 text-brand-cream focus:outline-none focus:border-brand-gold"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-brand-cream/30 px-4 py-2 text-brand-cream focus:outline-none focus:border-brand-gold"
            />

            <select
              className="w-full bg-black border border-brand-cream/30 px-4 py-2 text-brand-cream focus:outline-none focus:border-brand-gold"
            >
              <option>Rodzaj współpracy</option>
              <option>Sponsor</option>
              <option>Partner medialny</option>
              <option>Partner techniczny</option>
              <option>Inna forma</option>
            </select>

            <textarea
              placeholder="Krótki opis propozycji współpracy"
              rows={5}
              className="w-full bg-black border border-brand-cream/30 px-4 py-2 text-brand-cream focus:outline-none focus:border-brand-gold"
            />

            <button
              type="button"
              className="w-full mt-4 px-6 py-3 bg-brand-red text-black font-semibold hover:bg-brand-gold transition"
            >
              Wyślij zgłoszenie
            </button>
          </form>
        </div>

        {/* POWRÓT */}
        <div className="text-center">
          <Link
            href="/pl/partnerzy"
            className="text-sm text-brand-cream/70 hover:text-brand-gold transition"
          >
            ← Zobacz naszych partnerów
          </Link>
        </div>

      </div>
    </section>
  );
}
