import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props


  return (
    <header>
      <input 
        value={todoValue} 
        onChange={
          (event) => {
            setTodoValue(event.target.value)
          }
        }
        placeholder="Enter Task"/>
      
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')
        }}>Add Task</button>
    </header>
  );
}
