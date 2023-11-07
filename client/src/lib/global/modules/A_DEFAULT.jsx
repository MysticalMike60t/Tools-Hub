import React from "react";

const A_DEFAULT = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default A_DEFAULT;
