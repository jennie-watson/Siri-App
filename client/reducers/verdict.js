import { RESET_STATE } from '../actions'

const initialState = 13

const reducer = (state = initialState, { type, score }) => {
  switch (type) {
    case RESET_STATE:
      return state
    default:
      return state
  }
}

export default reducer
