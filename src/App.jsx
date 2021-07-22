import React, { useState } from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
import Drumpad from "./drumpad";
import StartP from "./startpage";


const App = () => {
  return(
    <div>
<Router>
  <StartP path="/" />
  <Drumpad path="/drumpad" />
</Router>;
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
