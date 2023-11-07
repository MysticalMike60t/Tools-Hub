import React from "react";
import { defaultPageClassName } from "../../../global/config/index.config";
import { Link } from "react-router-dom";
import { cppIcon, csIcon, cssIcon, htmlIcon, jsIcon, reactIcon } from "../../../assets/images/logos";

const Languages = () => {
  return (
    <div className={`${defaultPageClassName} one documentation languages`}>
      <h1>Languages</h1>
      <div className="wrapper">
        <Link className="nav-link" to="/documentation/languages/html">
          <img src={htmlIcon} />
          <span>HTML</span>
        </Link>
        <Link className="nav-link" to="/documentation/languages/css">
          <img src={cssIcon} />
          <span>CSS</span>
        </Link>
        <Link className="nav-link" to="/documentation/languages/js">
          <img src={jsIcon} />
          <span>Javascript</span>
        </Link>
        <Link className="nav-link" to="/documentation/languages/cs">
          <img src={csIcon} />
          <span>C#</span>
        </Link>
        <Link className="nav-link" to="/documentation/languages/cpp">
          <img src={cppIcon} />
          <span>C++</span>
        </Link>
        <Link className="nav-link" to="/documentation/languages/react">
          <img src={reactIcon} />
          <span>React</span>
        </Link>
      </div>
    </div>
  );
};

export default Languages;
