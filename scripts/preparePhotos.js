import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Manually define __dirname in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const photosDir = path.join(__dirname, '../public/images/Photos');
const outputFile = path.join(__dirname, '../src/photos.ts');

// Convert JPEGs to progressive JPEGs
const files = fs.readdirSync(photosDir);

await Promise.all(
  files.map(async (file) => {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      const filePath = path.join(photosDir, file);
      try {
        await sharp(filePath)
          .jpeg({ progressive: true })
          .toBuffer()
          .then((data) => fs.writeFileSync(filePath, data));
        console.log(`✓ Converted to progressive JPEG: ${file}`);
      } catch (err) {
        console.error(`✗ Failed to convert ${file}:`, err);
      }
    }
  }),
);

// Build export list
const photoFiles = files
  .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
  .map((file) => `/images/Photos/${file}`);

const content = `const photos = ${JSON.stringify(
  photoFiles,
  null,
  2,
)};\nexport default photos;\n`;

fs.writeFileSync(outputFile, content);

console.log('photos.ts generated with', photoFiles.length, 'photos');
