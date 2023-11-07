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
  Files,
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
import { Languages } from "./lib/pages/documentation/sub";
import {
  CPP,
  CS,
  CSS,
  HTML,
  JS,
  REACT,
  SCSS,
} from "./lib/pages/documentation/sub/languages/";
import BinaryText from "./lib/pages/converters/sub/BinaryText";

import "./lib/styles/scss/global/global.scss";
import Editors from "./lib/pages/tools/editors/Editors";
import { HTMLEditor } from "./lib/pages/tools/editors";
import SCSSCSS from "./lib/pages/converters/sub/SCSSCSS";
import Winrar from "./lib/pages/files/sub/Winrar";

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
              <Route path="html" element={<HTMLEditor />} />
            </Route>
          </Route>
          <Route path="documentation" element={<SubpageLayout />}>
            <Route index element={<Documentation />} />
            <Route path="languages">
              <Route index element={<Languages />} />
              <Route path="html">
                <Route index element={<HTML />} />
              </Route>
              <Route path="css">
                <Route index element={<CSS />} />
              </Route>
              <Route path="js">
                <Route index element={<JS />} />
              </Route>
              <Route path="cs">
                <Route index element={<CS />} />
              </Route>
              <Route path="cpp">
                <Route index element={<CPP />} />
              </Route>
              <Route path="scss">
                <Route index element={<SCSS />} />
              </Route>
              <Route path="react">
                <Route index element={<REACT />} />
              </Route>
            </Route>
          </Route>
          <Route path="files" element={<SubpageLayout />}>
            <Route index element={<Files />} />
            <Route path="winrar" element={<Winrar />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
