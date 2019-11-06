import { combineReducers } from 'redux'

import account from './account'
import metadata from './metadata'
import testDispatch from './testDispatch'

const reducers = combineReducers({
  metadata,
  account,
  test: testDispatch
})

export default reducers
