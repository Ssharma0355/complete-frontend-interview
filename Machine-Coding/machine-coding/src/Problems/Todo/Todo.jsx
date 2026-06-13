import React, { useState } from 'react'

function Todo() {

    const [task, setTask] = useState("")
    const [todoList, setTodoList] = useState([]);
    const addTask = () =>{
       setTodoList((prev)=>[...prev,{id:todoList.length+1,task:task}])
        setTask("")
    }
    console.log(todoList)
    const deleteTask =(id)=>{
        const filteredList = todoList.filter(task => task.id !== id)
        setTodoList(filteredList)

    }

  return (
    <div>
        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
       <div>
        {todoList.map(t=>(
            <p key={t.id}>{t.task}
            <button onClick={()=>deleteTask(t.id)}>Delete task</button>
            </p>
        ))}
       </div>
      
    </div>
  )
}

export default Todo
