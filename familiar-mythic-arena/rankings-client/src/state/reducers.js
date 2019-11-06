import { combineReducers } from 'redux'

import account from './account'
import metadata from './metadata'
import testDispatch from './testDispatch'

const reducers = combineReducers({
  account,
  metadata,
  test: testDispatch
})

export default reducers
