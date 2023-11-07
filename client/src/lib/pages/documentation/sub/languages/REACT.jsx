import React from "react";
import { defaultPageClassName } from "../../../../global/config/index.config";
import { A } from "../../../../global/modules";

const REACT = () => {
  return (
    <div
      className={`${defaultPageClassName} one documentation languages language`}
    >
      <h1>React</h1>
      <div className="wrapper content">
        <div className="third-party">
          <A href="https://www.w3schools.com/react/">W3 React</A>
        </div>
      </div>
    </div>
  );
};

export default REACT;
