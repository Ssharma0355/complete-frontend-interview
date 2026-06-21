import React from 'react'
import { useQuery } from '@tanstack/react-query';

function QueryTodo() {

    const{data} = useQuery(["todo"], async()=> await (await fetch("https://dummyjson.com/todos")).json())
    console.log(data)
  return (
    <div>
      QueryTodo
    </div>
  )
}

export default QueryTodo
