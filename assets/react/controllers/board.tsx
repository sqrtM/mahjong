import React from "react";
import '../../styles/board.module.css';


// this needs to be anon for encore to use it.
export default function (): JSX.Element {
  return (
    <div className="board">
      <div id="north-player-section" className="board">
      NORTH PLAYER
      </div>
      <div id="west-player-section" className="board">
      WEST PLAYER
      </div>
      <div id="south-player-section" className="board">
      SOUTH PLAYER
      </div>
      <div id="east-player-section" className="board">
      EAST PLAYER
      </div>
    </div>
  );
}
