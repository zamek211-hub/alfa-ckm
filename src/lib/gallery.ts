import fs from "fs";
import path from "path";

export function loadGallery(dir: string) {

  const fullPath = path.join(process.cwd(), "public", dir);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);

  const media = files
    .filter((file) => /\.(jpg|jpeg|png|webp|mp4)$/i.test(file))
    .filter((file) => file !== "cover.jpg")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      type: file.endsWith(".mp4") ? "mp4" : "image",
      src: `/${dir}/${file}`,
      thumb: `/${dir}/thumbs/${file}`,
    }));

  return media ?? [];
}