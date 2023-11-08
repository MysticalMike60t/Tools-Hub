import React from "react";
import { defaultPageClassName } from "../../../global/config/index.config";
import { A } from "../../../global/modules";
import { resourceIcons } from "../../../data";

const Icons = () => {
  return (
    <div className={`${defaultPageClassName} resources sub`}>
      <h1>Icons</h1>
      <div className="wrapper content">
        {resourceIcons.map((data, key) => (
          <A href={data.link} key={key}>
            {data.text}
          </A>
        ))}
      </div>
    </div>
  );
};

export default Icons;
