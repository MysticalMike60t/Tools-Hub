import React from "react";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div className="page two tools">
      <Link className="nav-link" to="/tools/editors">
        Editors
      </Link>
    </div>
  );
};

export default Tools;
