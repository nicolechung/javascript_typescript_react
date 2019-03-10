import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Todo from './todo'

/*
  This count prop is totally unnecessary and used to 
  demo ownProps with Typescript
*/
const Todos = ({ todos }) => {
  return (
    <Fragment>
      {todos.map(todo => {
        <Todo todo={todo} />
      })}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(Todos)
