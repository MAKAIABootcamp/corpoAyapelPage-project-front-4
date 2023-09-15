const { convertToWebP } = require('../image-to-webp/function');

export default function (config) {
  return {
    transformers: {
      webp: async (originalFile) => {
        const buffer = await originalFile.buffer();
        const webpBuffer = await convertToWebP(buffer);
        return {
          format: 'webp',
          content: webpBuffer,
        };
      },
    },
  };
}