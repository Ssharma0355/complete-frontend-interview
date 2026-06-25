import React, { useEffect, useState } from 'react'

function Timer() {
    const Intial_Time = 60;

    const [timeLeft, setTimeLeft] = useState(Intial_Time)
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        if(!isRunning || timeLeft===0)return;
        const Timer = setInterval(()=>{
            setTimeLeft((prev)=> prev-1)
        },1000)
         return ()=>{
            clearInterval(Timer)
         }
    },[isRunning,timeLeft])


    const startCount=()=>{
        setIsRunning(true)
    }
    const pauseCount =()=>{
        setIsRunning(false)
    }

    const reset=()=>{
        setTimeLeft(Intial_Time)
        setIsRunning(false)
    }

    
  return (
    <div>
        <h1>{timeLeft}</h1>
        <button onClick={startCount}>Start</button>
        <button onClick={pauseCount}>Pause</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer
