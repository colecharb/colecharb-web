import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import photos from '../photos';
import BlurImage from '../components/BlurImage';

export default function PhotosPage() {
  const [index, setIndex] = useState(-1);

  const [shuffledPhotos, setShuffledPhotos] = useState<string[]>([]);

  const shufflePhotos = () =>
    setShuffledPhotos(photos.sort(() => Math.random() - 0.5));

  useEffect(() => shufflePhotos(), []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {shuffledPhotos.map((photo, i) => (
          <BlurImage
            key={photo}
            src={photo}
            style={{
              width: '100%',
              display: 'block',
              borderRadius: '8px',
              marginBottom: '16px',
              cursor: 'pointer',
              objectFit: 'cover',
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </Masonry>

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
