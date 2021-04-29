import React from "react";
import {Howl, Howler} from 'howler';
const Sound = ({word, sn}) => {
    var sound = new Howl({
        src: [sn]
      });

    const start = () => {
        sound.play();

    }
return(
    <div id="item">
        <button id="waba" onClick={start}>{word}
        </button>
    </div>
);
};
export default Sound;
