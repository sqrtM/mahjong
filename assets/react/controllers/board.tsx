import React, { useEffect, useState } from 'react'
import '../../styles/board.module.css'
import PlayerHand from './PlayerHand'
import axios from 'axios'

/**
 * MAIN BOARD.
 * (this must be anon for twig to recognize it)
 * We will probably make this the parent element for the front,
 * from which all the hands and the player UI are all children.
 *
 * We should add the player hand to the bottom of this,
 * refactor the twig file to represent that this is just a board,
 * so we can have like a login screen and all that fun stuff, à la
 * tenhou or something like that.
 *
 * @todo
 * DONEDONEDONE 1.) force the playerhand component to be a child of this component.
 *
 * 2.) create "enemyhand" (weird name) components to represent the other players.
 *
 * (MOSTLY DONE!!) 3.) create an API which allows us to communicate with the game, being sent through
 * each of the components. perhaps also give them an API key, so ONLY that hand can
 * communicate with the game.
 *
 * 4.) Make all calls through the board component. Hands should not make calls.
 *
 *
 * @returns the game screen
 */

interface IHand {
  roomId: string
}

export default function (props: IHand): JSX.Element {

  const [loading, setLoading] = useState(true);
  const [eastHand, setEastHand] = useState([])
  const [northHand, setNorthHand] = useState([])
  const [westHand, setWestHand] = useState([])
  const [southHand, setSouthHand] = useState([])


  useEffect(() => {
    axios
    .post('http://127.0.0.1:8000/api/getHand', {roomId: props.roomId, playerPosition: "east_hand"})
    .then((res) => { 
      if (res.status === 200 && loading) {
        console.log(res.data); 
        setEastHand(res.data);
      }
    })
  }, []);

  useEffect(() => {
    axios
    .post('http://127.0.0.1:8000/api/getHand', {roomId: props.roomId, playerPosition: "north_hand"})
    .then((res) => { 
      if (res.status === 200 && loading) {
        console.log(res.data); 
        setNorthHand(res.data);
      }
    })
  }, []);

  useEffect(() => {
    axios
    .post('http://127.0.0.1:8000/api/getHand', {roomId: props.roomId, playerPosition: "west_hand"})
    .then((res) => { 
      if (res.status === 200 && loading) {
        console.log(res.data); 
        setWestHand(res.data);
      }
    })
  }, []);

  useEffect(() => {
    axios
    .post('http://127.0.0.1:8000/api/getHand', {roomId: props.roomId, playerPosition: "south_hand"})
    .then((res) => { 
      if (res.status === 200 && loading) {
        console.log(res.data); 
        setSouthHand(res.data);
      }
      setLoading(false)
    })
  }, []);

  return loading ? (<div>loading...</div>) : (
    <div id="gamescreen">
      <div className="board">
        <div id="north-player-section" className="board" style={{rotate: "180deg"}}>
          north <br />
          {props.roomId} <br />
          {northHand}
        </div>
        <div id="west-player-section" className="board" style={{rotate: "90deg"}}>
          west<br />
          {westHand}
        </div>
        <div id="south-player-section" className="board" >
          south<br />
          {southHand}
        </div>
        <div id="east-player-section" className="board" style={{rotate: "270deg"}}>
          east<br />
          {eastHand}
        </div>
      </div>
      {eastHand ? <PlayerHand hand={eastHand} /> : "fetching hand..."}
    </div>
  )
}
