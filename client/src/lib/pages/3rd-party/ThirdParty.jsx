import React, { useState } from "react";
import { thirdPartyTools } from "../../data";

const ThirdParty = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTools = thirdPartyTools.map((category) => ({
    ...category,
    sections: category.sections.filter((section) =>
      section.tools.some((tool) =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ),
  }));

  return (
    <div className="page third-party">
      <h1>3rd Party Tools</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <p className="text">
        {filteredTools.map((category, categoryIndex) => (
          <span className="category" key={categoryIndex}>
            <h2>{category.category}</h2>
            {category.sections.map((section, sectionIndex) => (
              <span className="section" key={sectionIndex}>
                <h3>{section.sectionName}</h3>
                <div className="links">
                  {section.tools.map((tool, toolIndex) => (
                    <a key={toolIndex} href={tool.link} download={tool.name}>
                      {tool.name}
                    </a>
                  ))}
                </div>
              </span>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ThirdParty;
