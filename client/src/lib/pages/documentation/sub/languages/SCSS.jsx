import React from "react";
import { defaultPageClassName } from "../../../../global/config/index.config";
import { A } from "../../../../global/modules";

const SCSS = () => {
  return (
    <div
      className={`${defaultPageClassName} one documentation languages language`}
    >
      <h1>Sass</h1>
      <div className="wrapper content">
        <div className="third-party">
          <A href="https://www.w3schools.com/sass/">W3 Sass</A>
        </div>
      </div>
    </div>
  );
};

export default SCSS;
