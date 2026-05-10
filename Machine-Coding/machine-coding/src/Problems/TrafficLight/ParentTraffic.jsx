import React from 'react'
import TrafficLight from './TrafficLight'

function ParentTraffic() {
    const config =[
        {
            id:1,
            color:"red",
            duration:2000,
        },
        {
            id:2,
            color:"yellow",
            duration:3000,
        },
        {
            id:3,
            color:"green",
            duration:4000
        }
    ]
  return (
    <div>
        <TrafficLight config={config} />
    </div>
  )
}

export default ParentTraffic
