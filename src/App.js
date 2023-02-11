import React , { useState } from 'react';
import TodoList from "./TodoList";
import './App.css';

const tasks = [
  {task:"a",isComplete:false},
  {task:"b",isComplete:false},
  {task:"c",isComplete:false},
  {task:"d",isComplete:false},
  {task:"e",isComplete:false}
]

function App() {
  const [todos,setTodos] = useState(tasks);
  return (
    <>
      <div className='container'>
        <h1>Pending Tasks:</h1>
        <TodoList todos={todos}/>
        <input type="text"></input>
        <div>
          <button>Clear</button>
          <button>Create</button>
        </div>
      </div>
    </>
  );
}

export default App;
