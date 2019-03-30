import { createStore } from 'redux'
import rootReducer from './rootReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__
  }
  interface NodeModule {
    hot: any
  }
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

if (module.hot) {
  module.hot.accept(rootReducer, () => {
    store.replaceReducer(rootReducer)
  })
}

export { store }
