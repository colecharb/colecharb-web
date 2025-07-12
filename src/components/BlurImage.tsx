import React, { HTMLProps, useState } from 'react';
import './BlurImage.css';

type Props = HTMLProps<HTMLImageElement>;

function BlurImage({ src, alt = '', className = '', ...props }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`blur-load ${loaded ? 'loaded' : ''} ${className}`}
      onLoad={() => setLoaded(true)}
      loading='lazy'
      {...props}
    />
  );
}

export default BlurImage;
