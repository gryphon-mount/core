import metadata from 'metadata'

/* initial state */
export const initialState = {
  /* metadata properties */
  appName: '',
  productName: '',
  env: '',
  useMockData: false,
  ...metadata,
  /* account properties */
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

/* selectors */
export const getEnv = ({ meta: { env } }) => env
export const getAppName = ({ meta: { appName } }) => appName
export const getProductName = ({ meta: { productName } }) => productName
