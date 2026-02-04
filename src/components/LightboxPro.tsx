"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ShareButton from "@/components/ShareButton";

interface MediaItem {
  type: "image" | "mp4";
  src: string;
  thumb?: string;
}

export default function LightboxPro({
  items,
  index,
  onClose,
  onChange,
  eventSlug,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
  eventSlug: string;
}) {
  /* ================= UI STATE ================= */
  const [isPlaying, setIsPlaying] = useState(false);

  const startX = useRef<number | null>(null);
  const viewedRef = useRef<number | null>(null);

  const item = items[index];

  /* ================= SHARE URL ================= */
  const shareUrl =
    typeof window !== "undefined"
      ? (() => {
          const url = new URL(window.location.href);
          url.searchParams.set("media", String(index));
          return url.toString();
        })()
      : "";

  /* ================= NAV ================= */
  const prev = () => {
    setIsPlaying(false);
    onChange(index === 0 ? items.length - 1 : index - 1);
  };

  const next = () => {
    setIsPlaying(false);
    onChange(index === items.length - 1 ? 0 : index + 1);
  };

  /* ================= PLAY (SLIDESHOW) ================= */
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      onChange((index + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPlaying, index, items.length, onChange]);

  /* ================= SWIPE ================= */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) diff > 0 ? next() : prev();
    startX.current = null;
  };

  /* ================= VIEWS (WRITE) ================= */
  useEffect(() => {
    if (viewedRef.current === index) return;
    viewedRef.current = index;

    const key = `views_${eventSlug}_${index}`;
    const current = Number(localStorage.getItem(key) || 0);
    localStorage.setItem(key, String(current + 1));
  }, [index, eventSlug]);

  /* ================= DERIVED STATE ================= */
  const views = useMemo(
    () =>
      Number(
        localStorage.getItem(`views_${eventSlug}_${index}`) || 0
      ),
    [index, eventSlug]
  );

  const likes = useMemo(
    () =>
      Number(
        localStorage.getItem(`likes_${eventSlug}_${index}`) || 0
      ),
    [index, eventSlug]
  );

  const liked = useMemo(
    () =>
      localStorage.getItem(
        `liked_${eventSlug}_${index}`
      ) === "1",
    [index, eventSlug]
  );

  const toggleLike = () => {
    const key = `likes_${eventSlug}_${index}`;
    const likedKey = `liked_${eventSlug}_${index}`;
    let count = likes;

    if (liked) {
      count = Math.max(0, count - 1);
      localStorage.removeItem(likedKey);
    } else {
      count += 1;
      localStorage.setItem(likedKey, "1");
    }

    localStorage.setItem(key, String(count));
  };

  /* ================= RENDER ================= */
  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl z-50"
      >
        ✕
      </button>

      {/* SHARE */}
      <ShareButton url={shareUrl} />

      {/* LIKE */}
      <button
        onClick={toggleLike}
        className="absolute top-6 left-6 text-white text-xl z-50"
      >
        {liked ? "❤️" : "🤍"} {likes}
      </button>

      {/* PLAY / PAUSE */}
      <button
        onClick={() => setIsPlaying((p) => !p)}
        className="absolute bottom-6 right-6 z-50 bg-black/60 text-white px-3 py-1 rounded"
      >
        {isPlaying ? "⏸ PAUSE" : "▶ PLAY"}
      </button>

      {/* VIEWS */}
      <div className="absolute bottom-24 right-6 text-white/70 text-xs">
        👁️ {views}
      </div>

      {/* NAV DESKTOP */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hidden md:block"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hidden md:block"
      >
        ›
      </button>

      {/* CONTENT */}
      <div className="flex-1 flex items-center justify-center">
        {item.type === "image" && (
          <img
            src={item.src}
            alt=""
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />
        )}

        {item.type === "mp4" && (
          <video
            src={item.src}
            controls
            autoPlay
            className="max-h-[80vh] max-w-[90vw]"
          />
        )}
      </div>
    </div>
  );
}
