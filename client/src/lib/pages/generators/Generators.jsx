import React from "react";
import { Link } from "react-router-dom";

const Generators = () => {
  return (
    <div className="page generators">
      <Link className="nav-link" to="/generators/css-flexbox">
        CSS Flex Box
      </Link>
      <Link className="nav-link" to="/generators/password-policy">
        Password Policy
      </Link>
      <Link className="nav-link" to="/generators/password">
        Password
      </Link>
      <Link className="nav-link" to="/generators/username">
        Username
      </Link>
      <Link className="nav-link" to="/generators/color-palette">
        Color Palette
      </Link>
    </div>
  );
};

export default Generators;
