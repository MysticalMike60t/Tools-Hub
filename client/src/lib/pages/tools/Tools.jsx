import React from "react";
import { defaultPageClassName } from "../../global/config/index.config";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div className={`${defaultPageClassName} two tools`}>
      <Link className="nav-link" to="/tools/editors">
        Editors
      </Link>
    </div>
  );
};

export default Tools;
