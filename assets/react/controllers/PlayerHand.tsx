import React from 'react'
import '../../styles/PlayerHand.module.css'
import { getUprightTileString } from '../../types/tileAndStickEnums'
import { Tile } from '../../../build/main/types/tileType'
import { Suit, Value } from '../../types/tileType'
import axios from 'axios'

interface IHand {
  hand: Tile[]
  cardDrawn: any
}

export default function (props: IHand): JSX.Element {

  let playerHand = props.hand;
  let cardDrawn = props.cardDrawn;

  function handleClickTile(tile: Tile, index: number) {
    let newCard: Tile = {
      suit: Suit.Bamboo,
      value: Value.One,
      isRed: false,
      isHonor: false,
      isTerminal: false,
      isSimple: false,
    };
    axios.post("http://127.0.0.1:8000/api/discard", tile).then(res => newCard = res.data)
    playerHand[index] = cardDrawn
    cardDrawn = newCard;

  }

  const order = ['characters', 'pins', 'bamboo', 'winds', 'dragons']
  props.hand.sort(function (a, b) {
    return a.value - b.value
  })
  props.hand.sort(function (a, b) {
    return order.indexOf(a.suit) - order.indexOf(b.suit)
  })

  return (
    <div id="hand">
      {props.hand.map((i: Tile, index: number) => {
        return (
          <span 
            style={{ color: i.isRed ? 'red' : '' }}
            key={i.value + (Math.random() * 10)}
            onClick={() => handleClickTile(i, index)}
          
          >
            {getUprightTileString(i)}
          </span>
        )
      })}
      +
      <span
        style={{ color: props.cardDrawn.isRed ? 'red' : '' }}
        key={props.cardDrawn.value + (Math.random() * 10)}
      >
        {getUprightTileString(props.cardDrawn)}
      </span>
    </div>
  )
}
