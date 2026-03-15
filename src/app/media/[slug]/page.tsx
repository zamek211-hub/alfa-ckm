import { gallery } from "@/data/gallery";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default async function EventPage({ params }) {

  const { slug } = await params;

  const event = gallery.find((e) => e.slug === slug);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold text-white mb-8">
        {event.title}
      </h1>

      <GalleryGrid images={event.images} />

    </main>
  );
}