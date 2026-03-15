"use client";

import Image from "next/image";

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
  const nextImage = images[(index + 1) % images.length];

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

      {/* zamknij */}

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-yellow-500 text-4xl"
      >
        ✕
      </button>

      {/* licznik */}

      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-yellow-500 text-xl">
        {index + 1} / {images.length}
      </div>

      {/* strzałki */}

      <button
        onClick={onPrev}
        className="absolute left-6 text-yellow-500 text-7xl"
      >
        ‹
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 text-yellow-500 text-7xl"
      >
        ›
      </button>

      {/* zdjęcie */}

      <div className="relative w-[90vw] h-[80vh]">

        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          className="object-contain"
        />

      </div>

      {/* miniatury */}

      <div className="absolute bottom-6 flex gap-2 overflow-x-auto max-w-[90vw]">

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