const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const mediaRoot = path.join(process.cwd(), "public/media");

const MAX_WIDTH = 2560;

async function processFolder(folderPath) {

  const files = fs.readdirSync(folderPath);

  for (const file of files) {

    const filePath = path.join(folderPath, file);

    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processFolder(filePath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const base = file.replace(ext, "");

    const webpPath = path.join(folderPath, `${base}.webp`);
    const avifPath = path.join(folderPath, `${base}.avif`);

    try {

      const image = sharp(filePath, {
        limitInputPixels: false
      });

      const metadata = await image.metadata();

      let pipeline = image;

      if (metadata.width > MAX_WIDTH) {

        pipeline = image.resize({
          width: MAX_WIDTH
        });

      }

      if (!fs.existsSync(webpPath)) {

        await pipeline
          .clone()
          .webp({ quality: 82 })
          .toFile(webpPath);

        console.log("webp created:", webpPath);

      }

      if (!fs.existsSync(avifPath)) {

        await pipeline
          .clone()
          .avif({ quality: 65 })
          .toFile(avifPath);

        console.log("avif created:", avifPath);

      }

    } catch (err) {

      console.log("skip:", filePath);
      console.log(err.message);

    }

  }

}

async function run() {

  const seasons = fs.readdirSync(mediaRoot);

  for (const season of seasons) {

    const seasonPath = path.join(mediaRoot, season);

    const events = fs.readdirSync(seasonPath);

    for (const event of events) {

      const eventPath = path.join(seasonPath, event);

      await processFolder(eventPath);

    }

  }

}

run();