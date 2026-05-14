import React, { useState } from 'react'

function useCounter() {
    const [counter, setCounter] = useState(0);

    const handleClick = () =>{
        setCounter(counter+1)
    }
  return (
    {
        counter, handleClick
    }
  )
}

export default useCounter
