import React from "react";
import { defaultPageClassName } from "../../global/config/index.config";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className={`${defaultPageClassName} resources`}>
      <h1>Resources</h1>
      <div className="wrapper content">
        <Link className="nav-link" to="/resources/icons">
            Icons
        </Link>
      </div>
    </div>
  );
};

export default Resources;
