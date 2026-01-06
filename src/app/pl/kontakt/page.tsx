"use client";

import { useState } from "react";
import Link from "next/link";

export default function KontaktPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* HEADER */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-brand-gold text-4xl md:text-5xl font-bold tracking-wide">
            KONTAKT
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Masz pytania, chcesz dołączyć do klubu lub zostać partnerem?
            Skontaktuj się z nami.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid gap-16 md:grid-cols-2 items-start">

          {/* LEWA KOLUMNA */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-gold mb-6">
              Dane kontaktowe
            </h2>

            <div className="space-y-4 text-white/80">
              <p className="text-white font-semibold">
                Chrześcijański Klub Motocyklowy ALFA-CKM
              </p>
              <p>📍 Polska</p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:kontakt@alfackm.pl"
                  className="text-brand-gold hover:underline"
                >
                  kontakt@alfackm.pl
                </a>
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/pl/partnerzy/zostan-partnerem"
                className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition"
              >
                Zostań partnerem
              </Link>
            </div>
          </div>

          {/* PRAWA KOLUMNA – FORMULARZ */}
          <div className="w-full max-w-md">
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

              {status === "success" && (
                <p className="text-green-500 mt-2">✅ Wiadomość została wysłana.</p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-2">❌ Błąd wysyłki.</p>
              )}
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
