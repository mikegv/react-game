import './App.css';
// import styled from 'styled-components';
import { useState } from 'react';
import Board from './components/board/Board';
import Modal from './components/modal/Modal';

//component for the stones
//
const Stone = (props) => {
  return <div className='stone' style={{ backgroundColor: props.color }}></div>
}



function App() {
  
  const INITIAL_BOARD_STATE = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4]
  const [board, setBoard] = useState(INITIAL_BOARD_STATE)
  const [gameOver, setGameOver] = useState(false)
  const [player1, setPlayer1] = useState(true)

  const clickHandler = (e, pocketIndex) => {

    if (board[pocketIndex] === 0) return //if that pocket is empty do nothing

    let stones = board[pocketIndex]
    let index = pocketIndex + 1
    let state = board
    state[pocketIndex] = 0
    while (stones > 0) {
      console.log('going in index > ', index)
      console.log('stones left > ', stones)

      if (state[index] === undefined) index = 0

      if (player1 && index === 0) {
        index = 1
      } else if (!player1 && index === 7) {
        index = 8
      }

      state[index]++
      index++
      stones--
      console.log('state updated: ', state)
    }

    setBoard([...state])
    console.log("this index: ", pocketIndex)
    console.log('checking winner...')

    if (state[1] === 0 & state[2] === 0 & state[3] === 0 & state[4] === 0 & state[5] === 0 & state[6] === 0) {
      setGameOver(true)
      //
      //transfer remaining seeds to players store
      //
      return
    }
    if (state[8] === 0 & state[9] === 0 & state[10] === 0 & state[11] === 0 & state[12] === 0 & state[13] === 0) {
      setGameOver(true)
      //
      //transfer remaining seeds to players store
      //      
      return
    }

    setPlayer1(() => !player1)

  }


  //still need to check for tie
  //
  let playerwin = board[0] == board[7] ? 'Player 2' : 'Player 1'
  
  return (
    <div className="app">
      <Modal gameOver={gameOver} playerwin={playerwin} />
   <p style={player1 ? { color: 'black' } : { color: 'rgb(21, 255, 28)' }}>Player 2</p>
    <Board clickHandler={clickHandler} board={board} />
   <p style={!player1 ? { color: 'black' } : { color: 'rgb(21, 255, 28)' }}>Player 1</p>

    </div>
  );
}

export default App;


/*
app makes the board with all the pits or houses and sends in the number of items board[index] that each has
and sends in which index in the array they are 
and the click handler which resides in the parent component, App, with state

the function is called from click which handles moving stones around correctly and 
adding one to each pit

a pit component renders a pit on screen and conditionally renders either just the
number in it of stones if its a players main pit (store), or if a regular one then it 
also has a click handler attached to it 

*/