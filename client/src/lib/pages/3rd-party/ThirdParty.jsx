import React from "react";

const ThirdParty = () => {
  const downloadUrl =
    "https://api.cadenmf.com/downloads/tools/x64tools_10-24-2023.rar";
  const fileName = "x64tools_10-24-2023.rar";

  return (
    <div className="page third-party">
      <h1>3rd Party Tools</h1>
      <p className="text">
        <a href={downloadUrl} download={fileName}>
          Download Nirsoft Tools
        </a>
      </p>
    </div>
  );
};

export default ThirdParty;
