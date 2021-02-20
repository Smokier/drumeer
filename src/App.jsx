import React, { useState } from "react";
import { render } from "react-dom";
import Sound from "./Sound";
const App = () => {
  return(
        <div id="drumachine">
          <Sound word="kick"></Sound>
          <Sound word="tom"></Sound>
          <Sound word="snare1"></Sound>
          <Sound word="snare2"></Sound>
          <Sound word="conga"></Sound>
          <Sound word="cowbell"></Sound>
          <Sound word="crash"></Sound>
          <Sound word="ride"></Sound>
          <Sound word="hat"></Sound>

        </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
