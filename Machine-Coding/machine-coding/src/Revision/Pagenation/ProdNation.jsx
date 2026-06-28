import React from 'react'

function ProdNation({title, image}) {
  return (
    <div style={{border:"1px solid black"}}>
        <img style={{height:"150px", width:"150px",objectFit:"cover"}} src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default ProdNation
