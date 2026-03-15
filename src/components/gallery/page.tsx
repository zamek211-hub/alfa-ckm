import GalleryGrid from "../../../components/gallery/GalleryGrid";

export default function EventPage({ params }) {
  const { slug } = params;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">
        {slug.replace("-", " ")}
      </h1>

      <GalleryGrid />
    </main>
  );
}
