"use client";

import { useMemo } from "react";

export default function EventStats({
  eventSlug,
  mediaCount,
}: {
  eventSlug: string;
  mediaCount: number;
}) {
  /* ================= DERIVED STATS ================= */
  const { views, likes } = useMemo(() => {
    let v = 0;
    let l = 0;

    for (let i = 0; i < mediaCount; i++) {
      v += Number(
        localStorage.getItem(`views_${eventSlug}_${i}`) || 0
      );
      l += Number(
        localStorage.getItem(`likes_${eventSlug}_${i}`) || 0
      );
    }

    return { views: v, likes: l };
  }, [eventSlug, mediaCount]);

  return (
    <div className="mt-8 p-4 border border-white/10 text-sm text-white/80">
      <div>
        👁️ Łączne odsłony: <b>{views}</b>
      </div>
      <div>
        ❤️ Łączne polubienia: <b>{likes}</b>
      </div>
    </div>
  );
}
