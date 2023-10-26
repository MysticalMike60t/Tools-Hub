import React, { useState } from "react";
import { defaultPageClassName } from "../../../global/config/index.config";

const ColorPalette = () => {
  const [colors, setColors] = useState(generateRandomPalette());

  function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
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

  function copyToClipboard(hexCode) {
    const el = document.createElement("textarea");
    el.value = hexCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  function getContrastColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness >= 128 ? "#000" : "#fff";
  }

  return (
    <div className={`${defaultPageClassName} one color-palette`}>
      <h1>Color Palette Generator</h1>
      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color, color: getContrastColor(color) }}
            onClick={() => copyToClipboard(color)}
          >
            {color}
          </div>
        ))}
      </div>
      <button onClick={regeneratePalette}>Generate New Palette</button>
    </div>
  );
};

export default ColorPalette;
