import React, { useState } from "react";
import Square from "./Square";

const boardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "2px",
};

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  console.log(state);

  const checkWinner =()=>{
    const winnerLogic =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let logic of winnerLogic){
        const [a,b,c] = logic;
        if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
            return state[a]
        }

    }
    return false
  }

  const whoWon = checkWinner();

  const handleClick = (index)=>{
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setIsXTurn(prev => !prev)
    setState(copyState)
  }
  return (
    <div style={{ margin: "20px" }}>
        {whoWon ? <p>{whoWon} win the game</p>:
        <>
        <h1>{isXTurn ? "X":"0"} Turns</h1>
           <div style={boardStyle}>
        <Square onClick={()=>{handleClick(0)}} value={state[0]} />
        <Square  onClick={()=>{handleClick(1)}} value={state[1]}/>
        <Square  onClick={()=>{handleClick(2)}} value={state[2]}/>
      </div>
      <div style={boardStyle}>
        <Square  onClick={()=>{handleClick(3)}} value={state[3]}/>
        <Square  onClick={()=>{handleClick(4)}} value={state[4]}/>
        <Square  onClick={()=>{handleClick(5)}} value={state[5]}/>
      </div>
      <div style={boardStyle}>
        <Square  onClick={()=>{handleClick(6)}} value={state[6]}/>
        <Square  onClick={()=>{handleClick(7)}} value={state[7]}/>
        <Square  onClick={()=>{handleClick(8)}} value={state[8]}/>
        <Square  onClick={()=>{handleClick(8)}} value={state[8]}/>
     
      </div>
        </>
        }
    </div>
  );
}

export default Board;
