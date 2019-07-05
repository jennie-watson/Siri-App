import { RECIEVE_DATA } from '../actions/getData'
import { RESET_STATE } from '../actions/index'

function getData (state = [], action) {
  switch (action.type) {
    case RECIEVE_DATA:
      return action.data
    case RESET_STATE:
      return state
    default:
      return state
  }
}

export default getData
