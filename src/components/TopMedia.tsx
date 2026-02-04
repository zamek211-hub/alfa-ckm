"use client";

import { useMemo } from "react";

/** Typ pojedynczego media */
type MediaItem = {
  type: "image" | "video";
  src: string;
};

type TopItem = {
  index: number;
  likes: number;
};

export default function TopMedia({
  media,
  eventSlug,
  onOpen,
}: {
  media: MediaItem[];
  eventSlug: string;
  onOpen: (index: number) => void;
}) {
  /* ================= TOP MEDIA =================
     Liczone pochodnie – BEZ useEffect
  ============================================== */
  const top: TopItem[] = useMemo(() => {
    if (!media || media.length === 0) return [];

    const scored: TopItem[] = media.map((_, i) => ({
      index: i,
      likes: Number(
        localStorage.getItem(`likes_${eventSlug}_${i}`) || 0
      ),
    }));

    return scored
      .filter((m) => m.likes > 0)
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 3);
  }, [media, eventSlug]);

  if (top.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold mb-4">
        🔥 TOP MEDIA
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {top.map((m) => {
          const item = media[m.index];
          if (!item) return null;

          return (
            <button
              key={m.index}
              onClick={() => onOpen(m.index)}
              className="relative aspect-square bg-black border border-brand-gold/40"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-3xl">
                  ▶
                </div>
              )}

              <span className="absolute bottom-2 right-2 text-xs bg-black/70 px-2 py-1">
                ❤️ {m.likes}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
