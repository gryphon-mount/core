import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'

import reducers from '../reducers'

function configureStore(preloadedState) {
  const middlewares = [thunk]

  const middlewareEnhancer = applyMiddleware(...middlewares)
  const storeEnhancers = [middlewareEnhancer]
  const composedEnhancer = composeWithDevTools(...storeEnhancers)

  return createStore(reducers, preloadedState, composedEnhancer)
}

export default configureStore
