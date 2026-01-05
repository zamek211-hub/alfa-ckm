"use client";

import { useState } from "react";
import Link from "next/link";

export default function KontaktPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <>
      {/* PAGE HEADER */}
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
        <div className="grid gap-16 md:grid-cols-2">
          {/* DANE KONTAKTOWE */}
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
                📞{" "}
                <a
                  href="tel:+48123456789"
                  className="text-brand-gold hover:underline"
                >
                  +48 123 456 789
                </a>
              </p>

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

          {/* FORMULARZ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-gold mb-6">
              Napisz do nas
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-black border border-white/20 p-3 text-white"
              />

              <input
                type="email"
                placeholder="Adres e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black border border-white/20 p-3 text-white"
              />

              <textarea
                rows={5}
                placeholder="Twoja wiadomość"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-black border border-white/20 p-3 text-white"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition disabled:opacity-50"
              >
                {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>
            </form>

            {status === "success" && (
              <p className="text-green-500 mt-4">
                ✅ Wiadomość została wysłana. Dziękujemy!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 mt-4">
                ❌ Wystąpił błąd. Spróbuj ponownie później.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
