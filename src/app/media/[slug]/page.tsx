import { events } from "@/data/events";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import EventClient from "./EventClient";

/* =======================
   METADATA (SEO)
======================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: "Wydarzenie | ALFA-CKM",
      description: "Relacja z wydarzenia ALFA-CKM.",
    };
  }

  const title = `${event.title} | ALFA-CKM`;
  const description =
    event.description ??
    `Relacja z wydarzenia ${event.title}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.alfackm.pl/media/${event.slug}`,
      siteName: "ALFA-CKM",
      images: [
        {
          url: `https://www.alfackm.pl${event.cover}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "pl_PL",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.alfackm.pl${event.cover}`],
    },
  };
}

/* =======================
   PAGE
======================= */

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-gold mb-10 text-center">
        {event.title}
      </h1>

      <EventClient media={event.media} slug={event.slug} />
    </section>
  );
}
