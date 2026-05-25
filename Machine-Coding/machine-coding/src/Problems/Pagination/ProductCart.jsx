import React from 'react'

function ProductCart({title,image}) {
  return (
    <div style={{display:"flex", flexWrap:"wrap",width:"200px",border:"1px solid black", padding:"10px",margin:"5px"}}>
        <img style={{height:"100px", width:"100px"}} src={image} alt={title} />
        <span>{title}</span>
      
    </div>
  )
}

export default ProductCart
