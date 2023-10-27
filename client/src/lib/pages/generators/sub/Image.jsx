import React, { useState, useEffect } from 'react';
import { defaultPageClassName } from '../../../global/config/index.config';

const Image = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch('https://picsum.photos/400/300')
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageData(url);
      });
  }, []);

  const generateNewImage = () => {
    fetch('https://picsum.photos/400/300')
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageData(url);
      });
  };

  return (
    <div className={`${defaultPageClassName} one image`}>
      <h2>Random Image Generator</h2>
      <button onClick={generateNewImage}>Generate New Image</button>
      {imageData && <img src={imageData} alt="Random" />}
    </div>
  );
};

export default Image;
