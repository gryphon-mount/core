import metadata from 'metadata'

/* initial state */
export const initialState = {
  ...metadata,
  username: null,
  error: null,
  errorCode: null,
  isError: false,
  isFetching: false,
  lastChangedAt: null,
  lastReceivedAt: null
}

export default function metaReducer(state = initialState) {
  return state
}
