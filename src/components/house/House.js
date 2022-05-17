import React from 'react';
import Stone from '../stones/Stone';

const houseStyle = {
  display: 'flex',
  flexWrap: "wrap",
  border: 'solid black 2px',
  width: '125px',
  height: '125px',
  padding: '15px',
  boxShadow: 'inset 5px 6px 4px 3px  #000001', /*offset-x offset-y blur-radius spread-radius*/
  borderRadius: '30%',
  margin: '4px',
  // overflow: 'hidden'
}
const storeStyle = {
  border: 'solid black 2px',
  width: '125px',
  maxHeight: '100%',
  overflow: 'hidden',
  padding: '25px',
  boxShadow: 'inset 5px 6px 4px 3px  #000001', /*offset-x offset-y blur-radius spread-radius*/
  borderRadius: '30%',
  margin: '4px',
  textAlign: 'center',
  fontWeight: 'bolder'
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center'
}

const House = (props) => {
  //component for all pockets, conditionally renders the two special ones

  if (props.index === 0 || props.index === 7) {
    return (
      <>
      <div className='store' style={storeStyle}>
       
        {props.houseCount}
        <br />
        {new Array(props.houseCount).fill(1).map((item, index) => <Stone position={index} />
        )}
      </div>
      </>
    )
  }
  
  return (
    <div style={{ textAlign: 'center' }}>
      <span style={{ fontWeight: 'bolder' }}>{props.index < 14 && props.index > 7 && props.houseCount}</span>

      <div className='house' style={houseStyle} onClick={(e) => props.onClick(e, props.index)}>
      {props.index}
        {new Array(props.houseCount).fill(1).map((item, index) => {
          return <Stone key={index} position={index} />
          // pass a prop to stone called isMoving. if clicked then isMoving is true.
          //then inside each stone they move the distance of the next pocket. 
          // if that doesn't work then put the functionality in App.js in the onClick
          //
        } 
        )}

      </div>
      <span style={{ fontWeight: 'bolder' }}>{props.index > 0 && props.index < 7 && props.houseCount}</span>
    </div>
  )

};

export default House;
