import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

// Manually define __dirname in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const photosDir = path.join(__dirname, '../public/images/Photos');
const outputFile = path.join(__dirname, '../src/photos.ts');

const files = fs
  .readdirSync(photosDir)
  .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
  .map((file) => `/images/Photos/${file}`);

const content = `const photos = ${JSON.stringify(
  files,
  null,
  2,
)};\nexport default photos;\n`;

fs.writeFileSync(outputFile, content);

console.log('photos.js generated with', files.length, 'photos');
