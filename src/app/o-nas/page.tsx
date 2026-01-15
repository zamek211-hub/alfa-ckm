import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas – Chrześcijański Klub Motocyklowy ALFA-CKM | Polkowice, Polska",
  description:
    "Poznaj ALFA-CKM – chrześcijański klub motocyklowy działający w Polsce, wywodzący się z Polkowic. Wspólnota, motocykle i wartości chrześcijańskie.",
};


export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      {/* H1 */}
      <h1 className="text-4xl md:text-5xl font-bold text-brand-gold mb-8 text-center">
        O nas
      </h1>

      {/* INTRO */}
      <p className="text-lg text-gray-300 mb-10 leading-relaxed">
  <strong>ALFA-CKM</strong> to chrześcijański klub motocyklowy działający w
  Polsce, wywodzący się z Polkowic. Jesteśmy wspólnotą ludzi, których łączy
  pasja do motocykli, wzajemny szacunek oraz wartości wypływające z wiary
  chrześcijańskiej.
</p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold text-brand-gold mb-4">
        Chrześcijański klub motocyklowy
      </h2>

      <p className="text-gray-300 mb-8 leading-relaxed">
        Jako chrześcijański klub motocyklowy nie skupiamy się wyłącznie na jeździe.
        Motocykle są dla nas przestrzenią do budowania relacji, rozmów i wzajemnego
        wsparcia. Wierzymy, że pasja może iść w parze z odpowiedzialnością,
        szacunkiem i życiem opartym na chrześcijańskich wartościach.
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold text-brand-gold mb-4">
        Wspólnota, a nie tylko klub
      </h2>

      <p className="text-gray-300 mb-8 leading-relaxed">
        ALFA-CKM to nie tylko klub motocyklowy, ale przede wszystkim wspólnota.
        Spotykamy się na wspólnych wyprawach, wydarzeniach i spotkaniach
        integracyjnych. Ważna jest dla nas braterska atmosfera, zaufanie i
        autentyczność.
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold text-brand-gold mb-4">
        Motocykle, wiara i codzienne życie
      </h2>

      <p className="text-gray-300 mb-8 leading-relaxed">
        Nie oddzielamy wiary od codziennego życia. Staramy się, aby nasze postawy
        na drodze i poza nią były spójne z tym, w co wierzymy. Chrześcijańska
        wspólnota motocyklowa to dla nas droga rozwoju – zarówno jako motocyklistów,
        jak i ludzi.
      </p>

      {/* H2 */}
      <h2 className="text-2xl font-semibold text-brand-gold mb-4">
        Dla kogo jest ALFA-CKM?
      </h2>

      <p className="text-gray-300 leading-relaxed">
        ALFA-CKM jest otwarte dla osób, które chcą połączyć pasję do motocykli z
        wartościami chrześcijańskimi. Niezależnie od rodzaju motocykla czy
        doświadczenia, liczy się postawa, otwartość i gotowość do budowania
        wspólnoty.
      </p>
    </section>
  );
}
