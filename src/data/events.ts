/*
====================================================
EVENTS DATA – FINAL (KANONICZNA WERSJA)
– folder = slug eventu
– images:
    /assets/images/{slug}/photo1.jpg ... photoN.jpg
– thumbs:
    /assets/images/{slug}/thumbs/photo1.jpg ... photoN.jpg
– videos:
    /assets/videos/{slug}/video1.mp4 ... videoN.mp4
====================================================
*/

export interface MediaItem {
  type: "image" | "mp4";
  src: string;      // DUŻE zdjęcie / video
  thumb?: string;   // MINIATURKA (tylko dla image)
}

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  cover: string;
  media: MediaItem[];
  description?: string;
  location?: string;
  visibility?: "public" | "members";
  type?: string;
};

/*
====================================================
HELPERY
====================================================
*/

// zdjęcia: photo1.jpg ... photoN.jpg
const images = (slug: string, count: number): MediaItem[] =>
  Array.from({ length: count }, (_, i) => ({
    type: "image",
    src: `/assets/images/${slug}/photo${i + 1}.jpg`,
    thumb: `/assets/images/${slug}/thumbs/photo${i + 1}.jpg`,
  }));

// video: video1.mp4 ... videoN.mp4
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
      "Motocyklowa wyprawa ALFA CKM w Bieszczady. Wspólna trasa, rozmowy i czas spędzony w braterskiej atmosferze.",
    cover: "/assets/images/bieszczady-2023/cover.jpg?v=1",
    media: [
      ...images("bieszczady-2023", 20),
      ...videos("bieszczady-2023", 5),
    ],
  },

  {
    slug: "offroad-2024",
    title: "Szkolenie Offroad 2024",
    date: "2024-04-12",
    location: "Polska",
    description:
      "Szkolenie offroadowe dla członków ALFA CKM. Doskonalenie techniki jazdy w terenie i wspólna praca nad umiejętnościami.",
    cover: "/assets/images/offroad-2024/cover.jpg",
    media: [
      ...images("offroad-2024", 20),
      ...videos("offroad-2024", 5),
    ],
  },

  {
    slug: "impreza-klubowa",
    title: "Impreza Klubowa",
    date: "2024-08-01",
    location: "Polska",
    description:
      "Klubowe spotkanie ALFA CKM. Czas rozmów, integracji i wspólnego budowania relacji w motocyklowej wspólnocie.",
    cover: "/assets/images/impreza-klubowa/cover.jpg",
    media: [
      ...images("impreza-klubowa", 20),
      ...videos("impreza-klubowa", 5),
    ],
  },

  {
    slug: "wypad-sudety-10-2025",
    title: "Wypad ALFA CKM w Sudety – Październik 2025",
    date: "2025-10-01",
    location: "Sudety",
    description:
      "Jesienny wypad ALFA CKM w Sudety. Wspólna trasa motocyklowa, rozmowy i czas spędzony w braterskiej atmosferze.",
    cover: "/assets/images/wypad-sudety-10-2025/cover.jpg",
    media: [
      ...images("wypad-sudety-10-2025", 15),
    ],
  },
];
