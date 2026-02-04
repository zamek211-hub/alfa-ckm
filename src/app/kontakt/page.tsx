"use client";

const SHOW_QR = false;
import Image from "next/image";
import { useState } from "react";

/**
 * STRONA: /kontakt
 * ALFA-CKM – FINAL (PRODUCTION)
 */

export default function KontaktPage() {
  const bankText = `Bank: Santander Polkowice
Odbiorca: Klub ALFA-CKM
IBAN: XXXX XXXX XXXX XXXX XXXX XXXX
Tytuł: Składka członkowska / Wsparcie ALFA-CKM`;

  const [copied, setCopied] = useState(false);

  return (
    <>
      {/* =======================
          HEADER
      ======================= */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-gold mb-4">
            Kontakt
          </h1>
          <p className="text-white/80 max-w-3xl text-lg">
            Chrześcijański Klub Motocyklowy ALFA-CKM Polkowice.
            Jeśli chcesz do nas dołączyć, wesprzeć działalność klubu lub
            nawiązać współpracę – zapraszamy do bezpośredniego kontaktu.
          </p>
        </div>
      </section>

      {/* =======================
          CONTENT
      ======================= */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ===== LEWA KOLUMNA ===== */}
          <div className="space-y-12">

            {/* EMAIL */}
            <div>
              <h2 className="text-2xl font-semibold text-brand-gold mb-2">
                📧 Kontakt e-mail
              </h2>
              <a
                href="mailto:alfackm@gmail.com"
                className="text-lg underline underline-offset-4 hover:text-brand-gold"
              >
                alfackm@gmail.com
              </a>
            </div>

            {/* TELEFONY */}
              <div>
              <h2 className="text-2xl font-semibold text-brand-gold mb-3">
             📞 Kontakt telefoniczny
             </h2>

             {/* MARIUSZ – wyróżniony */}
            <div className="border border-brand-gold/60 rounded-lg p-3 mb-4 bg-black/20 shadow-[0_0_8px_rgba(212,175,55,0.25)]">
             <p className="text-lg text-white font-medium">
             Mariusz:{" "}
             <a href="tel:+48783856098" className="underline">
             +48 783 856 098
             </a>
             </p>
             <p className="flex items-center gap-2 text-sm text-brand-gold mt-1">
             💳 BLIK dostępny do przelewów bankowych
             </p>
             </div>

            {/* JAN */}
            <p className="text-lg text-white">
             Jan:{" "}
             <a href="tel:+48667259614" className="underline">
            +48 667 259 614
             </a>
             </p>

             <p className="text-sm text-white/60 mt-2">
             Jeśli nie odbierzemy – oddzwonimy.
             </p>
            </div>

            {/* JAK NAPISAĆ */}
            <div>
              <h2 className="text-2xl font-semibold text-brand-gold mb-4">
                Jak napisać do ALFA-CKM?
              </h2>
              <ul className="list-disc list-inside space-y-2 text-white/90">
                <li>Wyślij wiadomość e-mail na adres podany powyżej.</li>
                <li>Napisz krótko, czego dotyczy Twoja sprawa.</li>
                <li>Podaj numer telefonu, jeśli oczekujesz kontaktu zwrotnego.</li>
              </ul>
            </div>

            {/* PRZYKŁADOWA WIADOMOŚĆ */}
            <div className="border border-white/20 p-6 rounded bg-black">
              <h3 className="text-xl font-semibold text-brand-gold mb-4">
                Przykładowa treść wiadomości
              </h3>
              <pre className="whitespace-pre-wrap text-sm text-white/90 leading-relaxed">
{`Temat: Kontakt – ALFA-CKM

Dzień dobry,

piszę w sprawie:
– dołączenia do klubu ALFA-CKM,
– wsparcia działalności,
– udziału w wydarzeniach,
– lub współpracy.

Krótki opis:
[tu wpisz treść wiadomości]

Numer telefonu (opcjonalnie):
[twój numer]

Z wyrazami szacunku`}
              </pre>
            </div>
          </div>

          {/* ===== PRAWA KOLUMNA ===== */}
          <div className="space-y-12">

            {/* LOGO */}
            <div className="flex justify-center">
              <Image
                src="/assets/hero/alfa-ckm-logo.png"
                alt="ALFA-CKM Logo"
                width={600}
                height={600}
                priority
                className="w-[200px] md:w-[250px] lg:w-[280px] opacity-95"
              />
            </div>

            {/* WSPARCIE */}
            <div className="border border-brand-gold/40 p-8 rounded bg-black">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-gold mb-4">
                Wsparcie działalności ALFA-CKM
              </h2>

              <p className="text-white/90 text-base mb-6 leading-relaxed">
                Jeśli chcesz wesprzeć rozwój chrześcijańskiego klubu
                motocyklowego ALFA-CKM lub opłacić składkę członkowską,
                możesz dokonać przelewu. Środki przeznaczane są na
                organizację wydarzeń, wypraw, spotkań oraz bieżącą
                działalność klubu.
              </p>

              {/* DANE BANKOWE */}
              <div className="text-xl space-y-3 font-mono select-text">
                <p>
                  <strong className="text-brand-gold">Bank:</strong> BNP PARIBAS Polkowice
                </p>
                <p>
                  <strong className="text-brand-gold">Odbiorca:</strong> Klub ALFA-CKM
                </p>
                <p>
                  <strong className="text-brand-gold">IBAN:</strong> 2616 0014 6217 2716 6050 0000 01
                </p>
                <p>
                  <strong className="text-brand-gold">Tytuł:</strong> Składka członkowska / Wsparcie ALFA-CKM
                </p>
              </div>

              {/* KOPIUJ */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(bankText);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2500);
                }}
                className="mt-6 border border-brand-gold text-brand-gold px-6 py-3 text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-black transition"
              >
                📋 Kopiuj dane do przelewu
              </button>

              {copied && (
                <p className="mt-3 text-sm text-green-400">
                  ✅ Dane skopiowane do schowka
                </p>
              )}

              {/* QR – WYŁĄCZONY */}
              {false && (
                <div className="mt-8 flex flex-col items-center gap-3">
                  <Image
                    src="/assets/qr/qr-przelew-alfa-ckm.png"
                    alt="QR kod do przelewu ALFA-CKM"
                    width={220}
                    height={220}
                    className="border border-brand-gold/40 p-2 bg-white rounded"
                  />
                  <p className="text-sm text-white/70 text-center">
                    Zeskanuj kod QR w aplikacji bankowej,<br />
                    aby szybko wykonać przelew.
                  </p>
                </div>
              )}

              <p className="text-white/60 text-sm mt-6">
                Dziękujemy za każdą formę wsparcia, zaufanie i pomoc
                w rozwoju wspólnoty ALFA-CKM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          SCHEMA.ORG
      ======================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Chrześcijański Klub Motocyklowy ALFA-CKM",
            "url": "https://www.alfackm.pl",
            "logo": "https://www.alfackm.pl/assets/logo/alfa-ckm-logo.png",
            "email": "alfackm@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Polkowice",
              "addressCountry": "PL"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "administrative",
                "telephone": "+48 667 259 614",
                "availableLanguage": "pl"
              }
            ],
            "makesOffer": {
              "@type": "Offer",
              "name": "Wsparcie działalności ALFA-CKM",
              "price": "0",
              "priceCurrency": "PLN",
              "category": "Donation"
            }
          }),
        }}
      />
    </>
  );
}
