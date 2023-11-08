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
          <div className="category" key={key}>
            <h2>{data.category}</h2>
            {data.sections.map((data, key) => (
              <div className="section" key={key}>
                <h3>{data.sectionName}</h3>
                <div className="items">
                  {data.links.map((data, key) => (
                    <A href={data.link} key={key}>
                      {data.text}
                    </A>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
