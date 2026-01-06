"use client";

/**
 * STRONA: /kontakt
 * JEDYNA OBOWIĄZUJĄCA WERSJA
 * - Wygląd 1:1 jak dotychczas
 * - Formularz wysyła dane do /api/contact
 */

import { useState } from "react";

export default function KontaktPage() {
  /**
   * status formularza:
   * idle     – nic się nie dzieje
   * sending  – trwa wysyłanie
   * success  – mail wysłany
   * error    – błąd wysyłki
   */
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  /**
   * Obsługa wysłania formularza
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

      if (!res.ok) throw new Error("Błąd API");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error("Błąd wysyłki:", err);
      setStatus("error");
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-gold mb-10">
        Kontakt
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        {/* IMIĘ I NAZWISKO */}
        <input
          name="name"
          type="text"
          required
          placeholder="Imię i nazwisko"
          className="w-full bg-black border border-white/20 p-4 text-white"
        />

        {/* EMAIL */}
        <input
          name="email"
          type="email"
          required
          placeholder="Adres e-mail"
          className="w-full bg-black border border-white/20 p-4 text-white"
        />

        {/* WIADOMOŚĆ */}
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Twoja wiadomość"
          className="w-full bg-black border border-white/20 p-4 text-white"
        />

        {/* PRZYCISK */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-8 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition"
        >
          {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
        </button>

        {/* KOMUNIKATY */}
        {status === "success" && (
          <p className="text-green-500">
            ✅ Wiadomość została wysłana.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500">
            ❌ Wystąpił błąd. Spróbuj ponownie później.
          </p>
        )}
      </form>
    </section>
  );
}
