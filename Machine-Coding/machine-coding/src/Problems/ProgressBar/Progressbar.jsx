import React from 'react'

function Progressbar(props) {
  return (
    <div style={{
        width:"50%",
        border:"1px solid black",
        borderRadius:"12px",
    }}>
        <div style={{width:`${props.value}%`,backgroundColor:"red", height:"20px",  borderRadius:"12px", textAlign:"right"}}>{props.value}</div>
    </div>
  )
}

export default Progressbar
