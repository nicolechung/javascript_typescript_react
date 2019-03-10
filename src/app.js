import React, { useState } from 'react'

import { Provider } from 'react-redux'
import ErrorBoundary from './error-boundary'
import Form from 'components/form'

const App = ({ store, handleSubmit }) => {
  const [todo, setTodo] = useState('')
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div>
          <Form />
        </div>
      </Provider>
    </ErrorBoundary>
  )
}
export default App
