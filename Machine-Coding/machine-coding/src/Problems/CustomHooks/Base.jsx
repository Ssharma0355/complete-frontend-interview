import React from 'react'
import useCounter from './useCounter'

function Base() {
    const {handleClick, counter} = useCounter()
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleClick}>Increase Counter</button>
      
    </div>
  )
}

export default Base
