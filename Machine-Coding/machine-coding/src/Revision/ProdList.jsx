import React from 'react'

function ProdList(props) {
  return (
    <div style={{display:"flex", alignItems:"center", flexDirection:"column", border:"1px solid black",borderRadius:"12px"}}>
        <img src={props.image} alt={props.title}/>
        <p>{props.title}</p>
    </div>
  )
}

export default ProdList
