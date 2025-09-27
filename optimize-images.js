import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

fs.readdir(assetsDir, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (path.extname(file) === '.jpg') {
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(assetsDir, path.basename(file, '.jpg') + '.webp');
      sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`Optimized ${file} to ${path.basename(outputPath)}`))
        .catch(err => console.error(err));
    }
  });
});
