import React, { useState } from 'react'
import json from "./data.json"

function FileExp() {
    const [data, setData] = useState(json);
    console.log(data);

    const List =({list})=>{
        return(
            <div >
                {list.map((node)=>
                <div key={node.id}>
                    <span>{node.name}</span>
                    {node?.children && 
                    <div style={{marginLeft:"20px", borderTop:"1px dotted gray", padding:"12px"}}>
                    <List list={node.children} />
                    </div>}
                 </div>
                    )}
            </div>
        )
    }
  return (
    <div style={{display:"flex", flexDirection:"column", border:"1px solid black"}}>
        <List list={data}/>
    </div>
  )
}

export default FileExp
