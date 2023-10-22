import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, About } from "./lib/pages";
import { Header } from "./lib/global/components";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
