import React, { useState } from "react";

const BinaryText = () => {
  const [binaryInput, setBinaryInput] = useState("");
  const [textOutput, setTextOutput] = useState("");

  const convertBinaryToText = () => {
    try {
      const binaryArray = binaryInput.split(" ");
      const text = binaryArray
        .map((binary) => String.fromCharCode(parseInt(binary, 2)))
        .join("");
      setTextOutput(text);
    } catch (error) {
      setTextOutput("Invalid binary input");
    }
  };
  return (
    <div className="page one binary-text">
      <h1>Binary to Text Converter</h1>
      <div className="wrapper">
        <label>Enter Binary:</label>
        <textarea
          type="text"
          value={binaryInput}
          onChange={(e) => setBinaryInput(e.target.value)}
        />
      </div>
      <div className="wrapper">
        <button onClick={convertBinaryToText}>Convert</button>
      </div>
      <div className="wrapper">
        <label>Text Output:</label>
        <div className="output">{textOutput}</div>
      </div>
    </div>
  );
};

export default BinaryText;
