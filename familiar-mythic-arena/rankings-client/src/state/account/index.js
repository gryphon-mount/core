/* constants */
export const UPDATE_ACCOUNT_LAST_LOGIN = 'UPDATE_ACCOUNT_LAST_LOGIN'
export const UPDATE_ACCOUNT_NAME = 'UPDATE_ACCOUNT_NAME'
export const UPDATE_ACCOUNT_USERNAME = 'UPDATE_ACCOUNT_USERNAME'

/* actions */
export const updateAccountLastLogin = ({ payload }) => ({
  payload,
  type: UPDATE_ACCOUNT_LAST_LOGIN
})
export const updateAccountName = ({ payload }) => ({
  payload,
  type: UPDATE_ACCOUNT_NAME
})
export const updateAccountUsername = ({ payload }) => ({
  payload,
  type: UPDATE_ACCOUNT_USERNAME
})

/* selectors */
export const getAccount = ({ account }) => account
export const getAccountLastLogin = ({ account }) => ({
  last_login: account.last_login
})
export const getAccountName = ({ account }) => ({ name: account.name })
export const getAccountUsername = ({ account }) => ({
  username: account.username
})

/* initial state */
export const initialState = {
  _id: '',
  last_login: null,
  name: '',
  username: ''
}

export default function account(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ACCOUNT_LAST_LOGIN:
      return {
        ...state,
        last_login: action.payload
      }

    case UPDATE_ACCOUNT_NAME:
      return {
        ...state,
        name: action.payload
      }

    case UPDATE_ACCOUNT_USERNAME:
      return {
        ...state,
        username: action.payload
      }

    default:
      return state
  }
}
