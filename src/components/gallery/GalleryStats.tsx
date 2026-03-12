"use client";

import { MediaItem } from "@/types/media";
import { useEffect, useState } from "react";

export default function GalleryStats({
  media,
  slug,
}: {
  media: MediaItem[];
  slug: string;
}) {
  const [stats, setStats] = useState({
    views: 0,
    likes: 0,
  });

  const images = media.filter((m) => m.type === "image").length;
  const videos = media.filter((m) => m.type === "mp4").length;

  useEffect(() => {
    let views = 0;
    let likes = 0;

    media.forEach((_, i) => {
      views += Number(localStorage.getItem(`views_${slug}_${i}`) || 0);
      likes += Number(localStorage.getItem(`likes_${slug}_${i}`) || 0);
    });

    setStats({ views, likes });
  }, [media, slug]);

  return (
    <div className="mt-6 text-sm text-center text-brand-gold/80">
      {images} zdjęć · {videos} video · {stats.views} wyświetleń ·{" "}
      {stats.likes} polubień
    </div>
  );
}