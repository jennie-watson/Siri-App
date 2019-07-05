import { GET_SCORE } from '../actions'

const initialState = 13

const reducer = (state = initialState, { type, score }) => {
  switch (type) {
    case GET_SCORE:
      return score
    default:
      return state
  }
}

export default reducer
