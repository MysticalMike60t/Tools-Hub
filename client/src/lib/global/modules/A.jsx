import React from "react";

const A = ({ href, children }) => {
  return (
    <a className="nav-link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default A;
