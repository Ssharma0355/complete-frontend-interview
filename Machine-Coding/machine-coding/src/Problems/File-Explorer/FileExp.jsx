import React, { useState } from 'react'
import json from "./data.json"

function FileExp() {
    const [data, setData] = useState(json);
    console.log(data);



    const List =({list})=>{
        const [isExpland, setIsExpland] = useState(false)
        const openIt =()=>{
            setIsExpland(prev => !prev)
        }
        return(
            <div >
                {list.map((node)=>
                <div key={node.id}>
                    {node?.isFolder && <button onClick={openIt}> {isExpland?"+":"-"} </button>}
                    <span>{node.name}</span>
                    {isExpland && node?.children && 
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
