import React from 'react'
import todo from '../Props/todo'

const Todo : React.FC <{item:todo[]}> = (props) => {
  return (
    <div>
        <ul>
            {
                props.item.map((item) =>(
                    <li key={item.id}>{item.text}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo