import React, { useState } from "react";
import { Link } from "@reach/router";
import Sound from "./Sound";
import ContextMenu from "./Cmenu";


const StartP = () => {
  return(
    <div>
<Link to={`/drumpad`}>
prueba del router click para ir al drumpad jasjas
</Link>
    </div>
  );
};
export default StartP;