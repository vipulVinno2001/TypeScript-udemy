
import NewTodo from './Components/NewTodo'
import Todo from './Components/Todo'
import todo from './Props/todo'


function App() {
  const todoItems = [
     new todo('New  Learning'),
     new todo('Old Learning')
  ]

  return (
    <>
     <Todo item={todoItems}/>
     <NewTodo />
       
    </>
  )
}

export default App
