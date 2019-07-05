import { SET_NAME } from '../actions'

const initialState = 'user undefined'

export default (state = initialState, { type, name }) => {
  switch (type) {
    case SET_NAME:
      return name
    default:
      return state
  }
}
