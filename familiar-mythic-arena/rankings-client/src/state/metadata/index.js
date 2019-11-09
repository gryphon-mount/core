import metadata from 'metadata'

/* selectors */
export const getAppName = ({ metadata: { appName } }) => appName
export const getProductName = ({ metadata: productName }) => productName
export const getUseMockData = ({ metadata: useMockData }) => useMockData

/* initial state */
export const initialState = {
  ...metadata
}

export default function metadataReducer(state = initialState) {
  return state
}
