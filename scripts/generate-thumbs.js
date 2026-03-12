const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const MEDIA_ROOT = path.join(process.cwd(), "public", "media");

async function generateThumbs(dir) {

  const files = fs.readdirSync(dir);

  const thumbsDir = path.join(dir, "thumbs");

  if (!fs.existsSync(thumbsDir)) {
    fs.mkdirSync(thumbsDir);
  }

  for (const file of files) {

    const fullPath = path.join(dir, file);

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file !== "thumbs") {
        await generateThumbs(fullPath);
      }
      continue;
    }

    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) continue;
    if (file === "cover.jpg") continue;

    const outPath = path.join(thumbsDir, file);

    if (fs.existsSync(outPath)) continue;

    await sharp(fullPath, { limitInputPixels: false })
      .resize(400)
      .jpeg({ quality: 80 })
      .toFile(outPath);

    console.log("thumb created:", outPath);
  }
}

generateThumbs(MEDIA_ROOT);