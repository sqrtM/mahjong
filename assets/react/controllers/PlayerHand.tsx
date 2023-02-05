import React from "react";
import '../../styles/PlayerHand.module.css';
import { uprightTile } from '../../types/tileAndStickEnums';

interface IHand {

}

// this needs to be anon for encore to use it.
export default function (props: IHand): JSX.Element {

  return (
    <div id="hand">
      {uprightTile.eastTile}
      {uprightTile.fourOfBamboo}
    </div>
  );
}