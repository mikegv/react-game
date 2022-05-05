
import React from 'react';

const Modal = (props) => {
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
  return (
    <div className='modal' style={modalStyle}>

  
      <p style={{ backgroundColor: 'rgb(240,240,240)',padding: '20px' }}>Game Over</p>
      <br />
      <p style={{ backgroundColor: 'rgb(240,240,240)',padding: '20px' }}>Congrats {props.playerwin}</p>

    </div>
  );
};

export default Modal;
    