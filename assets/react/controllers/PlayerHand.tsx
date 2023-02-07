import React from 'react'
import '../../styles/PlayerHand.module.css'
import { getUprightTileStringFromId } from '../../types/tileAndStickEnums'
import { Tile } from '../../types/tileType'
import axios from 'axios'

interface IHand {
  hand: Tile[]
  cardDrawn: Tile | null
}

export default function (props: IHand): JSX.Element {
  let playerHand = props.hand
  let cardDrawn = props.cardDrawn

  ////// THIS DOES NOT WORK YET.
  function handleClickTile(tile: Tile, index: number) {
    axios
      .post('http://127.0.0.1:8000/api/discard', tile)
      .then((res) => console.log(res))
    cardDrawn ?? playerHand[index]
  }

  const order = ['c', 'p', 'b', 'w', 'd']
  playerHand.sort(function (a, b) {
    return a.value - b.value
  })
  playerHand.sort(function (a, b) {
    return order.indexOf(a.suit) - order.indexOf(b.suit)
  })

  return (
    <div id="hand">
      {playerHand.map((i: Tile, index: number) => {
        return (
          <span
            style={{ color: i.isRed ? 'red' : '' }}
            key={35 + Math.random() * 10}
            onClick={() => handleClickTile(i, index)}
          >
            {getUprightTileStringFromId(i.tileId)}
          </span>
        )
      })}
      +
      <span
        //style={{ color: props.cardDrawn.isRed ? 'red' : '' }}
        key={20 + Math.random() * 10}
      >
        {/*getUprightTileStringFromId(props.cardDrawn.tileId)*/}
      </span>
    </div>
  )
}
