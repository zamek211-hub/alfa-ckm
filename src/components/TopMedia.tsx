"use client";

import { useEffect, useState } from "react";

export default function TopMedia({
  media,
  eventSlug,
  onOpen,
}: {
  media: any[];
  eventSlug: string;
  onOpen: (index: number) => void;
}) {
  const [top, setTop] = useState<{ index: number; likes: number }[]>([]);

  useEffect(() => {
    const scored = media.map((_, i) => ({
      index: i,
      likes: Number(localStorage.getItem(`likes_${eventSlug}_${i}`) || 0),
    }));

    const sorted = scored
      .filter((m) => m.likes > 0)
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 3);

    setTop(sorted);
  }, []);

  if (top.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold mb-4">🔥 TOP MEDIA</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {top.map((m) => {
          const item = media[m.index];

          return (
            <button
              key={m.index}
              onClick={() => onOpen(m.index)}
              className="relative aspect-square bg-black border border-brand-gold/40"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
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
