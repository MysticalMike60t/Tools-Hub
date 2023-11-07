import React from "react";
import { defaultPageClassName } from "../../global/config/index.config";
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div className={`${defaultPageClassName} one documentation`}>
      <h1>Documentation</h1>
      <div className="wrapper">
        <Link className="nav-link" to="/documentation/languages">Languages</Link>
      </div>
    </div>
  );
};

export default Documentation;
