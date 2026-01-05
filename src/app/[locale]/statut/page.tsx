export default function StatutPage() {
  return (
    <div className="min-h-screen bg-black text-yellow-200 px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* HEADER */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-yellow-300/80 mb-4">
            STATUT
          </h1>
          <p className="text-sm text-yellow-200/60 uppercase tracking-wider">
            Zasady i wartości Klubu Motocyklowego ALFA-CKM
          </p>
        </section>

        {/* CONTENT */}
        <section className="space-y-10 text-sm leading-relaxed text-yellow-200/70">

          <div>
            <h2 className="text-yellow-300/80 uppercase tracking-wider mb-2">
              §1 Postanowienia ogólne
            </h2>
            <p>
              Klub Motocyklowy ALFA-CKM jest wspólnotą ludzi opartą na zasadach
              wiary chrześcijańskiej, braterstwa oraz odpowiedzialnej wolności.
              Klub nie jest organizacją polityczną ani komercyjną.
            </p>
          </div>

          <div>
            <h2 className="text-yellow-300/80 uppercase tracking-wider mb-2">
              §2 Wartości
            </h2>
            <p>
              Podstawą działania klubu są: wiara, wzajemny szacunek,
              odpowiedzialność, uczciwość oraz braterska pomoc. Każdy członek
              zobowiązany jest do godnego reprezentowania klubu.
            </p>
          </div>

          <div>
            <h2 className="text-yellow-300/80 uppercase tracking-wider mb-2">
              §3 Członkostwo
            </h2>
            <p>
              Członkiem klubu może zostać osoba pełnoletnia, akceptująca
              wartości ALFA-CKM, po przejściu procesu rekrutacyjnego oraz
              uzyskaniu zgody członków klubu.
            </p>
          </div>

          <div>
            <h2 className="text-yellow-300/80 uppercase tracking-wider mb-2">
              §4 Zasady
            </h2>
            <p>
              Członkowie klubu zobowiązani są do przestrzegania statutu,
              dbania o dobre imię klubu oraz wzajemnego wsparcia w życiu
              codziennym i na drodze.
            </p>
          </div>

          <div>
            <h2 className="text-yellow-300/80 uppercase tracking-wider mb-2">
              §5 Postanowienia końcowe
            </h2>
            <p>
              Niniejszy statut stanowi podstawę funkcjonowania klubu i może
              być zmieniany decyzją członków zgodnie z wewnętrznymi ustaleniami.
            </p>
          </div>

        </section>

      </div>
    </div>
  );
}
