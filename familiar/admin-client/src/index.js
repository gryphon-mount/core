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

// components
import App from './App'

ReactDOM.render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <Router basename="/admin">
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
