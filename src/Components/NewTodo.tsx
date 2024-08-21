import React from 'react'

const NewTodo = () => {

    const handleTodo = (event:React.FormEvent
    ) =>{
             event.preventDefault();
    }
  return (
    <div>
        <form action="" onSubmit={handleTodo}>
            <label htmlFor="text">Todo List</label>
            <input type="text" id='text' />
            <button>Add TODO</button>
        </form>
    </div>
  )
}

export default NewTodo