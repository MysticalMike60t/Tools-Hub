import React, { useState } from "react";

const ThirdParty = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Sample data with preset categories and sections
  const thirdPartyData = [
    {
      category: "Windows Tools",
      sections: [
        {
          sectionName: "Nirsoft",
          tools: [
            {
              name: "Nirsoft Tools",
              link: "https://api.cadenmf.com/downloads/tools/x64tools_10-24-2023.rar",
            },
          ],
        },
        {
          sectionName: "Resource Hacker",
          tools: [
            {
              name: "Resource Hacker",
              link: "https://angusj.com/resourcehacker/reshacker_setup.exe",
            },
          ],
        },
        {
          sectionName: "XN Resource Editor",
          tools: [
            {
              name: "XN Resource Editor Installer",
              link: "https://github.com/stefansundin/xn_resource_editor/releases/download/v3.0.0.1/xn_resourceeditor_setup.exe",
            },
            {
              name: "XN Resource Editor Portable",
              link: "https://github.com/stefansundin/xn_resource_editor/releases/download/v3.0.0.1/XNResourceEditor.exe",
            },
          ],
        },
        {
          sectionName: "PS Explorer",
          tools: [
            {
              name: "PEX Setup",
              link: "http://www.heaventools.com/download/pexsetup.exe?r1=pexCom",
            },
          ],
        },
      ],
    },
    // Add more categories and sections as needed
  ];

  const filteredTools = thirdPartyData.map((category) => ({
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
        <span className="category">
          {filteredTools.map((category, categoryIndex) => (
            <span key={categoryIndex}>
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
        </span>
      </p>
    </div>
  );
};

export default ThirdParty;
