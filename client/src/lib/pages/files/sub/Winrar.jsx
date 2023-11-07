import React from "react";
import { defaultPageClassName } from "../../../global/config/index.config";
import { Link } from "react-router-dom";

const Winrar = () => {
  return (
    <div className={`${defaultPageClassName} one documentation`}>
      <h1>WinRAR</h1>
      <div className="wrapper">
        <div className="item">
            <h2>Place file in WinRAR folder to bypass the popup asking for donations.</h2>
            <Link className="nav-link" to="/files/winrar/rarreg.key">
                Rarreg.key
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Winrar;
