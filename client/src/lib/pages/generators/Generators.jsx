import React from "react";
import { Link } from "react-router-dom";
import { defaultPageClassName } from "../../global/config/index.config";

const Generators = () => {
  return (
    <div className={`${defaultPageClassName} generators`}>
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
      <Link className="nav-link" to="/generators/word">
        Word
      </Link>
      {/* <Link className="nav-link" to="/generators/image">
        Image
      </Link> */}
    </div>
  );
};

export default Generators;
