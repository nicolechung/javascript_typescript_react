import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import {setHours, setMinutes} from 'date-fns'

import Select from 'react-select'

import { colourOptions, colourStyles } from './color-helpers'

import { addToDo } from 'common/redux/todos/actions'
import {
  FormContainer,
  Button
} from './styled-components'
import { Todo } from 'components/todos/todo'

type FormOwnProps = {
  id: string,
}

type FormDispatchProps = {
  dispatchSubmit: (todo:Todo) => {}
}

type FormProps = FormOwnProps & FormDispatchProps

const Form: React.FunctionComponent<FormProps> = ({ dispatchSubmit }) => {
  const [task, setTask] = useState('')
  const [color, setColor] = useState('')
  const [startDate, setStartDate] = useState(new Date())

  function handleSubmit (event) {
    event.preventDefault()
    dispatchSubmit({
      task,
      color,
      startDate,
    })
    setTask('')
  }

  function handleDateChange(date) {
    setStartDate(date)
  }

  function handleColorChange(selectOption) {
    setColor(selectOption.color)
  }

  return (
    <FormContainer>
      <form onSubmit={event => handleSubmit(event)}>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <Select
          label="Single select"
          options={colourOptions}
          styles={colourStyles}
          onChange={handleColorChange}
        />
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          showTimeSelect
          includeTimes={[setHours(setMinutes(new Date(), 0), 17), setHours(setMinutes(new Date(), 30), 18), setHours(setMinutes(new Date(), 30), 19), setHours(setMinutes(new Date(), 30), 17)]}
          dateFormat="MMMM d, yyyy"
        />
        <Button type="submit">Add</Button>
      </form>
    </FormContainer>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchSubmit: todo => dispatch(addToDo(todo)),
  }
}

export default connect(null, mapDispatchToProps)(Form)
