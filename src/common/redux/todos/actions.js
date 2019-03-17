import { createAction } from 'common/utils'
import { ADD_TODO, TOGGLE_TODO } from './types'

export const addToDo = payload =>
  createAction(ADD_TODO, payload)

export const toggleTodo = payload =>
  createAction(TOGGLE_TODO, payload)
