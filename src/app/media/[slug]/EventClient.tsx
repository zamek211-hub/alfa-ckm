"use client";

import { MediaItem } from "@/types/media";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryStats from "@/components/gallery/GalleryStats";
import LightboxPro from "@/components/gallery/LightboxPro";
import { useLightbox } from "@/hooks/useLightbox";
import { useScrollRestore } from "@/hooks/useScrollRestore";
import { enterFullscreen, exitFullscreen } from "@/hooks/useFullscreen";

export default function EventClient({
  media,
  slug,
}: {
  media: MediaItem[];
  slug: string;
}) {

  /* ========================
     SAFETY CHECK
  ======================== */

  if (!media || media.length === 0) {
    return (
      <p className="text-center text-gray-400">
        Brak zdjęć w tej galerii.
      </p>
    );
  }

  const { index, open, close, setIndex } = useLightbox();

  useScrollRestore(`gallery-${slug}`);

  /* ========================
     FULLSCREEN HANDLERS
  ======================== */

  const openWithFullscreen = (i: number) => {
    if (index !== null) return; // blokuje otwieranie gdy lightbox działa
    enterFullscreen();
    open(i);
  };

  const closeWithFullscreen = () => {
    exitFullscreen();
    close();
  };

  /* ========================
     GRID OPEN HANDLER
  ======================== */

  const handleOpen = (i: number) => {
    if (index !== null) return;
    openWithFullscreen(i);
  };

  return (
    <>
      <GalleryGrid
        media={media}
        onOpen={handleOpen}
      />

      <GalleryStats media={media} slug={slug} />

      <LightboxPro
      items={media}
      index={index}
      onClose={closeWithFullscreen}
      onChange={setIndex}
/>
      )}
    </>
  );
}