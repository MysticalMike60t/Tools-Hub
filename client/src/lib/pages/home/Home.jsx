import React from "react";
import { Link } from "react-router-dom";
import {
  defaultPageClassName,
  homeSlogan,
  homeTitle,
  newestReleaseLink,
} from "../../global/config/index.config";
import { A_DEFAULT } from "../../global/modules";

function Home() {
  return (
    <div className={defaultPageClassName}>
      <h1>{homeTitle}</h1>
      <p>{homeSlogan}</p>
      <div className="bar"></div>
      <div className="tool-categories">
        <h2>Tool Categories</h2>
        <ul>
          <li>
            <Link to="/generators">Generators</Link>
          </li>
          <li>
            <Link to="/converters">Converters</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/documentation">Documentation</Link>
          </li>
          <li>
            <Link to="/files">Files</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </div>
      <div className="extra">
        <A_DEFAULT href={newestReleaseLink} target="_blank" rel="noreferrer">
          Newest Release
        </A_DEFAULT>
      </div>
    </div>
  );
}

export default Home;
