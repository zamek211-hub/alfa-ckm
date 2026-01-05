"use client";
import { useState } from "react";

export default function KontaktForm() {
  const [status, setStatus] = useState<null | "ok" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    if (res.ok) {
      form.reset();
      setStatus("ok");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Imię i nazwisko"
        className="w-full bg-black border border-white/20 p-3 text-white"
      />

      <input
        name="email"
        type="email"
        placeholder="Adres e-mail"
        className="w-full bg-black border border-white/20 p-3 text-white"
      />

      <textarea
        name="message"
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
        <p className="text-green-500">✅ Wiadomość wysłana</p>
      )}
      {status === "error" && (
        <p className="text-red-500">❌ Błąd wysyłki</p>
      )}
    </form>
  );
}
