import fs from "fs";
import path from "path";

export function loadGallery() {

  const mediaDir = path.join(process.cwd(), "public/media");

  if (!fs.existsSync(mediaDir)) {
    return [];
  }

  const files = fs.readdirSync(mediaDir);

  return files;
}