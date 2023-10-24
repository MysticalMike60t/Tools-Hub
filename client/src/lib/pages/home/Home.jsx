import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to the Tools Hub</h1>
      <p>Find the right tool for the job!</p>
      <div className="bar"></div>
      <div className="tool-categories">
        <h2>Tool Categories</h2>
        <ul>
          <li>
            <Link to="/generators">Generators</Link>
          </li>
        </ul>
      </div>

      {/* <div className="featured-tools">
        <h2>Featured Tools</h2>
        <div className="tool">
          <img src="/tool1.jpg" alt="Tool 1" />
          <h3>Tool 1</h3>
          <p>Description of Tool 1</p>
        </div>

        <div className="tool">
          <img src="/tool2.jpg" alt="Tool 2" />
          <h3>Tool 2</h3>
          <p>Description of Tool 2</p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
