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
      <div className="extra">
        <a
          href="https://github.com/MysticalMike60t/Tools-App/releases/latest"
          target="_blank"
          rel="noreferrer"
        >
          Newest Release
        </a>
      </div>
    </div>
  );
}

export default Home;
