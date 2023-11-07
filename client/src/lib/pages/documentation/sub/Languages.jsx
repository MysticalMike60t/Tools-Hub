import React from "react";
import { defaultPageClassName } from "../../../global/config/index.config";
import {
  cppIcon,
  csIcon,
  cssIcon,
  htmlIcon,
  jsIcon,
  reactIcon,
} from "../../../assets/images/logos";
import LangLink from "./modules/LangLink";

const Languages = () => {
  return (
    <div className={`${defaultPageClassName} one documentation languages`}>
      <h1>Languages</h1>
      <div className="wrapper">
        <LangLink
          link="/documentation/languages/html"
          img={htmlIcon}
          text="HTML"
        />
        <LangLink
          link="/documentation/languages/css"
          img={cssIcon}
          text="CSS"
        />
        <LangLink
          link="/documentation/languages/js"
          img={jsIcon}
          text="Javascript"
        />
        <LangLink link="/documentation/languages/cs" img={csIcon} text="C#" />
        <LangLink
          link="/documentation/languages/cpp"
          img={cppIcon}
          text="C++"
        />
        <LangLink
          link="/documentation/languages/react"
          img={reactIcon}
          text="React"
        />
      </div>
    </div>
  );
};

export default Languages;
