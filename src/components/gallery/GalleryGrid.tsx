"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type Props = {
  images: string[];
};

export default function GalleryGrid({ images }: Props) {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {images.map((src, index) => (

          <div key={index} className="relative w-full h-48">

            <Image
  src={src}
  alt="Zdjęcie z wydarzenia ALFA-CKM"
  fill
  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
  loading="lazy"
  quality={80}
  className="object-cover rounded-lg cursor-pointer"
  onClick={() => setActiveIndex(index)}
/>

          </div>

        ))}

      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNext={() =>
            setActiveIndex((activeIndex + 1) % images.length)
          }
          onPrev={() =>
            setActiveIndex((activeIndex - 1 + images.length) % images.length)
          }
          onSelect={(i) => setActiveIndex(i)}
        />
      )}
    </>
  );
}