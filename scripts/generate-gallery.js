const fs = require("fs");
const path = require("path");

const MEDIA_DIR = "public/media";
const OUTPUT = "src/data/gallery.ts";

const years = fs.readdirSync(MEDIA_DIR);

let events = [];

years.forEach((year) => {

  const yearPath = path.join(MEDIA_DIR, year);
  const folders = fs.readdirSync(yearPath);

  folders.forEach((event) => {

    const eventPath = path.join(yearPath, event);

    const files = fs.readdirSync(eventPath);

    const images = files
  .filter(
    (f) =>
      f.endsWith(".jpg") &&
      f !== "cover.jpg"
  )
  .map((f) => `/media/${year}/${event}/${f}`);

    events.push({
      slug: `${year}-${event}`,
      title: `${event.charAt(0).toUpperCase() + event.slice(1)} ${year}`,
      cover: `/media/${year}/${event}/cover.jpg`,
      images,
    });

  });

});

events.sort((a, b) => {
  const yearA = parseInt(a.slug.split("-")[0]);
  const yearB = parseInt(b.slug.split("-")[0]);
  return yearB - yearA;
});

const content =
`export const gallery = ${JSON.stringify(events, null, 2)};`;

fs.writeFileSync(OUTPUT, content);

console.log("✔ gallery generated");