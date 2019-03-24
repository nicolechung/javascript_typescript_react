import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from 'common/redux/todos/actions'
import { format } from 'date-fns'
import { TodoItem, Dot, Task, Date } from './styled-components'

const Todo = ({ todo, toggleComplete }) => {
  return (
    <TodoItem key={`todo-${todo.id}`} onClick={() => toggleComplete(todo)} >
      <Dot color={todo.color} />
      <Task completed={todo.completed}>{todo.task}</Task>
      <Date>{format(todo.startDate, 'MMMM DD, YYYY')}</Date>
      {todo.completed ? <i className="fas fa-check" /> : null}
    </TodoItem>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleComplete: todo => dispatch(toggleTodo(todo)),
})

export default connect(null, mapDispatchToProps)(Todo)
