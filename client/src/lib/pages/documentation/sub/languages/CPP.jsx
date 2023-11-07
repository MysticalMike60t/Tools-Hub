import React from "react";
import { defaultPageClassName } from "../../../../global/config/index.config";
import { A } from "../../../../global/modules";

const CPP = () => {
  return (
    <div
      className={`${defaultPageClassName} one documentation languages language`}
    >
      <h1>C++</h1>
      <div className="wrapper content">
        <div className="third-party">
          <A href="https://www.w3schools.com/cpp/">W3 C++</A>
        </div>
      </div>
    </div>
  );
};

export default CPP;
