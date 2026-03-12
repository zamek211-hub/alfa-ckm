"use client";

import { useEffect, useState } from "react";
import { MediaItem } from "@/types/media";
import {
  TransformWrapper,
  TransformComponent
} from "react-zoom-pan-pinch";

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

  const item = items[index];

  const [autoPlay, setAutoPlay] = useState(false);

  const next = () => {
    if (index < items.length - 1) onChange(index + 1);
    else onChange(0);
  };

  const prev = () => {
    if (index > 0) onChange(index - 1);
  };

  /* KEYBOARD */

  useEffect(() => {

    const handleKey = (e: KeyboardEvent) => {

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [index]);

  /* AUTOPLAY */

  useEffect(() => {

    if (!autoPlay) return;

    const timer = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(timer);

  }, [autoPlay, index]);

  /* PRELOAD NEXT IMAGE */

  useEffect(() => {

    const nextIndex = index + 1 < items.length ? index + 1 : 0;

    const nextImage = new Image();

    if (items[nextIndex]?.type === "image") {
      nextImage.src = items[nextIndex].src;
    }

  }, [index]);

  return (

    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >

      <div
        className="relative flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >

        {/* IMAGE */}

        {item.type === "image" && (

          <TransformWrapper
            limitToBounds={true}
            centerOnInit={true}
            wheel={{ step: 0.2 }}
            pinch={{ step: 5 }}
            doubleClick={{ mode: "zoomIn" }}
          >

            <TransformComponent>

              <img
                src={item.src}
                alt=""
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />

            </TransformComponent>

          </TransformWrapper>

        )}

        {/* VIDEO */}

        {item.type === "mp4" && (

          <video
            src={item.src}
            controls
            autoPlay
            className="max-w-[90vw] max-h-[90vh]"
          />

        )}

        {/* CLOSE */}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl z-20"
        >
          ✕
        </button>

        {/* COUNTER */}

        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/60 px-3 py-1 rounded z-20">
          {index + 1} / {items.length}
        </div>

        {/* LEFT */}

        <button
          onClick={prev}
          className="absolute left-[-80px] top-1/2 -translate-y-1/2 text-white text-7xl select-none z-20"
        >
          ‹
        </button>

        {/* RIGHT */}

        <button
          onClick={next}
          className="absolute right-[-80px] top-1/2 -translate-y-1/2 text-white text-7xl select-none z-20"
        >
          ›
        </button>

        {/* SLIDESHOW */}

        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded z-20"
        >
          {autoPlay ? "⏸ Stop" : "▶ Slideshow"}
        </button>

      </div>

    </div>

  );

}