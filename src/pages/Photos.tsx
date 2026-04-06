import { useEffect, useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import photos from '../photos';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Shuffle once at module load (persists across tab switches, resets on hard refresh)
const shuffledPhotos = shuffle(photos);

interface ImageDimensions {
  src: string;
  width: number;
  height: number;
}

let cachedDimensions: ImageDimensions[] | null = null;

function useImageDimensions(srcs: string[]) {
  const [dimensions, setDimensions] = useState<ImageDimensions[]>(cachedDimensions ?? []);

  useEffect(() => {
    if (cachedDimensions) return;
    let cancelled = false;
    Promise.all(
      srcs.map(
        (src) =>
          new Promise<ImageDimensions>((resolve) => {
            const img = new Image();
            img.onload = () =>
              resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
            img.onerror = () => resolve({ src, width: 1, height: 1 });
            img.src = src;
          }),
      ),
    ).then((dims) => {
      if (!cancelled) {
        cachedDimensions = dims;
        setDimensions(dims);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [srcs]);

  return dimensions;
}

function useColumnCount(breakpoints: Record<number, number>, defaultCols: number) {
  const getCount = useCallback(() => {
    const width = window.innerWidth;
    const sorted = Object.keys(breakpoints)
      .map(Number)
      .sort((a, b) => a - b);
    for (const bp of sorted) {
      if (width <= bp) return breakpoints[bp];
    }
    return defaultCols;
  }, [breakpoints, defaultCols]);

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const onResize = () => setCount(getCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getCount]);

  return count;
}

interface PhotoItem {
  src: string;
  originalIndex: number;
  width: number;
  height: number;
}

function distributePhotos(
  dimensions: ImageDimensions[],
  numCols: number,
): PhotoItem[][] {
  const columns: PhotoItem[][] = Array.from(
    { length: numCols },
    () => [],
  );
  const heights = new Array(numCols).fill(0);

  dimensions.forEach((dim, i) => {
    const aspectRatio = dim.height / dim.width;
    // Find shortest column
    let shortest = 0;
    for (let c = 1; c < numCols; c++) {
      if (heights[c] < heights[shortest]) shortest = c;
    }
    columns[shortest].push({ src: dim.src, originalIndex: i, width: dim.width, height: dim.height });
    heights[shortest] += aspectRatio;
  });

  return columns;
}

export default function PhotosPage() {
  const [index, setIndex] = useState(-1);
  const dimensions = useImageDimensions(shuffledPhotos);
  const numCols = useColumnCount({ 800: 2 }, 3);

  const columns = dimensions.length > 0 ? distributePhotos(dimensions, numCols) : [];

  return (
    <>
      <div className="my-masonry-grid">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="my-masonry-grid_column">
            {col.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                style={{
                  width: '100%',
                  aspectRatio: `${photo.width} / ${photo.height}`,
                  display: 'block',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                  objectFit: 'cover',
                }}
                onClick={() => setIndex(photo.originalIndex)}
              />
            ))}
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={shuffledPhotos.map((src) => ({ src }))}
        index={index}
        plugins={[Zoom]}
        on={{
          view: ({ index: newIndex }) => setIndex(newIndex),
        }}
        animation={{ navigation: 0 }}
        render={{
          buttonZoom: () => null,
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
}
