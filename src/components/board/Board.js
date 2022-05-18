import React from 'react';
import './Board.css'
import House from '../house/House';
import Stone from '../stones/Stone';
import styled, { keyframes } from 'styled-components';

//
//keyframes for stonesAnimation
const move = (startX, endX) => keyframes`
  from {
    left: ${startX + 'px'};
  }
  to {
    left: ${endX + 'px'};
  }
`
//
//styled component for the animation
const StonesAnimation = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60px;
  height: 50px;
  background-color: transparent;
  position: absolute;
  left: ${props => props.endX + 'px'};
  top: ${props => props.startY + 'px'};
  z-index: 13;
  animation-name: ${props => move(props.startX, props.endX)};
  animation-duration: .8s;
  animation-timing-function: ease-in-out;
`

const Board = (props) => {

  let numberOfStonesArray = props.numberOfStonesInMove > 4 ? [<Stone theme={props.theme} style={{position:'absolute', left:'10px', top: '15px', zIndex: '14'}}/>,<Stone theme={props.theme} />,<Stone theme={props.theme} />,<Stone theme={props.theme} />,<Stone theme={props.theme} />] : new Array(props.numberOfStonesInMove).fill(0).map(item => <Stone theme={props.theme} /> )

  return (
      <div className='board' ref={props.topOfBoard}> 
        {        
        props.isMoving && !props.gameOver && <StonesAnimation onAnimationEnd={props.afterAnimation} startX={props.stonesAnimationPosition.startX} endX={props.stonesAnimationPosition.endX} startY={props.stonesAnimationPosition.startY}> 
          {numberOfStonesArray}
        </StonesAnimation> 
       }
      <House onClick={props.clickHandler} houseCount={props.board[0]} index={0} theme={props.theme} />
      <div>
        <div className='boardRow'>
          <House onClick={props.clickHandler} houseCount={props.board[13]} index={13} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[12]} index={12} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[11]} index={11} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[10]} index={10} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[9]} index={9} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[8]} index={8} theme={props.theme} />
        </div>

        <div className='boardRow' >
          <House onClick={props.clickHandler} houseCount={props.board[1]} index={1} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[2]} index={2} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[3]} index={3} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[4]} index={4} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[5]} index={5} theme={props.theme} />
          <House onClick={props.clickHandler} houseCount={props.board[6]} index={6} theme={props.theme} />
        </div>
      </div>
      <House onClick={props.clickHandler} houseCount={props.board[7]} index={7} theme={props.theme} />
    </div>
    );
};

export default Board;