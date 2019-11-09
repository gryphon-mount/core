import reducer, {
  initialState,
  TEST_DISPATCH,
  testDispatch
} from '../testDispatch'

describe('actions', () => {
  it('should create an action without a payload', () => {
    expect(testDispatch()).toEqual({
      type: TEST_DISPATCH
    })
  })
})

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle TEST_DISPATCH', () => {
    expect(
      reducer(undefined, {
        type: TEST_DISPATCH
      })
    ).toEqual({
      ...initialState,
      str: 'Action successfully dispatched!',
      val: initialState.val + 1
    })
  })
})
