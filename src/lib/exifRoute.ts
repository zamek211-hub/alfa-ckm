import fs from "fs";
import path from "path";
import exif from "exif-parser";

export interface RoutePoint {
  lat: number;
  lng: number;
  title?: string;
  image?: string;
}

export function extractRoute(folder: string): RoutePoint[] {

  const fullPath = path.join(process.cwd(), "public", folder);

  const files = fs.readdirSync(fullPath);

  const points: RoutePoint[] = [];

  for (const file of files) {

    if (!file.match(/\.(jpg|jpeg)$/i)) continue;

    const buffer = fs.readFileSync(path.join(fullPath, file));

    try {

      const parser = exif.create(buffer);
      const result = parser.parse();

      const lat = result.tags.GPSLatitude;
      const lng = result.tags.GPSLongitude;

      if (lat && lng) {

        points.push({
          lat,
          lng,
          image: `/${folder}/${file}`,
        });

      }

    } catch {}

  }

  return points;

}