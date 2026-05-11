import React, { useEffect, useState } from 'react'

function TrafficLight({config}) {
    const [index, setIndex] = useState(0)
    const CurrentLight = config[index];
    // console.log(CurrentLight)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIndex((prev)=>(prev+1)% config.length)
        },CurrentLight.duration)

        return ()=>{clearTimeout(timer)}
    },[index])

  return (
    <div>
        <h2>Traffic light</h2>
            {config.map((Traffic)=>(
                    <div
                    key={Traffic.id}
                    style={{border:"1px solid black", 
                    borderRadius:"100%",
                    height:"30px",
                    width:"30px",
                    margin:"8px",
                    backgroundColor:`${CurrentLight.id === Traffic.id ? Traffic.color  :"white"}`
                    
                    }}>
                    </div>
            ))}
        </div>
  )
}

export default TrafficLight
