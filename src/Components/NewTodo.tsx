import React, { useRef } from 'react'

const NewTodo = () => {
    
    const todoTestInputRef = useRef<HTMLInputElement>(null);

    const handleTodo = (event:React.FormEvent
    ) =>{
             event.preventDefault();
             const enteredInput = todoTestInputRef?.current?.value;
    }
  return (
    <div>
        <form action="" onSubmit={handleTodo}>
            <label htmlFor="text">Todo List</label>
            <input type="text" id='text' ref={todoTestInputRef} />
            <button>Add TODO</button>
        </form>
    </div>
  )
}

export default NewTodo