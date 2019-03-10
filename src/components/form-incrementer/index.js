import React from 'react'
import { connect } from 'react-redux'
import Form from 'components/form'

/*
  This count prop is totally unnecessary and used to 
  demo ownProps with Typescript
*/
const FormIncrementer = ({ count }) => {
  return (
    <Form count={count}/>
  )
}

const mapStateToProps = state => ({
  count: state.todos.count
})

export default connect(mapStateToProps)(FormIncrementer)
