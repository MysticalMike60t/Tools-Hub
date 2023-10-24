import React from "react";

const ThirdParty = () => {
  return (
    <div className="page third-party">
      <h1>3rd Party Tools</h1>
      <p className="text">
        <span className="section">
          <h3>Nirsoft</h3>
          <div className="links">
            <a
              href="https://api.cadenmf.com/downloads/tools/x64tools_10-24-2023.rar"
              download="x64tools_10-24-2023.rar"
            >
              Nirsoft Tools
            </a>
          </div>
        </span>
        <span className="section">
          <h3>Resource Hacker</h3>
          <div className="links">
            <a
              href="https://angusj.com/resourcehacker/reshacker_setup.exe"
              download="reshacker_setup.exe"
            >
              Resource Hacker
            </a>
          </div>
        </span>
        <span className="section">
          <h3>XN Resource Editor</h3>
          <span className="links">
            <a
              href="https://github.com/stefansundin/xn_resource_editor/releases/download/v3.0.0.1/xn_resourceeditor_setup.exe"
              download="xn_resourceeditor_setup.exe"
            >
              XN Resource Editor Installer
            </a>
            <a
              href="https://github.com/stefansundin/xn_resource_editor/releases/download/v3.0.0.1/XNResourceEditor.exe"
              download="XNResourceEditor.exe"
            >
              XN Resource Editor Portable
            </a>
          </span>
        </span>
      </p>
    </div>
  );
};

export default ThirdParty;
