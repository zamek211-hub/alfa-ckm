/*
====================================================
EVENTS DATA – FINAL (SEO-READY)
====================================================
*/

export interface MediaItem {
  type: "image" | "mp4";
  src: string;
  thumb?: string;
}

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  cover: string;
  media: MediaItem[];
  location?: string;
  description?: string;
  visibility?: "public" | "members";
};

/*
====================================================
HELPERS
====================================================
*/

const images = (slug: string, count: number): MediaItem[] =>
  Array.from({ length: count }, (_, i) => ({
    type: "image",
    src: `/assets/images/${slug}/photo${i + 1}.jpg`,
    thumb: `/assets/images/${slug}/thumbs/photo${i + 1}.jpg`,
  }));

const videos = (slug: string, count: number): MediaItem[] =>
  Array.from({ length: count }, (_, i) => ({
    type: "mp4",
    src: `/assets/videos/${slug}/video${i + 1}.mp4`,
  }));

/*
====================================================
EVENTS
====================================================
*/

export const events: EventItem[] = [
  {
    slug: "bieszczady-2023",
    title: "Wyprawa Bieszczady 2023",
    date: "2023-06-20",
    location: "Bieszczady",
    description:
      "Motocyklowa wyprawa ALFA-CKM w Bieszczady. Wspólna trasa, rozmowy i czas spędzony w braterskiej, chrześcijańskiej wspólnocie motocyklowej.",
    cover: "/assets/images/bieszczady-2023/cover.jpg",
    media: [
      ...images("bieszczady-2023", 20),
      //...videos("bieszczady-2023", 5),
    ],
  },

  {
    slug: "offroad-2024",
    title: "Szkolenie Offroad 2024",
    date: "2024-04-12",
    location: "Polska",
    description:
      "Szkolenie offroadowe dla członków ALFA-CKM. Nauka techniki jazdy w terenie, bezpieczeństwo i rozwój umiejętności w motocyklowej wspólnocie.",
    cover: "/assets/images/offroad-2024/cover.jpg",
    media: [
      ...images("offroad-2024", 20),
      //...videos("offroad-2024", 5),
    ],
  },

  {
    slug: "impreza-klubowa",
    title: "Impreza Klubowa ALFA-CKM",
    date: "2024-08-01",
    location: "Polska",
    description:
      "Klubowe spotkanie integracyjne ALFA-CKM. Czas rozmów, relacji i budowania wspólnoty chrześcijańskiego klubu motocyklowego.",
    cover: "/assets/images/impreza-klubowa/cover.jpg",
    media: [
      ...images("impreza-klubowa", 20),
      //...videos("impreza-klubowa", 5),
    ],
  },

  {
    slug: "wypad-sudety-10-2025",
    title: "Wypad ALFA-CKM w Sudety – Październik 2025",
    date: "2025-10-01",
    location: "Sudety",
    description:
      "Jesienny wypad motocyklowy ALFA-CKM w Sudety. Wspólna trasa, rozmowy i czas spędzony w chrześcijańskiej wspólnocie motocyklowej.",
    cover: "/assets/images/wypad-sudety-10-2025/cover-1.jpg",
    media: [
      ...images("wypad-sudety-10-2025", 15),
    ],
  },
];
