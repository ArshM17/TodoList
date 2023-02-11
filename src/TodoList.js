import Todo from './Todo'
import './TodoList.css'

function TodoList( {todos} ) {
  return (
    <div className='todos'>
        {todos.map(todo => {
            return <Todo todo={todo}/>
        })
        }
    </div>  
    )
}

export default TodoList