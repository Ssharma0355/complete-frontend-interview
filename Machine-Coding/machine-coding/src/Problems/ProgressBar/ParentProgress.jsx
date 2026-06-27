import React, { useEffect, useState } from 'react'
import Progressbar from './Progressbar'

function ParentProgress() {
    const [progress, setProgress] = useState(0)
    const [isProgress, setIsProgress] = useState(true)
    useEffect(()=>{
        if(progress >=100){
            setProgress(0)
        }
       
        const Timer = setInterval(()=>{
            
            setProgress(prev=> prev+10)
        },1000)

        return()=>{clearInterval(Timer)}

    },[isProgress,progress])

    // useEffect(()=>{
    //     if(progress >=100){
    //         setProgress(0)
    //     }

    // },[progress])
    
  return (
    <div>
      ParentProgress
      <Progressbar value={progress} />
    </div>
  )
}

export default ParentProgress
