"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import LightboxPro from "@/components/LightboxPro";

interface MediaItem {
  type: "image" | "mp4";
  src: string;
  thumb?: string;
}

export default function EventClient({
  media,
  slug,
}: {
  media: MediaItem[];
  slug: string;
}) {
  /* ================= STATE / HOOKS ================= */
  const searchParams = useSearchParams();
  const mediaParam = searchParams.get("media");
  const [index, setIndex] = useState<number | null>(null);

  /* ================= DEEP LINK ================= */
  useEffect(() => {
    if (mediaParam === null) return;
    const parsed = Number(mediaParam);
    if (Number.isInteger(parsed) && parsed >= 0 && parsed < media.length) {
      setIndex(parsed);
    }
  }, [mediaParam, media.length]);

  /* ================= URL UPDATE ================= */
  const updateUrl = (newIndex: number | null) => {
    const url = new URL(window.location.href);
    if (newIndex === null) {
      url.searchParams.delete("media");
    } else {
      url.searchParams.set("media", String(newIndex));
    }
    window.history.replaceState({}, "", url.toString());
  };

  /* ================= STATS (EVENT) ================= */
  const imagesCount = media.filter((m) => m.type === "image").length;
  const videosCount = media.filter((m) => m.type === "mp4").length;

  const [totalViews, setTotalViews] = useState(0);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    let views = 0;
    let likes = 0;

    media.forEach((_, i) => {
      views += Number(localStorage.getItem(`views_${slug}_${i}`) || 0);
      likes += Number(localStorage.getItem(`likes_${slug}_${i}`) || 0);
    });

    setTotalViews(views);
    setTotalLikes(likes);
  }, [media, slug, index]);

  /* ================= RENDER ================= */
  return (
    <>
      {/* ===== GRID ===== */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {media.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setIndex(i);
              updateUrl(i);
            }}
            className="relative aspect-square overflow-hidden bg-black"
          >
            {item.type === "image" && (
              <img
                src={item.thumb ?? item.src}
                alt="Zdjęcie z wydarzenia"
                className="w-full h-full object-cover transition-transform hover:scale-105"
                loading="lazy"
              />
            )}

            {item.type === "mp4" && (
              <>
                <img
                  src={item.thumb ?? "/assets/video-thumb.jpg"}
                  alt="Video z wydarzenia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-3xl">
                  ▶
                </span>
              </>
            )}
          </button>
        ))}
      </div>

      {/* ===== STATS ===== */}
      <div className="mt-6 text-sm text-center text-brand-gold/80">
        {imagesCount} zdjęć · {videosCount} video · {totalViews} wyświetleń ·{" "}
        {totalLikes} polubień
      </div>

      {/* ===== LIGHTBOX ===== */}
      {index !== null && (
        <LightboxPro
          items={media}
          index={index}
          eventSlug={slug}
          onClose={() => {
            setIndex(null);
            updateUrl(null);
          }}
          onChange={(i) => {
            setIndex(i);
            updateUrl(i);
          }}
        />
      )}
    </>
  );
}
