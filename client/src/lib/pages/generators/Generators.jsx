import React from "react";
import { Link } from "react-router-dom";

const Generators = () => {
  return (
    <div className="page generators">
      <Link className="nav-link" to="/generators/css-flex">CSS Flex Box</Link>
    </div>
  );
};

export default Generators;
