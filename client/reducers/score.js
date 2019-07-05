import { SCORE } from '../actions/getData'
import { RESET_STATE } from '../actions/index'

function setScore (state = 0, action) {
  switch (action.type) {
    case SCORE:
      return action.score
    case RESET_STATE:
      return state
    default:
      return state
  }
}

export default setScore
