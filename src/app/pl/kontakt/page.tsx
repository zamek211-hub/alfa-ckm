"use client";

import { useState } from "react";

export default function KontaktForm() {
  const [status, setStatus] = useState<null | "ok" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      setStatus("ok");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        required
        placeholder="Imię i nazwisko"
        className="w-full bg-black border border-white/20 p-3 text-white"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Adres e-mail"
        className="w-full bg-black border border-white/20 p-3 text-white"
      />

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Twoja wiadomość"
        className="w-full bg-black border border-white/20 p-3 text-white"
      />

      <button
        type="submit"
        className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition"
      >
        Wyślij wiadomość
      </button>

      {status === "ok" && (
        <p className="text-green-500">Wiadomość została wysłana ✅</p>
      )}

      {status === "error" && (
        <p className="text-red-500">Błąd wysyłania ❌</p>
      )}
    </form>
  );
}
