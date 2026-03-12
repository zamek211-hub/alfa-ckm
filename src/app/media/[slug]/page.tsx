import { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadGallery } from "@/lib/gallery";
import EventClient from "./EventClient";
import { getAllEvents } from "@/lib/events";
import EventMap from "@/components/EventMap";
import { extractRoute } from "@/lib/exifRoute";

/* =======================
   STATIC PARAMS (SSG)
======================= */

export function generateStaticParams() {
  const events = getAllEvents();

  return events.map((event) => ({
    slug: event.slug,
  }));
}

/* =======================
   METADATA (SEO)
======================= */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const { slug } = params;

  const events = getAllEvents();

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: "Wydarzenie | ALFA-CKM",
      description: "Relacja z wydarzenia ALFA-CKM.",
      alternates: {
        canonical: "https://www.alfackm.pl/media",
      },
    };
  }

  const title = `${event.title} | ALFA-CKM`;
  const description = `Relacja z wydarzenia ${event.title}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.alfackm.pl/media/${event.slug}`,
    },
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
  params: { slug: string };
}) {

  const { slug } = params;

  const events = getAllEvents();

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const [season, ...folderParts] = slug.split("-");
  const folder = folderParts.join("-");

  const media = loadGallery(`media/${season}/${folder}`);
  const routePoints = extractRoute(`media/${season}/${folder}`);

  return (

    <section className="container mx-auto px-4 py-12">

      <h1 className="text-4xl md:text-5xl font-bold text-brand-gold mb-10 text-center">
        {event.title}
      </h1>

      {/* GALERIA */}

      <EventClient media={media} slug={slug} />

      {/* MAPA WYDARZENIA */}

      <div className="mt-20">

        <h2 className="text-2xl font-bold text-center mb-6">
          Trasa wydarzenia
        </h2>

        <EventMap points={routePoints} />
          points={[
            {
              lat: 49.426,
              lng: 22.486,
              title: "Start – Bieszczady",
              image: "/media/2025/bieszczady/1.jpg"
            },
            {
              lat: 49.512,
              lng: 22.714,
              title: "Przystanek widokowy",
              image: "/media/2025/bieszczady/3.jpg"
            },
            {
              lat: 49.365,
              lng: 22.593,
              title: "Meta wyprawy",
              image: "/media/2025/bieszczady/5.jpg"
            }
          ]}
        />

      </div>

    </section>
  );
}