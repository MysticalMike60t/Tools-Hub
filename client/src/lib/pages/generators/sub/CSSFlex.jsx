import React, { useState } from 'react';

const CSSFlex = () => {
  const [flexProperties, setFlexProperties] = useState({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlexProperties({ ...flexProperties, [name]: value });
  };

  const generateCSS = () => {
    const { flexDirection, justifyContent, alignItems } = flexProperties;
    return {
      display: 'flex',
      flexDirection: flexDirection,
      justifyContent: justifyContent,
      alignItems: alignItems,
    };
  };

  const flexItems = [1, 2, 3]; // Example flex items

  return (
    <div className='page css-flexbox'>
      <h1>CSS Flexbox Generator</h1>
      <form>
        <label>
          Flex Direction:
          <select name="flexDirection" value={flexProperties.flexDirection} onChange={handleChange}>
            <option value="row">Row</option>
            <option value="column">Column</option>
          </select>
        </label>

        <label>
          Justify Content:
          <select name="justifyContent" value={flexProperties.justifyContent} onChange={handleChange}>
            <option value="flex-start">Flex Start</option>
            <option value="center">Center</option>
            <option value="flex-end">Flex End</option>
          </select>
        </label>

        <label>
          Align Items:
          <select name="alignItems" value={flexProperties.alignItems} onChange={handleChange}>
            <option value="stretch">Stretch</option>
            <option value="flex-start">Flex Start</option>
            <option value="center">Center</option>
            <option value="flex-end">Flex End</option>
          </select>
        </label>
      </form>

      <div className="output">
        <h2>Generated CSS:</h2>
        <pre>{JSON.stringify(generateCSS(), null, 2)}</pre>
      </div>

      <div className="preview">
        <h2>Flexbox Preview</h2>
        <div className="flex-container" style={generateCSS()}>
          {flexItems.map((item, index) => (
            <div key={index} className="flex-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSSFlex;
