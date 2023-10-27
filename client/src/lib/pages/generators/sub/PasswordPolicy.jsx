import React, { useState } from "react";
import { defaultPageClassName } from "../../../global/config/index.config";

const PasswordPolicy = () => {
  const [policy, setPolicy] = useState({
    length: 8,
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialChars: true,
    expirationDays: 90,
  });

  const handlePolicyChange = (event) => {
    const { name, type, value, checked } = event.target;
    setPolicy((prevPolicy) => ({
      ...prevPolicy,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className={`${defaultPageClassName} one password-policy`}>
      <h1>Password Policy Generator</h1>
      <div className="input">
        <label>
          Password Length:
          <input
            type="number"
            name="length"
            value={policy.length}
            onChange={handlePolicyChange}
          />
        </label>
      </div>
      <div className="input">
        <label>
          Include Uppercase Letters:
          <input
            type="checkbox"
            name="uppercase"
            checked={policy.uppercase}
            onChange={handlePolicyChange}
          />
        </label>
      </div>
      <div className="input">
        <label>
          Include Lowercase Letters:
          <input
            type="checkbox"
            name="lowercase"
            checked={policy.lowercase}
            onChange={handlePolicyChange}
          />
        </label>
      </div>
      <div className="input">
        <label>
          Include Numbers:
          <input
            type="checkbox"
            name="numbers"
            checked={policy.numbers}
            onChange={handlePolicyChange}
          />
        </label>
      </div>
      <div className="input">
        <label>
          Include Special Characters:
          <input
            type="checkbox"
            name="specialChars"
            checked={policy.specialChars}
            onChange={handlePolicyChange}
          />
        </label>
      </div>
      <div className="input">
        <label>
          Password Expiration (Days):
          <input
            type="number"
            name="expirationDays"
            value={policy.expirationDays}
            onChange={handlePolicyChange}
          />
        </label>
      </div>
      <div className="output">
        <h2>Generated Password Policy:</h2>
        <pre>{JSON.stringify(policy, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PasswordPolicy;
