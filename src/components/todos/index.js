import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Todo from './todo'

/*
  This count prop is totally unnecessary and used to 
  demo ownProps with Typescript
*/
const Todos = ({ todos }) => {
  if (!Object.keys(todos).length) return null
  return (
    <Fragment>
      {todos.map(todo => {
        return <Todo todo={todo} />
      })}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(Todos)
