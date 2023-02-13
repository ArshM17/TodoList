import React , { useState , useRef , useEffect } from 'react';
import TodoList from "./TodoList";
import './App.css';

// const tasks = [
//   {task:"create a",isComplete:false},
//   {task:"b",isComplete:false},
//   {task:"c",isComplete:false},
//   {task:"d",isComplete:false},
//   {task:"e",isComplete:false}
// ]
const STORAGE_KEY = "todosApp"

function App() {
  const [todos,setTodos] = useState([]);
  const inputRef = useRef();

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(stored) setTodos(stored);
  },[])

  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(todos));
  },[todos])

  // localStorage.clear()

  function appendTodo(e){
    e.preventDefault();
    const val = inputRef.current.value;
    if(val==="") return;
    setTodos(prev => {
      return [...prev,{id: val, task: val, isComplete: false}];
    })
    inputRef.current.value = "";
  }

  function toggleTodo(id){
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  }

  function clearComplete(){
    const newTodos = [...todos];
    const updatedTodos = newTodos.filter(todo => todo.isComplete === false);
    setTodos(updatedTodos);
  }

  function removeTodo(id){
    const newTodos = [...todos];
    const updatedTodos = newTodos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <div className='container'>
        <h1>Pending Tasks:</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        <form onSubmit={appendTodo}>
          <input autoFocus className='textbox' ref={inputRef} type="text"/>
        </form>
        <div>
          <button onClick={clearComplete}>Clear Complete</button>
          <button onClick={appendTodo}>Add</button>
        </div>
      </div>
    </>
  );
}

export default App;
