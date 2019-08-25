import metadata from 'metadata'

/* selectors */
export const getAppName = ({ metadata }) => metadata.appName
export const getProductName = ({ metadata }) => metadata.productName

/* initial state */
export const initialState = {
  ...metadata
}

export default function metadataReducer(state = initialState) {
  return state
}
