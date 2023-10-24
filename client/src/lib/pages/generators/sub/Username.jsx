import React, { useState } from "react";

const Username = () => {
  const [username, setUsername] = useState("");

  const englishWords = [
    "apple",
    "banana",
    "cherry",
    "dog",
    "elephant",
    "fox",
    "grape",
    "honey",
    "ice",
    "jungle",
    "kiwi",
    "lemon",
    "mango",
    "noodle",
    "orange",
    "pear",
    "quartz",
    "raspberry",
    "strawberry",
    "tiger",
    "unicorn",
    "violet",
    "watermelon",
    "xylophone",
    "yellow",
    "zebra",
  ];

  const generateUsername = () => {
    const randomWord1 =
      englishWords[Math.floor(Math.random() * englishWords.length)];
    const randomWord2 =
      englishWords[Math.floor(Math.random() * englishWords.length)];
    setUsername(`${randomWord1}_${randomWord2}`);
  };

  return (
    <div className="page one username">
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
