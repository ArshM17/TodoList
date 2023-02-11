import React from 'react'
import './Todo.css'

function Todo( { todo } ) {
  return (
    <div className='todo'>{todo.task}</div>
  )
}

export default Todo