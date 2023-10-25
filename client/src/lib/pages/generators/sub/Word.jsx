import React, { useState } from "react";
import words from "an-array-of-english-words";

const Word = () => {
  const [word, setWord] = useState("");
  const generateWord = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  };
  return (
    <div className="page one word">
      <div>
        <h1>Word:</h1>
        <input value={word || "Click the Button!"} readonly />
      </div>
      <div className="bar"></div>
      <button onClick={generateWord}>Generate Word</button>
    </div>
  );
};

export default Word;
