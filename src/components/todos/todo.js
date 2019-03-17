import React from 'react'
import format from 'date-fns/format'
import { TodoItem, Dot } from './styled-components'
const Todo = ({ todo }) => {
  return (
    <TodoItem key={`todo-${todo.id}`}>
      <Dot color={todo.color} />
      {todo.task}
      {format(todo.startDate, 'MMMM DD, YYYY')}
    </TodoItem>
  )
}


export default Todo
