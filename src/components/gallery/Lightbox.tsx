"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

type Props = {
  images: string[];
  index: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (i: number) => void;
  onClose: () => void;
};

export default function Lightbox({
  images,
  index,
  onNext,
  onPrev,
  onSelect,
  onClose,
}: Props) {

  const src = images[index];
  const touchStartX = useRef(0);

  // blokada scrolla strony pod galerią
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"

      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}

      onTouchEnd={(e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (diff > 50) onNext();
        if (diff < -50) onPrev();
      }}
    >

      {/* zamknij */}

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-yellow-500 text-4xl z-50"
      >
        ✕
      </button>

      {/* licznik */}

      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-yellow-500 text-xl z-50">
        {index + 1} / {images.length}
      </div>

      {/* strzałki (desktop) */}

      <button
        onClick={onPrev}
        className="hidden md:block absolute left-6 text-yellow-500 text-7xl"
      >
        ‹
      </button>

      <button
        onClick={onNext}
        className="hidden md:block absolute right-6 text-yellow-500 text-7xl"
      >
        ›
      </button>

      {/* zdjęcie */}

      <div className="relative w-[95vw] h-[80vh]">

        <Image
          src={src}
          alt={`Zdjęcie ${index + 1}`}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 80vw, 60vw"
          quality={85}
          className="object-contain"
          priority
        />

      </div>

      {/* miniatury (tylko desktop) */}

      <div className="hidden md:flex absolute bottom-6 gap-2 overflow-x-auto max-w-[90vw]">

        {images.map((img, i) => (

          <img
            key={i}
            src={img}
            onClick={() => onSelect(i)}
            className={`h-16 w-24 object-cover cursor-pointer rounded
            ${i === index ? "ring-2 ring-yellow-500" : "opacity-60"}`}
          />

        ))}

      </div>

    </div>
  );
}