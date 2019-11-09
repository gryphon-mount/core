import { combineReducers } from 'redux'

import meta from './meta'
import profile from './profile'
import testDispatch from './testDispatch'

const reducers = combineReducers({
  meta,
  profile,
  test: testDispatch
})

export default reducers
