import React, { useState } from 'react'
import json from "./data.json"

function FileExp() {
    const [data, setData] = useState(json);
    console.log(data);

    const List =({list})=>{
        return(
            <div style={{display:"flex",flexDirection:"column"}}>
                {list.map((node)=>
                <div key={node.id}>
                    <span>{node.name}</span>
                    <span style={{marginLeft:"12px"}}>
                    {node?.children && <List list={node.children} />}
                    </span>
                </div>
                    )}
            </div>
        )
    }
  return (
    <div>
        <List list={data}/>
      
    </div>
  )
}

export default FileExp
