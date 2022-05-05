import React from 'react';

const houseStyle = {
  border: 'solid black 2px',
  width: '125px',
  height: '125px',
  padding: '5px',
  boxShadow: 'inset 5px 6px 4px 3px  #000001', /*offset-x offset-y blur-radius spread-radius*/
  borderRadius: '30%',
  margin: '4px',
}
const storeStyle = {
  border: 'solid black 2px',
  width: '125px',
  height: '100%',
  padding: '5px',
  boxShadow: 'inset 5px 6px 4px 3px  #000001', /*offset-x offset-y blur-radius spread-radius*/
  borderRadius: '30%',
  margin: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const House = (props) => {
    //component for all pockets, conditionally renders the two special ones

  if (props.index === 0 || props.index === 7) {
    return (
      <div className='store' style={storeStyle}>
        Store Count: 
        <br />
        {props.houseCount}
        <br />
        Index : {props.index}

      </div>
    )
  }
  return (
    <div style={{textAlign: 'center'}}>
      <span style={{fontWeight:'bolder'}}>{props.index < 14 && props.index > 7 && props.houseCount}</span>

    <div className='house' style={houseStyle} onClick={(e) => props.onClick(e, props.index)}>
      <br />
      <br />

      {/* Index : {props.index} */}
      {/* {props.pocket.map((item, index) => <Stone  color='blue' />)} */}
    </div>
    <span style={{fontWeight:'bolder'}}>{props.index > 0 && props.index < 7 && props.houseCount}</span>
    </div>
  )

};

export default House;
