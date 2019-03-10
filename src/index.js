import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './app'
import { store } from 'common/redux/store'

import '@babel/polyfill'

ReactDOM.render(<App store={store} />, document.getElementById('app'))
