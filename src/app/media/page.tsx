import Link from "next/link";
import { events } from "@/data/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media | ALFA-CKM",
  description:
    "Galeria wydarzeń ALFA-CKM – wyprawy, szkolenia, integracje i życie klubowe.",
  openGraph: {
    title: "Media | ALFA-CKM",
    description:
      "Zdjęcia i video z wydarzeń ALFA-CKM – chrześcijański klub motocyklowy.",
    url: "https://www.alfackm.pl/media",
    siteName: "ALFA-CKM",
    images: [
      {
        url: "https://www.alfackm.pl/assets/og/media.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function MediaPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* NAGŁÓWEK STRONY */}
      <h1 className="text-4xl md:text-5xl font-bold text-brand-gold mb-12 text-center">
        Media / Wydarzenia
      </h1>

      {/* LISTA WYDARZEŃ */}
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link
            key={event.slug}
            href={`/media/${event.slug}`}
            className="group block bg-black border border-brand-gold/30 hover:border-brand-gold transition"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={event.cover}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-white">
                {event.title}
              </h2>
              <p className="text-sm text-brand-gold/70">
                {event.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
