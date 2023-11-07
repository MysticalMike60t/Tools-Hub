import React from "react";
import { defaultPageClassName } from "../../../../global/config/index.config";
import { A } from "../../../../global/modules";

const JS = () => {
  return (
    <div
      className={`${defaultPageClassName} one documentation languages language`}
    >
      <h1>Javascript</h1>
      <div className="wrapper content">
        <div className="third-party">
          <A href="https://www.w3schools.com/js/">W3 Javascript</A>
        </div>
      </div>
    </div>
  );
};

export default JS;
