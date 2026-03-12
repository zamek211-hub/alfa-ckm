export interface MediaItem {
  type: "image" | "mp4";
  src: string;
  thumb?: string;
}

export interface EventMedia {
  slug: string;
  title: string;
  media: MediaItem[];
}