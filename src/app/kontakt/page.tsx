"use client";

/*
========================================
STRONA: KONTAKT (KANONICZNA, PL)
Ścieżka: /kontakt
Cel:
- Prosta, stabilna strona kontaktowa
- Wygląd 1:1 jak wcześniejsza wersja
- Formularz wysyłający dane do /api/contact
========================================
*/

import { useState } from "react";

/*
----------------------------------------
1. KOMPONENT STRONY
----------------------------------------
*/
export default function KontaktPage() {
  /*
  ----------------------------------------
  2. STAN FORMULARZA
  - idle     → nic się nie dzieje
  - sending  → formularz wysyłany
  - success  → wysłano poprawnie
  - error    → błąd wysyłki
  ----------------------------------------
  */
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  /*
  ----------------------------------------
  3. OBSŁUGA WYSYŁKI FORMULARZA
  ----------------------------------------
  */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Send failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  }

  /*
  ----------------------------------------
  4. WIDOK STRONY
  - Prosty kontener
  - Jedna kolumna
  - Brak grida (maksymalna stabilność)
  ----------------------------------------
  */
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-brand-gold">
        Kontakt
      </h1>

      <p className="text-white/70 leading-relaxed mb-10">
        Masz pytania, chcesz się z nami skontaktować lub dowiedzieć się więcej
        o działalności klubu? Napisz do nas poprzez formularz poniżej.
      </p>

      {/* FORMULARZ */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Imię i nazwisko"
          className="w-full bg-black border border-white/20 p-3 text-white"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Adres e-mail"
          className="w-full bg-black border border-white/20 p-3 text-white"
        />

        <textarea
          name="message"
          rows={5}
          required
          placeholder="Twoja wiadomość"
          className="w-full bg-black border border-white/20 p-3 text-white"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition"
        >
          {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
        </button>

        {/* KOMUNIKATY */}
        {status === "success" && (
          <p className="text-green-500 mt-2">
            ✅ Wiadomość została wysłana.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 mt-2">
            ❌ Wystąpił błąd. Spróbuj ponownie.
          </p>
        )}
      </form>
    </section>
  );
}
