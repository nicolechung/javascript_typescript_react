import { createReducer } from 'common/utils'
import * as types from './types'

// might have to do something to handle "products in view" but for now
const INITIAL_STATE = {
  todos: {},
}

const reducers = {
  [types.ADD_TODO]: addToDo,
  [types.REMOVE_TODO]: removeToDo
}

function addToDo (state, payload) {
  return {
    ...state,
    todos: {
      ...state.todos,
      ...payload,
    }
  }
}

function removeToDo (state, payload) {
  const todos = [...state.todos]
  // const index = todos.findIndex(findElementInTodos)
  return {
    ...state,
    ...todos
  }
}

function findElementInTodos (element) {
  console.log(element)
  debugger
}

export default createReducer(INITIAL_STATE, reducers)