import React from "react";
import { Link } from "react-router-dom";
import { defaultPageClassName } from "../../global/config/index.config";

const Converters = () => {
  return (
    <div className={`${defaultPageClassName} converters`}>
      <Link className="nav-link" to="/converters/binary-text">
        Binary to Text
      </Link>
      <Link className="nav-link" to="/converters/sass-css">
        SASS to CSS
      </Link>
    </div>
  );
};

export default Converters;
