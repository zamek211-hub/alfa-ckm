import fs from "fs";
import path from "path";

export interface EventData {
  slug: string;
  title: string;
  cover: string;
  season: string;
}

export function getAllEvents(): EventData[] {
  const mediaDir = path.join(process.cwd(), "public/media");

  const seasons = fs.readdirSync(mediaDir);

  const events: EventData[] = [];

  seasons.forEach((season) => {
    const seasonPath = path.join(mediaDir, season);

    if (!fs.statSync(seasonPath).isDirectory()) return;

    const folders = fs
      .readdirSync(seasonPath)
      .filter((name) => name !== "thumbs"); // ignoruj folder thumbs

    folders.forEach((folder) => {
      const eventPath = path.join(seasonPath, folder);

      if (!fs.statSync(eventPath).isDirectory()) return;

      const slug = `${season}-${folder}`;

      const title = folder
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      events.push({
        slug,
        title,
        season,
        cover: `/media/${season}/${folder}/cover.jpg`,
      });
    });
  });

  return events.reverse();
}