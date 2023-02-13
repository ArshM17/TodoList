import React from 'react'
import './Todo.css'

function Todo( { todo,toggleTodo,removeTodo } ) {

  function handleChange(){
    toggleTodo(todo.id);
  }

  function handleRemoveTodo(){
    removeTodo(todo.id);
  }
  return (
    <>
    <div className='todoContainer'>
      <input className='check' type={'checkbox'} checked={todo.isComplete} onChange={handleChange}/>
      <span className='todo'>{todo.task}</span>
      <button className='cross' onClick={handleRemoveTodo}>X</button>
    </div>
    </>
  )
}

export default Todo