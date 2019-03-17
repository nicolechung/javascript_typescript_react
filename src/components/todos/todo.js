import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div>
      {todo.task}
      {todo.color}
      {todo.date}
    </div>
  )
}


export default Todo
