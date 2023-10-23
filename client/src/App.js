import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About } from "./lib/pages";
import { Layout, SubpageLayout } from "./lib/global/components";

import "./lib/styles/scss/global/global.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<>Page not found</>} />
          <Route path="generators" element={<SubpageLayout />}>
            <Route index element={<><div className="page"><h1>One</h1></div></>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
