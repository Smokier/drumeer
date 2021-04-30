import React, { useState } from "react";
import { render } from "react-dom";
import Sound from "./Sound";
import ContextMenu from "./Cmenu";
import Pad from "./soundsquare"
const CustomMenu = () => (
  <div id="menuwrap">
  <ul className="menu">
    <li>Change sound</li>
    <li><Pad></Pad></li>
    <li>Properties</li>
  </ul>
  </div>
);

const App = () => {
  return(
    <div>
        <div id="drumachine">
          <Sound sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" word="kick"></Sound>
          <Sound sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" word="tom"></Sound>
          <Sound sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" word="snare1"></Sound>
          <Sound sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" word="snare2"></Sound>
          <Sound sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" word="conga"></Sound>
          <Sound sn="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" word="cowbell"></Sound>
          <Sound sn="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" word="chord1"></Sound>
          <Sound sn="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" word="chord2"></Sound>
          <Pad></Pad>
          {/*<Sound id="chord" sn="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" word="chord3"></Sound>*/}
          </div>
          <ContextMenu menu={<CustomMenu/>}>hola
          </ContextMenu>
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
