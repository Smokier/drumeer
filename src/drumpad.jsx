import React, { useState } from "react";
import Sound from "./Sound";
import ContextMenu from "./Cmenu";


const Drumpad = () => {
  return(
    <div>
       <div id="drumachine">
          <Sound className="un" sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" word="kick"></Sound>
          <Sound className="do" sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" word="tom"></Sound>
          <Sound className="tr" sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" word="snare1"></Sound>
          <Sound className="cu" sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" word="snare2"></Sound>
          <Sound className="ci" sn="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" word="conga"></Sound>
          <Sound className="se" sn="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" word="cowbell"></Sound>
          <Sound className="si" sn="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" word="chord1"></Sound>
          <Sound className="oc" sn="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" word="chord2"></Sound>
          <Sound className="nu" sn="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" word="chord3"></Sound>
          </div>
  <ContextMenu>hola</ContextMenu>
    </div>
  );
};
export default Drumpad;