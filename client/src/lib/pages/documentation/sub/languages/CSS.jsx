import React from "react";
import { defaultPageClassName } from "../../../../global/config/index.config";
import { A } from "../../../../global/modules";

const CSS = () => {
  return (
    <div
      className={`${defaultPageClassName} one documentation languages language`}
    >
      <h1>CSS</h1>
      <div className="wrapper content">
        <div className="third-party">
          <A href="https://www.w3schools.com/css/">W3 CSS</A>
        </div>
      </div>
    </div>
  );
};

export default CSS;
