import React, { useState, useEffect } from 'react';

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
    <div className='page one image'>
      <h2>Random Image Generator</h2>
      <button onClick={generateNewImage}>Generate New Image</button>
      {imageData && <img src={imageData} alt="Random" />}
    </div>
  );
};

export default Image;
