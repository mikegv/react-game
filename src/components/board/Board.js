import React from 'react';
import House from '../house/House';
import boardImage from '../../images/woodboard.jpg'

const boardStyle={
    border: "solid black 1px",
    borderRadius: '12px',
    display: 'flex',
    padding: '20px',
    backgroundImage: `url(${boardImage})`,
    backgroundSize: 'cover',
    height: '350px'
}
const boardRowStyle = {
    display:'flex'
}
const Board = (props) => {
    return (
      <div className='board' style={boardStyle}>
      <House onClick={props.clickHandler} houseCount={props.board[0]} index={0} />
      <div>
        <div className='boardrow' style={boardRowStyle}>
          <House onClick={props.clickHandler} houseCount={props.board[13]} index={13} />
          <House onClick={props.clickHandler} houseCount={props.board[12]} index={12} />
          <House onClick={props.clickHandler} houseCount={props.board[11]} index={11} />
          <House onClick={props.clickHandler} houseCount={props.board[10]} index={10} />
          <House onClick={props.clickHandler} houseCount={props.board[9]} index={9} />
          <House onClick={props.clickHandler} houseCount={props.board[8]} index={8} />
        </div>

        <div className='boardrow' style={boardRowStyle}>
          <House onClick={props.clickHandler} houseCount={props.board[1]} index={1} />
          <House onClick={props.clickHandler} houseCount={props.board[2]} index={2} />
          <House onClick={props.clickHandler} houseCount={props.board[3]} index={3} />
          <House onClick={props.clickHandler} houseCount={props.board[4]} index={4} />
          <House onClick={props.clickHandler} houseCount={props.board[5]} index={5} />
          <House onClick={props.clickHandler} houseCount={props.board[6]} index={6} />
        </div>
      </div>
      <House onClick={props.clickHandler} houseCount={props.board[7]} index={7} />
    </div>
    );
};

export default Board;