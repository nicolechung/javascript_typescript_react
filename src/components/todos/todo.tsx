import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from 'common/redux/todos/actions'
import { format } from 'date-fns'
import { TodoItem, Dot, Task, Date } from './styled-components'

export type TodoModel = {
  color: string
  startDate: Date
  task: string
  id?: string
  completed?: boolean
}

type DispatchProps = {
  toggleComplete: (todo: TodoModel) => {}
}

type OwnProps = {
  todo: TodoModel
}

type ToDoProps = OwnProps & DispatchProps

const Todo: React.SFC<ToDoProps> = ({ todo, toggleComplete }) => {
  return (
    <TodoItem key={`todo-${todo.id}`} onClick={() => toggleComplete(todo)}>
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

export default connect<void, DispatchProps, OwnProps>(
  null,
  mapDispatchToProps
)(Todo)
