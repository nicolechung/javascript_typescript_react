import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from 'common/redux/todos/actions'
import Todo from './todo'
import { 
  TodosContainer,
} from './styled-components'

/*
  This count prop is totally unnecessary and used to 
  demo ownProps with Typescript
*/
const Todos = ({ todos }) => {
  if (!Object.keys(todos).length) return null
  return (
    <TodosContainer>
      <ul>
      {todos.map(todo => {
        return <Todo todo={todo} key={`todo-${todo.id}`} />
      })}
      </ul>
    </TodosContainer>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(Todos)
