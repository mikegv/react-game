
import React from 'react';
import './Modal.css'
import ReactDOM from 'react-dom'

const Modal = (props) => {

  let board = props.board

  const modalStyle = {
    height: '100%',
    width: '100vw',
    backgroundColor: 'rgba(100,100,100,.9)',
    zIndex: '5',
    display: props.gameOver ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    overflow: 'hidden',
    padding: '20px'
  }

  let gameResult = board[0] === board[7] ? 'Tie!!!' : board[0] < board[7] ? 'Player 1 Wins!' : 'Player 2!'

  return (
  <>
    {ReactDOM.createPortal(
    <div className='modal' style={modalStyle}>
      <div className='modalContent' >
      <p >Game Over</p>
      <br />
      
      
      <div className='playerScore'>Player 1 Score: {board[7]}</div>
      
      <br />
      <p className='playerScore'>Player 2 Score: {board[0]} </p>
      
      
      <br />
      <p> {gameResult}</p>
      <br />
      <button onClick={props.modalClickHandler}>New Game</button>
      </div>
    </div>
    , document.getElementById('modal-root'))}
    </>
  );
};

export default Modal;
    