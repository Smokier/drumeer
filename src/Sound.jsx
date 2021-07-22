import React from "react";
import {Howl, Howler} from 'howler';
const Sound = ({className, word, sn}) => {
    var sound = new Howl({
        src: [sn]
      });

    const start = () => {
        sound.play();

    }
    const [showPad, setShowPad] = React.useState(true)
    const onClick = (e) => {
        setShowPad(false)
        var id = e.target.id;
    };
return(
    <div id="item">
        <button className={`waba ${className}`} id={word} onClick={start}>{word}
        </button>
    </div>
);
};
export default Sound;
