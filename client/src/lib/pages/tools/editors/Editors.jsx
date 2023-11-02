import React from "react";
import { Link } from "react-router-dom";

const Editors = () => {
  return (
    <div className="page two editors">
      <Link className="nav-link" to="/tools/editors/html">
        HTML
      </Link>
    </div>
  );
};

export default Editors;
