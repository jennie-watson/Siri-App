import {SCORE} from '../actions/getData'

function setScore (state = 0, action) {
  switch (action.type) {
    case SCORE:
      return action.score

    default:
      return state
  }
}

export default setScore
