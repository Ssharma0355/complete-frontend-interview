import React from 'react'

const squareStyle={
    border:"1px solid black",
    padding:"2rem",
    width:"100px",
    height:"100px",
    alignItems:"center",
    textAlign:"center",
    cursor:"pointer"

}

function Square(props) {
  return (
    <div onClick={props.onClick} style={squareStyle}>
        <h5 >{props.value}</h5>
    </div>
  )
}

export default Square
