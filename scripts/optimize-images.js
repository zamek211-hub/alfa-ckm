const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const MEDIA_DIR = "public/media";

async function processFolder(folderPath) {

  const files = fs.readdirSync(folderPath);

  const thumbsDir = path.join(folderPath, "thumbs");
  const webDir = path.join(folderPath, "web");
  const originalDir = path.join(folderPath, "original");

  if (!fs.existsSync(thumbsDir)) fs.mkdirSync(thumbsDir);
  if (!fs.existsSync(webDir)) fs.mkdirSync(webDir);
  if (!fs.existsSync(originalDir)) fs.mkdirSync(originalDir);

  // znajdź istniejące zdjęcia galerii
  const existing = files
    .filter((f) => f.match(/^\d+\.jpg$/))
    .map((f) => parseInt(f))
    .sort((a, b) => a - b);

  let index = existing.length > 0 ? existing[existing.length - 1] + 1 : 1;

  for (const file of files) {

    if (
      file === "cover.jpg" ||
      file === "thumbs" ||
      file === "web" ||
      file === "original" ||
      file.match(/^\d+\.jpg$/)
    ) continue;

    const input = path.join(folderPath, file);

    const outputMain = path.join(folderPath, `${index}.jpg`);
    const outputThumb = path.join(thumbsDir, `${index}.jpg`);
    const outputWeb = path.join(webDir, `${index}.webp`);
    const outputOriginal = path.join(originalDir, file);

    await sharp(input)
      .resize(1600)
      .jpeg({ quality: 80 })
      .toFile(outputMain);

    await sharp(input)
      .resize(300)
      .jpeg({ quality: 70 })
      .toFile(outputThumb);

    await sharp(input)
      .resize(1600)
      .webp({ quality: 80 })
      .toFile(outputWeb);

    // przeniesienie oryginału
    fs.renameSync(input, outputOriginal);

    console.log(`✔ processed ${file} → ${index}.jpg`);

    index++;
  }
}

async function run() {

  const years = fs.readdirSync(MEDIA_DIR);

  for (const year of years) {

    const yearPath = path.join(MEDIA_DIR, year);
    const events = fs.readdirSync(yearPath);

    for (const event of events) {

      const eventPath = path.join(yearPath, event);

      if (fs.lstatSync(eventPath).isDirectory()) {

        console.log(`Processing ${eventPath}`);

        await processFolder(eventPath);

      }

    }

  }

}

run();