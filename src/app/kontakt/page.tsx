"use client";

import { useState } from "react";

/**
 * STRONA: /kontakt
 * Formularz kontaktowy:
 * - imię i nazwisko
 * - e-mail
 * - numer telefonu (obowiązkowy)
 * - temat wiadomości (obowiązkowy)
 * - treść wiadomości
 */

type Status = "idle" | "sending" | "success" | "error";

export default function KontaktPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.success) {
        throw new Error("Błąd wysyłki");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Kontakt – błąd:", err);
      setStatus("error");
    }
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-gold mb-4">
            Kontakt
          </h1>
          <p className="text-white/80 max-w-2xl">
            Masz pytania, chcesz dołączyć do klubu lub nawiązać współpracę?
            Wypełnij formularz kontaktowy.
          </p>
        </div>
      </section>

      {/* FORMULARZ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
          {/* IMIĘ */}
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

          {/* TELEFON */}
          <input
            name="phone"
            type="tel"
            required
            placeholder="Numer telefonu"
            className="w-full bg-black border border-white/20 p-4 text-white"
          />

          {/* TEMAT */}
          <select
            name="subject"
            required
            className="w-full bg-black border border-white/20 p-4 text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Wybierz temat wiadomości
            </option>
            <option value="Dolaczenie do klubu">Dołączenie do klubu</option>
            <option value="Zostanie partnerem">Zostanie partnerem</option>
            <option value="Informacja ogolna">Informacja ogólna</option>
            <option value="Media i wydarzenia">Media / wydarzenia</option>
            <option value="Inne">Inne</option>
          </select>

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
            className="px-8 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition disabled:opacity-50"
          >
            {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>

          {/* KOMUNIKATY */}
          {status === "success" && (
            <p className="text-green-500">
              ✅ Wiadomość została wysłana. Skontaktujemy się z Tobą.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-500">
              ❌ Nie udało się wysłać wiadomości. Spróbuj ponownie później.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
