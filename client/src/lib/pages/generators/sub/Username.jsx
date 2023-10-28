import React, { useState } from "react";
import words from "an-array-of-english-words";
import { defaultPageClassName } from "../../../global/config/index.config";

const Username = () => {
  const [username, setUsername] = useState("");

  const generateUsername = () => {
    const randomWord1 = words[Math.floor(Math.random() * words.length)];
    const randomWord2 = words[Math.floor(Math.random() * words.length)];
    setUsername(`${randomWord1}_${randomWord2}`);
  };

  return (
    <div className={`${defaultPageClassName} one username`}>
      <div>
        <h1>Generated Username:</h1>
        <input value={username || "Click the Button!"} readonly />
      </div>
      <div className="bar"></div>
      <button onClick={generateUsername}>Generate Username</button>
    </div>
  );
};

export default Username;
