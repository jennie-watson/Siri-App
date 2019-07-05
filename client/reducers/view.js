import { SET_VIEW, RESET_STATE } from '../actions/index'

const initialState = 'verdict'

export default (state = initialState, { type, view }) => {
  switch (type) {
    case SET_VIEW:
      return view
    case RESET_STATE:
      return state
    default:
      return state
  }
}
