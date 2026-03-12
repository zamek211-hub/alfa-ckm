"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MediaItem } from "@/types/media";

export default function GalleryItem({
  item,
  index,
  onClick,
}: {
  item: MediaItem;
  index: number;
  onClick: (i: number) => void;
}) {
  return (
    <motion.button
      layoutId={`gallery-image-${index}`}
      type="button"
      onClick={() => onClick(index)}
      className="relative aspect-square overflow-hidden bg-black"
    >
      {item.type === "image" && (
        <Image
          src={item.thumb ?? item.src}
          alt="Zdjęcie z wydarzenia"
          fill
          priority={index < 2}
          placeholder="blur"
          blurDataURL={item.thumb ?? item.src}
          sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 200px"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      )}

      {item.type === "mp4" && (
        <>
          <Image
            src={item.thumb ?? "/assets/video-thumb.jpg"}
            alt="Video z wydarzenia"
            fill
            priority={index < 2}
            placeholder="blur"
            blurDataURL={item.thumb ?? "/assets/video-thumb.jpg"}
            sizes="(max-width:640px) 50vw, 200px"
            className="object-cover"
          />

          <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-3xl">
            ▶
          </span>
        </>
      )}
    </motion.button>
  );
}