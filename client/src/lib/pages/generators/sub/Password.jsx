import React, { useState } from "react";

const Password = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [numPasswords, setNumPasswords] = useState(1);
  const [generatedPasswords, setGeneratedPasswords] = useState([]);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_-+=<>?";
    const numbers = "1234567890";
    let validChars = lowercaseChars;

    if (includeUppercase) {
      validChars += uppercaseChars;
    }
    if (includeSpecialChars) {
      validChars += specialChars;
    }
    if (includeNumbers) {
      validChars += numbers;
    }

    let passwords = [];
    for (let i = 0; i < numPasswords; i++) {
      let password = "";
      for (let j = 0; j < passwordLength; j++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
      }
      passwords.push(password);
    }
    setGeneratedPasswords(passwords);
  };

  return (
    <div className="page one password">
      <h2>Password Generator</h2>
      <div className="input">
        <label>
          Password Length:{" "}
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </label>
      </div>
      <div className="input">
        <label>
          Include Uppercase:{" "}
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
        </label>
      </div>
      <div className="input">
        <label>
          Include Special Characters:{" "}
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
        </label>
      </div>
      <div className="input">
        <label>
          Include Numbers:{" "}
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
        </label>
      </div>
      <div className="input">
        <label>
          Number of Passwords:{" "}
          <input
            type="number"
            value={numPasswords}
            onChange={(e) => setNumPasswords(e.target.value)}
          />
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <h3>Generated Passwords:</h3>
        <ul>
          {generatedPasswords.map((password, index) => (
            <li key={index}>
              <input value={password} readOnly/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Password;
