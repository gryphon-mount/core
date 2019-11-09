export const TEST_DISPATCH = 'TEST_DISPATCH'

export const testDispatch = () => ({
  type: TEST_DISPATCH
})

export const initialState = {
  str: 'Hello, world',
  val: 0
}

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        str: 'Action successfully dispatched!',
        val: state.val + 1
      }

    default:
      return state
  }
}
