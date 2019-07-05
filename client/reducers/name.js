import { SET_NAME, RESET_STATE } from '../actions'

const initialState = 'user undefined'

export default (state = initialState, { type, name }) => {
  switch (type) {
    case SET_NAME:
      return name
    case RESET_STATE:
      return state
    default:
      return state
  }
}
