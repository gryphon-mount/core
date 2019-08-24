import { combineReducers } from 'redux'

import testDispatch from './testDispatch'

const reducers = combineReducers({
  test: testDispatch
})

export default reducers
