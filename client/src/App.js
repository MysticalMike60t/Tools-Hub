import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About } from "./lib/pages";
import { Header } from "./lib/global/components";

import "./lib/styles/scss/global/global.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<>Page not found</>} />
      </Routes>
    </Router>
  );
}

export default App;
