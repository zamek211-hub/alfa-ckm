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
    url: "https://twojadomena.pl/pl/media",
    siteName: "ALFA-CKM",
    images: [
      {
        url: "https://twojadomena.pl/assets/og/media.jpg",
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
      <h1 className="text-3xl font-bold mb-8">Media / Wydarzenia</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link
            key={event.slug}
            href={`/pl/media/${event.slug}`}
            className="group block bg-black border border-brand-gold/30"
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
              <h2 className="text-lg font-semibold">{event.title}</h2>
              <p className="text-sm text-brand-gold/70">{event.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
