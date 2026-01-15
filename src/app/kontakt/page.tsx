import Link from "next/link";

/**
 * KONTAKT – ALFA-CKM
 * Strona kontaktowa + dane do wsparcia klubu
 * STATUS: FINAL (PRODUCTION)
 */
export default function KontaktPage() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      {/* =======================
          LOGO
      ======================= */}
      <div className="flex justify-center mb-10">
        <img
          src="/assets/hero/alfa-ckm-logo.png"
          alt="ALFA-CKM – Chrześcijański Klub Motocyklowy"
          className="w-[140px] md:w-[180px] opacity-95 object-contain"
        />
      </div>

      {/* =======================
          NAGŁÓWEK
      ======================= */}
      <h1 className="text-3xl md:text-4xl font-bold text-brand-gold text-center mb-8">
        Kontakt
      </h1>

      {/* =======================
          DANE KONTAKTOWE
      ======================= */}
      <div className="space-y-4 text-center text-gray-300 mb-12">
        <p>
          Jeśli chcesz się z nami skontaktować lub dowiedzieć się więcej o
          działalności klubu ALFA-CKM, zapraszamy do kontaktu:
        </p>

        <p>
          📧 E-mail:{" "}
          <a
            href="mailto:alfackm@gmail.com"
            className="text-brand-gold hover:underline"
          >
            alfackm@gmail.com
          </a>
        </p>

        <div className="space-y-1">
          <p>
            📞 Jan:{" "}
            <a
              href="tel:+48XXXXXXXXX"
              className="text-brand-gold hover:underline"
            >
              +48 XXX XXX XXX
            </a>
          </p>

          <p>
            📞 Mariusz:{" "}
            <a
              href="tel:+48YYYYYYYYY"
              className="text-brand-gold hover:underline"
            >
              +48 YYY YYY YYY
            </a>
          </p>
        </div>
      </div>

      {/* =======================
          WSPARCIE / SKŁADKI
      ======================= */}
      <div className="border border-brand-gold/30 p-6 rounded-md bg-black/40">
        <h2 className="text-2xl font-semibold text-brand-gold mb-4 text-center">
          Wsparcie działalności ALFA-CKM
        </h2>

        <p className="text-gray-300 text-center mb-6">
          Jeśli chcesz wesprzeć działalność naszego klubu lub opłacić składkę
          członkowską, możesz dokonać przelewu na poniższe konto bankowe:
        </p>

        <ul className="space-y-3 text-gray-300">
          <li>
            <strong className="text-brand-gold">Bank:</strong> Santander
            Polkowice
          </li>
          <li>
            <strong className="text-brand-gold">Odbiorca:</strong> Klub ALFA-CKM
          </li>
          <li>
            <strong className="text-brand-gold">Numer konta (IBAN):</strong>{" "}
            XXXX
          </li>
          <li>
            <strong className="text-brand-gold">Tytuł przelewu:</strong>{" "}
            Składka członkowska / Wsparcie ALFA-CKM
          </li>
        </ul>

        <p className="text-xs text-gray-400 mt-6 text-center">
          Dziękujemy za każde wsparcie i zaufanie okazywane naszej wspólnocie.
        </p>
      </div>

      {/* =======================
          POWRÓT
      ======================= */}
      <div className="text-center mt-12">
        <Link href="/" className="text-brand-gold hover:underline text-sm">
          ← Wróć na stronę główną
        </Link>
      </div>
    </section>
  );
}
