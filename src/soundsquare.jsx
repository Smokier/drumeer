import React from "react";
import Sound from "./Sound";

const Pad = () => {
    const [showPad, setShowPad] = React.useState(true)
    const onClick = () => setShowPad(false)

    return(
        <div>
             <input type="submit" value="Search" onClick={onClick} />
            { showPad ? <Sound id="chord" sn="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" word="chord3" onClick={onClick}></Sound> : null }
        </div>
    )
}

export default Pad;