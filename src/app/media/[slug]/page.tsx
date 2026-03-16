import { gallery } from "@/data/gallery";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Link from "next/link";

type Params = {
  slug: string;
};

export default async function EventPage({
  params,
}: {
  params: Promise<Params>;
}) {

  const { slug } = await params;

  const event = gallery.find((e) => e.slug === slug);

  if (!event) {
    return <div>Event not found</div>;
  }

  const currentIndex = gallery.findIndex((e) => e.slug === slug);
  const prev = gallery[currentIndex - 1];
  const next = gallery[currentIndex + 1];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* POWRÓT DO LISTY */}

      <Link
        href="/media"
        className="text-yellow-500 mb-6 inline-block"
      >
        ← Wróć do wydarzeń
      </Link>

      {/* TYTUŁ */}

      <h1 className="text-3xl font-bold text-white mb-8">
        {event.title}
      </h1>

      {/* GALERIA */}

      <GalleryGrid images={event.images} />

      {/* NAWIGACJA WYDARZEŃ */}

      <div className="flex justify-between mt-16 text-yellow-500">

        {prev ? (
          <Link href={`/media/${prev.slug}`}>
            ← {prev.title}
          </Link>
        ) : <div />}

        {next && (
          <Link href={`/media/${next.slug}`}>
            {next.title} →
          </Link>
        )}

      </div>

    </main>
  );
}