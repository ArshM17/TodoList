import Todo from './Todo'
import './TodoList.css'

function TodoList( {todos,toggleTodo,removeTodo} ) {
  return (
    <div className='todos'>
        {todos.map(todo => {
            return <Todo key={todo.task} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        })
        }
    </div>  
    )
}

export default TodoList