import { combineReducers } from 'redux'

import metadata from './metadata'
import profile from './profile'
import testDispatch from './testDispatch'

const reducers = combineReducers({
  metadata,
  profile,
  test: testDispatch
})

export default reducers
