"use client";

import { useEffect, useState } from "react";

export default function EventStats({
  eventSlug,
  mediaCount,
}: {
  eventSlug: string;
  mediaCount: number;
}) {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    let v = 0;
    let l = 0;

    for (let i = 0; i < mediaCount; i++) {
      v += Number(localStorage.getItem(`views_${eventSlug}_${i}`) || 0);
      l += Number(localStorage.getItem(`likes_${eventSlug}_${i}`) || 0);
    }

    setViews(v);
    setLikes(l);
  }, []);

  return (
    <div className="mt-8 p-4 border border-white/10 text-sm text-white/80">
      <div>👁️ Łączne odsłony: <b>{views}</b></div>
      <div>❤️ Łączne polubienia: <b>{likes}</b></div>
    </div>
  );
}
