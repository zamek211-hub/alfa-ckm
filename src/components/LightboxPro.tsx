"use client";

import { useEffect, useRef, useState } from "react";
import { MediaItem } from "@/types/media";

export default function LightboxPro({
  items,
  index,
  onClose,
  onChange,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {

  const startX = useRef<number | null>(null);
  const item = items[index];

  const prev = () => {
    onChange(index === 0 ? items.length - 1 : index - 1);
  };

  const next = () => {
    onChange(index === items.length - 1 ? 0 : index + 1);
  };

  /* keyboard navigation */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();

    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  /* swipe mobile */

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {

    if (startX.current === null) return;

    const diff = startX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 60) {
      diff > 0 ? next() : prev();
    }

    startX.current = null;
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >

      {/* close */}

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl z-50"
      >
        ✕
      </button>

      {/* navigation */}

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

      {/* content */}

      <div className="flex-1 flex items-center justify-center">

        {item.type === "image" && (
          <img
            src={item.src}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />
        )}

        {item.type === "mp4" && (
          <video
            src={item.src}
            controls
            autoPlay
            className="max-h-[85vh] max-w-[90vw]"
          />
        )}

      </div>

    </div>
  );
}