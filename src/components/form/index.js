import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToDo } from 'common/redux/todos/actions'
import chroma from 'chroma-js';
import Select from 'react-select'

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

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
}


const Form = ({ dispatchSubmit }) => {
  const [todo, setTodo] = useState('')

  function handleSubmit (event) {
    event.preventDefault()
    dispatchSubmit(todo)
    setTodo('')
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <Select
        defaultValue={colourOptions[2]}
        label="Single select"
        options={colourOptions}
        styles={colourStyles}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchSubmit: (todo) => dispatch(addToDo({todo: todo}))
  }
}

export default connect(null, mapDispatchToProps)(Form)
