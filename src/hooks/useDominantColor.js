import { useState, useEffect } from 'react';

function useDominantColor(imageUrl) {
  const [dominantColor, setDominantColor] = useState(null);
  const [darkerColor, setDarkerColor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchDominantColor() {
      try {
        const colors = await extractDominantColors(imageUrl);
        if (isMounted) {
          setDominantColor(colors.dominantColor);
          setDarkerColor(colors.darkerColor);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    }

    fetchDominantColor();

    return () => {
      isMounted = false;
    };
  }, [imageUrl]);

  return { dominantColor, darkerColor, loading, error };
}

async function extractDominantColors(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const pixels = imageData.data;

      const colorMap = {};

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];

        // Excluir píxeles transparentes con bajo nivel de alfa (transparencia)
        if (a >= 125) {
          const color = `rgba(${r},${g},${b},${a})`;
          if (!colorMap[color]) {
            colorMap[color] = 0;
          }
          colorMap[color]++;
        }
      }

      const colors = Object.keys(colorMap).sort((a, b) => colorMap[b] - colorMap[a]);

      let dominantColor = null;
      let darkerColor = null;

      if (colors.length > 0) {
        dominantColor = colors[0];
        darkerColor = getDarkerColor(dominantColor);
      }

      resolve({ dominantColor: rgbToHex(dominantColor), darkerColor: rgbToHex(darkerColor) });
    };

    img.onerror = function(error) {
      reject(error);
    };

    img.src = imageUrl;
  });
}

function getDarkerColor(color) {
  const rgb = color.match(/\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)/);
  if (!rgb) return null;

  const r = parseInt(rgb[1]);
  const g = parseInt(rgb[2]);
  const b = parseInt(rgb[3]);

  const darkerRed = Math.max(0, r - 20);
  const darkerGreen = Math.max(0, g - 20);
  const darkerBlue = Math.max(0, b - 20);

  return `rgb(${darkerRed},${darkerGreen},${darkerBlue})`;
}

function rgbToHex(rgb) {
  const rgbaRegex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)/;
  const match = rgb.match(rgbaRegex);
  if (!match) return null;

  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export default useDominantColor;




/* import { useState, useEffect } from 'react';

function useDominantColor(imageUrl) {
  const [dominantColor, setDominantColor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchDominantColor() {
      try {
        const color = await extractDominantColor(imageUrl);
        if (isMounted) {
          setDominantColor(color);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    }

    fetchDominantColor();

    return () => {
      isMounted = false;
    };
  }, [imageUrl]);

  return { dominantColor, loading, error };
}

async function extractDominantColor(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const pixels = imageData.data;

      const colorMap = {};

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const alpha = pixels[i + 3];

        // Excluir píxeles transparentes
        if (alpha !== 0) {
          const color = `rgb(${r},${g},${b})`;
          if (!colorMap[color]) {
            colorMap[color] = 0;
          }
          colorMap[color]++;
        }
      }

      const colors = Object.keys(colorMap).sort((a, b) => colorMap[b] - colorMap[a]);
      const dominantColor = colors[0] || null;

      resolve(dominantColor);
    };

    img.onerror = function(error) {
      reject(error);
    };

    img.src = imageUrl;
  });
}

export default useDominantColor;
 */