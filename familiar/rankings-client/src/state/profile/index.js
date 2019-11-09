import mockdata from './mock.json'

/* constants */
export const INVALIDATE_PROFILE = 'INVALIDATE_PROFILE'
export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST'
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'

/* actions */
export const invalidateProfile = () => ({
  type: INVALIDATE_PROFILE
})

export const requestProfile = () => ({
  type: FETCH_PROFILE_REQUEST
})

export const requestProfileFailure = (
  error,
  errorCode,
  receivedAt = Date.now()
) => ({
  type: FETCH_PROFILE_FAILURE,
  error,
  errorCode,
  receivedAt
})

export const requestProfileSuccess = (json, receivedAt = Date.now()) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    json,
    receivedAt
  }
}

export const fetchProfile = () => (dispatch, getState) => {
  dispatch(requestProfile())

  const {
    meta: { useMockData }
  } = getState()

  console.log(getState())

  if (useMockData) {
    return Promise.resolve(mockdata).then(
      json => dispatch(requestProfileSuccess(json)),
      err => dispatch(requestProfileFailure(err))
    )
  }

  return Promise.resolve({}).then(
    json => dispatch(requestProfileSuccess(json)),
    err => dispatch(requestProfileFailure(err))
  )
}

/* initial state */
export const initialState = {
  /* profile metadata */
  error: null,
  errorCode: null,
  isError: false,
  isFetching: false,
  lastReceivedAt: null,
  /* profile details */
  city: null,
  country: null,
  email: null,
  events: [],
  friends: [],
  gender: null,
  id: null,
  ip_address: null,
  name: null,
  rank: null,
  rating: null,
  region: null,
  venues: []
}

export default function profile(state = initialState, action) {
  switch (action.type) {
    case INVALIDATE_PROFILE: {
      const { lastReceivedAt } = state

      return {
        ...initialState,
        lastReceivedAt
      }
    }

    case FETCH_PROFILE_REQUEST: {
      return {
        ...state,
        isFetching: true
      }
    }

    case FETCH_PROFILE_FAILURE: {
      const { error, errorCode, receivedAt } = action

      return {
        ...state,
        error,
        errorCode,
        isFetching: false,
        receivedAt
      }
    }

    case FETCH_PROFILE_SUCCESS: {
      const { json, receivedAt } = action

      /* whitelisting allowed properties */
      const {
        city,
        country,
        email,
        events,
        friends,
        gender,
        id,
        ip_address,
        profile_name,
        rank,
        rating,
        region,
        venues
      } = json

      return {
        ...state,
        isFetching: false,
        receivedAt,
        city,
        country,
        email,
        events,
        friends,
        gender,
        id,
        ip_address,
        profile_name,
        rank,
        rating,
        region,
        venues
      }
    }

    default:
      return state
  }
}

/* selectors */
export const getProfileName = ({ profile: { profile_name } }) => profile_name
