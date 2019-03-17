import React from 'react'
import Form from 'components/form'
import uuidv4 from 'uuid/v4'

/*
  This id prop is totally unnecessary and used to 
  demo ownProps with Typescript
*/
const FormOwnProps = () => {
  const id = uuidv4()
  return (
    <Form id={id}/>
  )
}


export default FormOwnProps
