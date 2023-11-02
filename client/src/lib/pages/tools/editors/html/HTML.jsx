import React, { useState } from "react";

const HTML = () => {
  const [htmlContent, setHtmlContent] = useState(
    "<div>Hello, <strong>World</strong></div>"
  );

  const handleHTMLChange = (event) => {
    setHtmlContent(event.target.value);
  };

  return (
    <div className="page two html">
      <h1>Live HTML Viewer</h1>
      <div>
        <textarea
          rows="10"
          cols="50"
          value={htmlContent}
          onChange={handleHTMLChange}
        />
      </div>
      <div>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
};

export default HTML;
