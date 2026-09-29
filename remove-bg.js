const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function removeBlackBackground(inputPath, outputPath, threshold = 25) {
  console.log(`Processing: ${inputPath}`);
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Extract raw RGBA channels
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels; // 4 (RGBA)
  const isBg = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);
  const queue = [];

  function getIdx(x, y) {
    return (y * width + x) * channels;
  }

  function isNearBlack(x, y) {
    const idx = getIdx(x, y);
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Max brightness among RGB
    return Math.max(r, g, b) <= threshold;
  }

  // Seed BFS from all borders
  for (let x = 0; x < width; x++) {
    // Top border
    if (isNearBlack(x, 0)) {
      const idx = 0 * width + x;
      if (!visited[idx]) {
        visited[idx] = 1;
        isBg[idx] = 1;
        queue.push([x, 0]);
      }
    }
    // Bottom border
    if (isNearBlack(x, height - 1)) {
      const idx = (height - 1) * width + x;
      if (!visited[idx]) {
        visited[idx] = 1;
        isBg[idx] = 1;
        queue.push([x, height - 1]);
      }
    }
  }

  for (let y = 0; y < height; y++) {
    // Left border
    if (isNearBlack(0, y)) {
      const idx = y * width + 0;
      if (!visited[idx]) {
        visited[idx] = 1;
        isBg[idx] = 1;
        queue.push([0, y]);
      }
    }
    // Right border
    if (isNearBlack(width - 1, y)) {
      const idx = y * width + (width - 1);
      if (!visited[idx]) {
        visited[idx] = 1;
        isBg[idx] = 1;
        queue.push([width - 1, y]);
      }
    }
  }

  // Run BFS
  let head = 0;
  const dirs = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    for (const [dx, dy] of dirs) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx]) {
          visited[nIdx] = 1;
          if (isNearBlack(nx, ny)) {
            isBg[nIdx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Apply transparency to background
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixelIdx = y * width + x;
      const rawIdx = pixelIdx * channels;
      if (isBg[pixelIdx]) {
        data[rawIdx + 3] = 0; // Alpha = 0 (Transparent)
      } else {
        // Check if neighboring a background pixel for soft edge anti-aliasing
        const r = data[rawIdx];
        const g = data[rawIdx + 1];
        const b = data[rawIdx + 2];
        const maxVal = Math.max(r, g, b);
        if (maxVal <= threshold + 25) {
          // Slight feathering on near-black borders
          const alphaFactor = (maxVal - threshold) / 25;
          data[rawIdx + 3] = Math.max(0, Math.min(255, Math.floor(alphaFactor * 255)));
        }
      }
    }
  }

  // Save back as clean PNG with transparent alpha
  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .png({ quality: 100 })
    .toFile(outputPath);

  console.log(`Saved transparent image to: ${outputPath}`);
}

async function run() {
  const imagesDir = path.join(__dirname, 'public', 'images');
  const heroStudent = path.join(imagesDir, 'hero-student.png');
  const creatorFemale = path.join(imagesDir, 'creator-female.png');

  await removeBlackBackground(heroStudent, path.join(imagesDir, 'hero-student-transparent.png'), 30);
  await removeBlackBackground(creatorFemale, path.join(imagesDir, 'creator-female-transparent.png'), 30);

  // Overwrite original with transparent versions
  fs.copyFileSync(path.join(imagesDir, 'hero-student-transparent.png'), heroStudent);
  fs.copyFileSync(path.join(imagesDir, 'creator-female-transparent.png'), creatorFemale);

  console.log('Background removal complete!');
}

run().catch(console.error);
