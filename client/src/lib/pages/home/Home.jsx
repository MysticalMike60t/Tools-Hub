import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Your Tools App</h1>
      <p>Find the right tool for the job!</p>

      <div className="tool-categories">
        <h2>Tool Categories</h2>
        <ul>
          <li>
            <Link to="/category1">Category 1</Link>
          </li>
          <li>
            <Link to="/category2">Category 2</Link>
          </li>
          <li>
            <Link to="/category3">Category 3</Link>
          </li>
        </ul>
      </div>

      <div className="featured-tools">
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
      </div>
    </div>
  );
}

export default Home;
