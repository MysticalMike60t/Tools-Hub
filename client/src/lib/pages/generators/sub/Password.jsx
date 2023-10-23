import React, { useState } from 'react';

const Password = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [numPasswords, setNumPasswords] = useState(1);
  const [generatedPasswords, setGeneratedPasswords] = useState([]);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_-+=<>?';
    let validChars = lowercaseChars;

    if (includeUppercase) {
      validChars += uppercaseChars;
    }
    if (includeSpecialChars) {
      validChars += specialChars;
    }

    let passwords = [];
    for (let i = 0; i < numPasswords; i++) {
      let password = '';
      for (let j = 0; j < passwordLength; j++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
      }
      passwords.push(password);
    }
    setGeneratedPasswords(passwords);
  };

  return (
    <div className='page one'>
      <h2>Password Generator</h2>
      <div>
        <label>Password Length: </label>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <div>
        <label>Include Uppercase: </label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </div>
      <div>
        <label>Include Special Characters: </label>
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        />
      </div>
      <div>
        <label>Number of Passwords: </label>
        <input
          type="number"
          value={numPasswords}
          onChange={(e) => setNumPasswords(e.target.value)}
        />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <h3>Generated Passwords:</h3>
        <ul>
          {generatedPasswords.map((password, index) => (
            <li key={index}>{password}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Password;
