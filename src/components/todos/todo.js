import React from 'react'
import format from 'date-fns/format'
import { TodoItem, Dot, Task, Date } from './styled-components'

const Todo = ({ todo }) => {
  return (
    <TodoItem key={`todo-${todo.id}`}>
      <Dot color={todo.color} />
      <Task>{todo.task}</Task>
      <Date>{format(todo.startDate, 'MMMM DD, YYYY')}</Date>
    </TodoItem>
  )
}


export default Todo
