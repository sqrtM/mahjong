import React from 'react'
import '../../styles/PlayerHand.module.css'
import { getUprightTileStringFromId } from '../../types/tileAndStickEnums'

interface PHand {
  hand: any[]
}

export default function (props: PHand): JSX.Element {

  /*
  ////// THIS DOES NOT WORK YET.
  function handleClickTile(tile: Tile, index: number) {
    axios
      .post('http://127.0.0.1:8000/api/discard', tile)
      .then((res) => console.log(res))
    cardDrawn ?? playerHand[index]
  }


  useEffect(() => {
    axios
      .post('http://127.0.0.1:8000/api/getHand', {roomId: props.roomId, playerPosition: "e"})
      .then((res) => { 
        console.log(res.data); 
        playerHand = res.data;
      })
  }, [])
  */

  // sort by number
  props.hand.sort(function (a, b) {
    return a[1] - b[1];
  })
  // then sort by suit
  const order = ['c', 'p', 'b', 'w', 'd']
  props.hand.sort(function (a, b) {
    return order.indexOf(a[0].toLowerCase()) - order.indexOf(b[0].toLowerCase())
  })

  return (
    <div id="hand">
      {props.hand.map((i: string) => {
        return (
          <span
            style={{ color: i[0].toLowerCase() && i[0] != i[0].toUpperCase() ? '' : 'red' }}
            key={35 + Math.random() * 10}
            //onClick={() => handleClickTile(i, index)}
          >
            {getUprightTileStringFromId(i)}
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
