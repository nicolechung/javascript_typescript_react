import { combineReducers } from 'redux'

import todosReducer from 'common/redux/todos/reducer'

export default combineReducers({
  todos: todosReducer
})
