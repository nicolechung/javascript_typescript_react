import React, { useState } from 'react'
import Select from 'react-select'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import ErrorBoundary from './error-boundary'

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

const App = ({ store }) => {
  const [todo, setTodo] = useState('')
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div>
          <form>
            <input value={todo} onChange={e => setTodo(e.target.value)} />
            <button type='submit'>Add</button>
          </form>
        </div>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
