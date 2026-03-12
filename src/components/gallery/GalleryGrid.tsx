"use client";

import GalleryItem from "./GalleryItem";
import { MediaItem } from "@/types/media";

export default function GalleryGrid({
  media,
  onOpen,
}: {
  media: MediaItem[];
  onOpen: (i: number) => void;
}) {

  if (!media || media.length === 0) {
    return (
      <p className="text-center text-gray-400">
        Brak zdjęć w galerii.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {media.map((item, i) => (
        <GalleryItem
          key={i}
          item={item}
          index={i}
          onClick={() => onOpen(i)}
        />
      ))}
    </div>
  );
}