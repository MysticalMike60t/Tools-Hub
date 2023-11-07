import React from "react";
import { defaultPageClassName } from "../../../../global/config/index.config";

const Svg = () => {
  return (
    <div className={`${defaultPageClassName} one documentation`}>
      <h1>Svg</h1>
      <div className="wrapper">
        <a
          className="nav-link"
          href="/files/icons/svg/c-sharp-scgrepo-com.svg"
          download
        >
          C# Icon
        </a>
        <a
          className="nav-link"
          href="/files/icons/svg/cpp-scgrepo-com.svg"
          download
        >
          C++ Icon
        </a>
        <a
          className="nav-link"
          href="/files/icons/svg/css-3-scgrepo-com.svg"
          download
        >
          CSS Icon
        </a>
        <a
          className="nav-link"
          href="/files/icons/svg/html-5-scgrepo-com.svg"
          download
        >
          HTML Icon
        </a>
        <a
          className="nav-link"
          href="/files/icons/svg/js-official-scgrepo-com.svg"
          download
        >
          Javascript Icon
        </a>
        <a
          className="nav-link"
          href="/files/icons/svg/react-scgrepo-com.svg"
          download
        >
          React Icon
        </a>
        <a
          className="nav-link"
          href="/files/icons/svg/scss-scgrepo-com.svg"
          download
        >
          Sass Icon
        </a>
      </div>
    </div>
  );
};

export default Svg;
