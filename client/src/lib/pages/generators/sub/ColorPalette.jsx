import React, { useState } from 'react';

const ColorPalette = () => {
  const [colors, setColors] = useState(generateRandomPalette());

  function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

  function generateRandomPalette() {
    const palette = [];
    for (let i = 0; i < 5; i++) {
      palette.push(generateRandomColor());
    }
    return palette;
  }

  function regeneratePalette() {
    setColors(generateRandomPalette());
  }

  return (
    <div className='page one color-palette'>
      <h1>Color Palette Generator</h1>
      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <button onClick={regeneratePalette}>Generate New Palette</button>
    </div>
  );
};

export default ColorPalette;
