import React from "react";
import { defaultPageClassName } from "../../../../global/config/index.config";
import { Section } from "./modules";
import Tags from "./html/Tags";

const HTML = () => {
  return (
    <div
      className={`${defaultPageClassName} one documentation languages language`}
    >
      <h1>HTML</h1>
      <div className="wrapper content">
        <div className="doc">
          <Section>
            <Tags />
          </Section>
        </div>
        <div className="third-party">
          <a className="nav-link" href="https://www.w3schools.com/html/">
            W3 HTML
          </a>
        </div>
      </div>
    </div>
  );
};

export default HTML;
