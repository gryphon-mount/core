import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

/* polyfills */
import 'whatwg-fetch'

/* state */
import { Provider } from 'react-redux'
import configureStore from './state/store'

/* style */
import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

/* utils */
import * as serviceWorker from './utils/serviceWorker'

/* components */
import App from './App'

const render = Component =>
  ReactDOM.render(
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <Router>
          <Component />
        </Router>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  )

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}

// ReactDOM.render(
//   <Provider store={configureStore()}>
//     <ThemeProvider theme={theme}>
//       <Router>
//         <App />
//       </Router>
//     </ThemeProvider>
//   </Provider>,
//   document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()