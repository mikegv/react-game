import './App.css';
import { useState, useEffect, useRef } from 'react';
import Board from './components/board/Board';
import Modal from './components/modal/Modal';
import Stone from './components/stones/Stone';

import styled, { keyframes } from 'styled-components';

// //
// //keyframes for stonesAnimation
// const move = (startX, endX) => keyframes`
//   from {
//     left: ${startX + 'px'};
//   }
//   to {
//     left: ${endX + 'px'};
//   }
// `
// //
// //styled component for the animation
// const StonesAnimation = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: blueviolet;
//   position: absolute;
//   left: ${props => props.endX + 'px'};
//   top: ${props => props.startY + 'px'};
//   z-index: 13;
//   animation-name: ${props => move(props.startX, props.endX)};
//   animation-duration:2s;
//   animation-timing-function: ease-in-out;
// `

function App() {

  const INITIAL_BOARD_STATE = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4]
  const [board, setBoard] = useState(INITIAL_BOARD_STATE)
  const [gameOver, setGameOver] = useState(false)
  const [player1, setPlayer1] = useState(true)
  const [isMoving, setIsMoving] = useState(false)
  const [stonesAnimationPosition, setStonesAnimationPosition] = useState({startY: 0, startX: 0, endX: 0})
  const [firstLoad, setFirstLoad] = useState(true)
  const topOfBoard = useRef()


  useEffect(
    ()=>{
      if(firstLoad)setFirstLoad(false)
      else{
        setIsMoving(true)
      }

      
    }
  , [stonesAnimationPosition])



  const afterAnimation = () =>{
    setIsMoving(false)
  }



  const clickHandler = (e, pocketIndex) => {

    let stones = board[pocketIndex]


    let calculatedStart = (pocketIndex * 130)
    let topStart = topOfBoard.current.offsetTop
    
    if(pocketIndex < 7){
      setStonesAnimationPosition({startY: topStart + 300, startX: calculatedStart + 300, endX: 1150 })
    }else{
      calculatedStart = (14 - pocketIndex) * 130 
      setStonesAnimationPosition({startY: topStart , startX: calculatedStart + 300, endX: 325})
    }
    
    if (board[pocketIndex] === 0) return //if that pocket is empty do nothing

    let index = pocketIndex + 1
    let state = board
    state[pocketIndex] = 0
    //distribute stones around

    if(stones > 0){
    }
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
    }

    index--
    ///if you landed on am empty house steal the other sides stones
    ///
    ////
    if(player1 & index < 7 & index > 0 & state[index] === 1 & state[14-index] > 0){
      //take other players stones 
      state[7] = state[7] + 1 + state[14-index]
      state[14-index] = 0
      state[index] = 0
      }

    if(!player1 & index > 7 & index < 14 & state[index] === 1 & state[14-index] > 0){
      //take other players stones

      state[0] = state[0] + 1 + state[14-index]
      state[14-index] = 0
      state[index] = 0
    }


    //then check if any side of board is empty
    //
    // console.log("this index: ", pocketIndex)
    // console.log('checking winner...')

    if (state[1] === 0 & state[2] === 0 & state[3] === 0 & state[4] === 0 & state[5] === 0 & state[6] === 0) {
      //
      //player 1 has no more stones
      //transfer player 2 remaining seeds to player 2 store
      //
      state[0] = state[0] + state[8] + state[9] + state[10] + state[11] + state[12] + state[13]

      //
      //make this for loop into its own function to call in the two cases where someone ran out of stones
      for (let i = 1; i < state.length; i++) {
        if (i !== 7) {
          state[i] = 0
        }
      }
      //for all indexes of the array set them all to zero except for the two stores, index 0 & 7 


      setBoard([...state])
      setGameOver(true)
      return
    }
    if (state[8] === 0 & state[9] === 0 & state[10] === 0 & state[11] === 0 & state[12] === 0 & state[13] === 0) {
      //
      //player 2 has no more stones
      //transfer player 1 remaining seeds to player 1 store
      //     
      state[7] = state[7] + state[1] + state[2] + state[3] + state[4] + state[5] + state[6]

      for (let i = 1; i < state.length; i++) {
        if (i !== 7) {
          state[i] = 0
        }
      }

      setBoard([...state])
      setGameOver(true)
      return
    }

    

    setBoard([...state])

    //if the index of last one is their store and games not over then 
    //dont change player 
    //
    //if player 1 and index left on was 7 , then dont switch players
    //if player 2 and index left on was 0 , then dont switch players

    if (index === 7 & player1) {
      return
    }
    if (index === 0 & !player1) {
      return
    }
    setPlayer1(() => !player1)
  }







  //
  ///
  //
  const modalClickHandler = () => {
    setBoard(INITIAL_BOARD_STATE)
    setGameOver(false)
    setPlayer1(true)
  }

  //store the result of the game for displaying on screen
  //
  let gameResult = board[0] === board[7] ? 'Tie!!!' : board[0] < board[7] ? 'Congrats Player 1' : 'Congrats Player 2'

  return (
    <div className="app">
      <Modal gameOver={gameOver} gameResult={gameResult} modalClickHandler={modalClickHandler} />
      <p style={player1 ? { color: 'black' } : { color: 'rgb(21, 255, 28)' }}>Player 2</p>
      <Board clickHandler={clickHandler} board={board} afterAnimation={afterAnimation} isMoving={isMoving} startX={stonesAnimationPosition.startX} endX={stonesAnimationPosition.endX} startY={stonesAnimationPosition.startY} topOfBoard={topOfBoard} />
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