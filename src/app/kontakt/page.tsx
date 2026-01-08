/**
 * STRONA: /kontakt
 * Kontakt bez formularza – wersja produkcyjna
 * ALFA-CKM
 */

export default function KontaktPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold mb-4">
            Kontakt
          </h1>
          <p className="text-white/80 max-w-2xl text-base sm:text-lg">
            Chrześcijański Klub Motocyklowy ALFA-CKM.  
            Jeśli chcesz nawiązać kontakt, dowiedzieć się więcej o klubie
            lub o współpracy – zapraszamy do bezpośredniego kontaktu.
          </p>
        </div>
      </section>

      {/* TREŚĆ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-3xl space-y-12">

          {/* EMAIL */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-gold mb-2">
              📧 Kontakt e-mail
            </h2>
            <p className="text-white text-lg">
              <a
                href="mailto:kontakt@alfackm.pl"
                className="underline underline-offset-4 hover:text-brand-gold break-all"
              >
                kontakt@alfackm.pl
              </a>
            </p>
          </div>

          {/* TELEFON */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-gold mb-2">
              📞 Kontakt telefoniczny
            </h2>
            <p className="text-white text-lg">
              <a
                href="tel:+48123456789"
                className="underline underline-offset-4 hover:text-brand-gold"
              >
                +48 123 456 789
              </a>
            </p>
            <p className="text-white/60 text-sm mt-1">
              Jeśli nie odbierzemy – oddzwonimy.
            </p>
          </div>

          {/* JAK NAPISAĆ */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-gold mb-4">
              Jak napisać do ALFA-CKM?
            </h2>
            <ul className="space-y-2 text-white/90 list-disc list-inside">
              <li>Wyślij wiadomość e-mail na adres podany powyżej.</li>
              <li>Napisz krótko, czego dotyczy Twoja sprawa.</li>
              <li>Podaj numer telefonu, jeśli oczekujesz kontaktu zwrotnego.</li>
            </ul>
          </div>

          {/* WZÓR WIADOMOŚCI */}
          <div className="bg-black border border-white/20 p-5 sm:p-6 rounded">
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-gold mb-4">
              Przykładowa treść wiadomości
            </h2>

            <pre className="whitespace-pre-wrap text-white/90 text-sm leading-relaxed">
{`Temat: Kontakt – ALFA-CKM

Dzień dobry,

piszę w sprawie:
– dołączenia do klubu ALFA-CKM,
– współpracy,
– lub innej sprawy związanej z działalnością klubu.

Krótki opis:
[tu wpisz treść wiadomości]

Numer telefonu do kontaktu (opcjonalnie):
[twój numer]

Z wyrazami szacunku`}
            </pre>
          </div>

          {/* INFO */}
          <p className="text-white/60 text-sm leading-relaxed">
            Odpowiadamy na wiadomości możliwie najszybciej.  
            ALFA-CKM to chrześcijański klub motocyklowy – cenimy kulturę,
            szacunek i jasną komunikację.
          </p>

        </div>
      </section>
    </>
  );
}
