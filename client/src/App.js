import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Generators } from "./lib/pages";
import { Layout, SubpageLayout } from "./lib/global/components";

import "./lib/styles/scss/global/global.scss";
import {
  CSSFlex,
  PasswordPolicy,
  Password,
  Username,
  ColorPalette,
} from "./lib/pages/generators/sub";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<>Page not found!</>} />
          <Route path="generators" element={<SubpageLayout />}>
            <Route index element={<Generators />} />
            <Route path="css-flexbox" element={<CSSFlex />} />
            <Route path="password-policy" element={<PasswordPolicy />} />
            <Route path="password" element={<Password />} />
            <Route path="username" element={<Username />} />
            <Route path="color-palette" element={<ColorPalette />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
