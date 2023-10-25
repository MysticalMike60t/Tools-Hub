import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Home, About, Generators, ThirdParty } from "./lib/pages";
import { Layout, SubpageLayout } from "./lib/global/components";
import {
  CSSFlex,
  PasswordPolicy,
  Password,
  Username,
  ColorPalette,
  Word,
  Image,
} from "./lib/pages/generators/sub";

import "./lib/styles/scss/global/global.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="3rd-party" element={<ThirdParty />} />
          <Route path="*" element={<>Page not found!</>} />
          <Route path="generators" element={<SubpageLayout />}>
            <Route index element={<Generators />} />
            <Route path="css-flexbox" element={<CSSFlex />} />
            <Route path="password-policy" element={<PasswordPolicy />} />
            <Route path="password" element={<Password />} />
            <Route path="username" element={<Username />} />
            <Route path="color-palette" element={<ColorPalette />} />
            <Route path="word" element={<Word />} />
            <Route path="image" element={<Image />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
