import React from "react";
import {Howl, Howler} from 'howler';
const Sound = ({word, sn}) => {
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
        <input id="search" type="submit" value="Search" onClick={onClick} />
            { showPad ? 
        <button class="waba" id={word} onClick={start}>{word}
        </button>
        : null }
    </div>
);
};
export default Sound;
