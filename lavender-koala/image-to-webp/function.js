
const sharp = require('sharp');
async function convertToWebP(buffer) {
  return sharp(buffer)
    .webp()
    .toBuffer();
}

module.exports = { convertToWebP };