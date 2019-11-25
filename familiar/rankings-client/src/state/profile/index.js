/* constants */
export const INVALIDATE_PROFILE = INVALIDATE_PROFILE
export const REQUEST_PROFILE = REQUEST_PROFILE
export const RECEIVE_PROFILE = RECEIVE_PROFILE
export const FETCH_PROFILE_REQUEST = FETCH_PROFILE_REQUEST
export const FETCH_PROFILE_FAILURE = FETCH_PROFILE_FAILURE
export const FETCH_PROFILE_SUCCESS = FETCH_PROFILE_SUCCESS

/* actions */
export const invalidateProfile = () => ({
  type: INVALIDATE_PROFILE
})

export const requestProfile = (username, password) => ({
  type: REQUEST_PROFILE,
  username,
  password
})

export const receiveProfileFailure = (
  error,
  errorCode,
  receivedAt = Date.now()
) => ({
  type: RECEIVE_PROFILE,
  error,
  errorCode,
  receivedAt
})

export const receiveProfileSuccess = (json, receivedAt = Date.now()) => ({
  type: RECEIVE_PROFILE,
  json,
  receivedAt
})

/* initial state */
export const initialState = {
  error: null,
  errorCode: null,
  isError: false,
  isFetching: false,
  isSignedIn: false,
  lastReceivedAt: null,
  lastSignin: null
}

export default function profile(state = initialState, action) {
  switch (action.type) {
    case INVALIDATE_PROFILE:
      return {
        ...initialState
      }
    default:
      return state
  }
}

/* selectors */
// export const getProfileUsername = ({ profile: { username } }) => username
