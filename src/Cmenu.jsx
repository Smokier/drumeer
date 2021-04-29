import React, {useState, useEffect, useCallback} from 'react';
import useContextMenu from "./useCmenu";
import {Motion, spring} from 'react-motion';
const ContextMenu = ({ menu }) => {
    const { xPos, yPos, showMenu } = useContextMenu();
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
                {menu}
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