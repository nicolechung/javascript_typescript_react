import React from 'react'

/*
  This count prop is totally unnecessary and used to 
  demo ownProps with Typescript
*/
const Todos = ({ todos }) => {
  return (
    <div>
      {todos.task}
      {todos.color}
      {todos.date}
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(Todos)
