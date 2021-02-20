import React from "react";
const Sound = ({word}) => {
    let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")

    const start = () => {
      audio.play()
    }
return(
    <div id="item">
        <button id="waba" onClick={start}>{word}
        </button>
    </div>
);
};
export default Sound;
