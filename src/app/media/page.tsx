export const dynamic = "force-dynamic";

import Link from "next/link";
import { events } from "@/data/events";
import { Metadata } from "next";

/* =======================
   METADATA (SEO)
======================= */

export const metadata: Metadata = {
  title: "Media | Wydarzenia ALFA-CKM",
  description:
    "Galeria wydarzeń ALFA-CKM – wyprawy motocyklowe, szkolenia, integracje i życie klubowe.",
  openGraph: {
    title: "Media | Wydarzenia ALFA-CKM",
    description:
      "Zdjęcia i materiały video z wydarzeń ALFA-CKM – chrześcijański klub motocyklowy.",
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
  twitter: {
    card: "summary_large_image",
    title: "Media | Wydarzenia ALFA-CKM",
    description:
      "Galeria wydarzeń ALFA-CKM – wyprawy, szkolenia i życie klubowe.",
    images: ["https://www.alfackm.pl/assets/og/media.jpg"],
  },
};

/* =======================
   PAGE
======================= */

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
            {/* COVER */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={event.cover}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* OPIS */}
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-white">
                {event.title}
              </h2>

              <p className="text-sm text-brand-gold/70">
                {event.date}
                {event.location && ` • ${event.location}`}
              </p>

              {event.description && (
                <p className="text-sm text-gray-300 line-clamp-3">
                  {event.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
