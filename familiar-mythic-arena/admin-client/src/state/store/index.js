import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'

import reducers from '../reducers'

function configureStore(preloadedState) {
  const middlewares = [thunk]

  const middlewareEnhancer = applyMiddleware(...middlewares)
  const storeEnhancers = [middlewareEnhancer]
  const composedEnhancer = composeWithDevTools(...storeEnhancers)

  const store = createStore(reducers, preloadedState, composedEnhancer)

  // Extends Hot Module Reloading to the Redux store
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => {
      const newreducers = require('../reducers').default
      store.replaceReducer(newreducers)
    })
  }

  return store
}

export default configureStore
