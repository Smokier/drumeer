import React, {useState, useEffect, useCallback} from 'react';
import {Motion, spring} from 'react-motion';

const useContextMenu = ()=>{ 
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  
  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      console.log(e.target.id);
      setSelectedId(e.target.id);
      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setShowMenu(true);
    },
    [setXPos, setYPos]
  );
  const handleClick = useCallback(() => {
      showMenu && setShowMenu(false);
    }, [showMenu]);
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
      document.addEventListener("contextmenu", handleContextMenu);
      return () => {
        document.addEventListener("click", handleClick);
        document.removeEventListener("contextmenu", handleContextMenu);
      };
    });
  
    return { xPos, yPos, showMenu, selectedId };
  };

  

const ContextMenu = () => {
    const { xPos, yPos, showMenu, selectedId } = useContextMenu();
    
    return (
      <Motion
        defaultStyle={{ opacity: 0 }}
        style={{ opacity: !showMenu ? spring(0) : spring(1) }}
      >
        {(interpolatedStyle) => (
          <>
            {showMenu ? (
              <div
                className="menu-container"
                style={{
                  position:'absolute',
                  top: yPos,
                  left: xPos,
                  opacity: interpolatedStyle.opacity,
                }}
              >
                <div id="menuwrap">
  <ul className="menu">
    <li>Change sound</li>
    <li>Delete sound</li>
    <li>Properties</li>
  </ul>
  </div>
              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </Motion>
    );
  };
  export default ContextMenu;