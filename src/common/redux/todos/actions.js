import { createAction } from 'common/utils'
import { ADD_TODO, REMOVE_TODO } from './types'

export const addToDo = payload =>
  createAction(ADD_TODO, payload)


export const removeToDo = payload =>
  createAction(REMOVE_TODO, payload)
