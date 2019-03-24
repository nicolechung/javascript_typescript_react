import { createReducer } from 'common/utils'
import * as types from './types'

const INITIAL_STATE = []
let nextTodoId = 0

const reducers = {
  [types.ADD_TODO]: addToDo,
  [types.TOGGLE_TODO]: toggleTodo,
  [types.REMOVE_TODO]: removeToDo
}

function addToDo (state, payload) {
  return [
    ...state,
    {
      task: payload.task,
      color: payload.color,
      startDate: payload.startDate,
      completed: false,
      id: nextTodoId++
    }
  ]
}

function removeToDo (state, payload) {
  return state.filter(todo => todo.id !== payload.id)
}

function toggleTodo (state, payload) {
  return state.map(todo => todo.id === payload.id ? {...todo, completed: !todo.completed} : todo)
}


export default createReducer(INITIAL_STATE, reducers)