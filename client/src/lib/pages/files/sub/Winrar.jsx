import React from "react";
import { defaultPageClassName } from "../../../global/config/index.config";

const Winrar = () => {
  return (
    <div className={`${defaultPageClassName} one documentation`}>
      <h1>WinRAR</h1>
      <div className="wrapper">
        <div className="item">
          <h2>
            Place file in WinRAR folder to bypass the popup asking for
            donations.
          </h2>
          <a className="nav-link" href="/files/winrar/rarreg.key" download>
            Rarreg.key
          </a>
        </div>
      </div>
    </div>
  );
};

export default Winrar;
