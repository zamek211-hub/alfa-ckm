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
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <>
      {/* FORMULARZ */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
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
          <p className="text-red-500 mt-2">❌ Błąd wysyłki. Spróbuj ponownie.</p>
        )}
      </form>
    </>
  );
}
