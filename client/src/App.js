import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import {
  Home,
  About,
  Generators,
  ThirdParty,
  Converters,
  Tools,
  Documentation,
} from "./lib/pages";
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
import BinaryText from "./lib/pages/converters/sub/BinaryText";

import "./lib/styles/scss/global/global.scss";
import Editors from "./lib/pages/tools/editors/Editors";
import { HTML } from "./lib/pages/tools/editors";
import SCSSCSS from "./lib/pages/converters/sub/SCSSCSS";

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
          <Route path="converters" element={<SubpageLayout />}>
            <Route index element={<Converters />} />
            <Route path="binary-text" element={<BinaryText />} />
            <Route path="sass-css" element={<SCSSCSS />} />
          </Route>
          <Route path="tools" element={<SubpageLayout />}>
            <Route index element={<Tools />} />
            <Route path="editors">
              <Route index element={<Editors />} />
              <Route path="html" element={<HTML />} />
            </Route>
          </Route>
          <Route path="documentation" element={<SubpageLayout />}>
            <Route index element={<Documentation />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
