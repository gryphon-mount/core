import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

/* polyfills */
import 'whatwg-fetch'

/* state */
import { Provider } from 'react-redux'
import configureStore from './state/store'

// style
import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

// util
import * as serviceWorker from './utils/serviceWorker'

// -----

let root = document.getElementById('root')

let render = () => {
  const App = require('./App').default

  ReactDOM.render(
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>,
    root
  )
}

// Configure Hot Module Reloading
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(['./App', './theme'], () => {
    render()
  })
}

render()

// -----

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
