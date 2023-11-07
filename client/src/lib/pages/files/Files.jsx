import React from "react";
import { defaultPageClassName } from "../../global/config/index.config";
import { Link } from "react-router-dom";

const Files = () => {
  return (
    <div className={`${defaultPageClassName} one documentation`}>
      <h1>Files</h1>
      <div className="wrapper">
        <Link className="nav-link" to="/files/winrar">
          WinRAR
        </Link>
      </div>
    </div>
  );
};

export default Files;
