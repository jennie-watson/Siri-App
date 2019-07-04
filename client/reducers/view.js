import { SET_VIEW } from '../actions/index'

const initialState = 'login'

export default (state = initialState, { type, view }) => {
  switch (type) {
    case SET_VIEW:
      return view
    default:
      return state
  }
}
