import React from "react";
import { defaultPageClassName } from "../../../global/config/index.config";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className={`${defaultPageClassName} one documentation`}>
      <h1>Icons</h1>
      <div className="wrapper">
        <Link className="nav-link" to="/files/icons/svg">
          SVG
        </Link>
      </div>
    </div>
  );
};

export default Icons;
