import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import ErrorBoundary from './error-boundary'
import FormOwnProps from 'components/form-ownprops'
import Todos from 'components/todos'


const AppWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  padding: 20px;
`

const App = ({ store }) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppWrapper>
          <FormOwnProps />
          <Todos />
        </AppWrapper>
      </Provider>
    </ErrorBoundary>
  )
}
export default App
