export interface MediaItem {
  type: "image" | "mp4" | string;
  src: string;
  thumb?: string;
}

export interface EventMedia {
  slug: string;
  title: string;
  media: MediaItem[];
}