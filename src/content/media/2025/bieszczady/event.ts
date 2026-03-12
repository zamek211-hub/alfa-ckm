import { MediaItem } from "@/types/media";

export const event = {
  slug: "2025-bieszczady",

  title: "Wyprawa Bieszczady",

  season: "2025",

  location: "Bieszczady",

  description:
    "Motocyklowa wyprawa ALFA CKM w Bieszczady w sezonie 2025.",

  cover: "/media/2025/bieszczady/cover.jpg",

  media: [
    {
  type: "image",
  src: "/media/2025/bieszczady/1.jpg",
  thumb: "/media/2025/bieszczady/thumbs/1.jpg"
}
    {
      type: "image",
      src: "/media/2025/bieszczady/2.jpg",
    },
  ] as MediaItem[],
};